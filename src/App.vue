<script setup>

import { ref, onMounted, nextTick } from "vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/commands";

// import { javascriptGenerator } from "blockly/javascript";

import { pythonGenerator } from "blockly/python";

const foo = ref();
const code = ref();
const options = {
  media: "media/",
  grid: {
    spacing: 25,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
  toolbox: `<xml>
            <block type="takeoff"></block>
            <block type="front"></block>
            <block type="back"></block>
            <block type="left"></block>
            <block type="right"></block>
            <block type="wait"></block>
            <block type="take_picture"></block>
            <block type="land"></block>  
        </xml>`,
};
const updateCode = () => {
  code.value = pythonGenerator.workspaceToCode(foo.value.workspace);
};

// Add event listener after component is mounted
onMounted(() => {
  nextTick(() => {
    const workspace = foo.value.workspace; // access Blockly workspace
    addUnremovableBlock(workspace);
    workspace.addChangeListener(updateCode); // set up change listener
  });
});

// Function to add unremovable block
const addUnremovableBlock = (workspace) => {
  const block = workspace.newBlock('unremovable_block'); // replace with your block type
  block.initSvg();
  block.render();
  block.setDeletable(false);
  block.moveBy(50, 50); // adjust position as needed
};

const exportCode = () => {
  const blob = new Blob([code.value], { type: 'text/plain' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = "generated_code.py"; // or ".txt" if it's not Python code
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
};

const showCode = () => (code.value = pythonGenerator.workspaceToCode(foo.value.workspace));
</script>

<template>
  <div id="app">
    <div id="logo-container">
        <img alt="Celia logo" src="./assets/celiaa.png" style="width: 200px; height: 200px;"/>
    </div>

    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
      <!-- <button v-on:click="showCode()">Show Python</button> -->
      <button v-on:click="exportCode()">Export Code</button>

      <pre v-html="code"></pre>
    </p>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex; /* Estabelece um contexto flexível */
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: center; /* Centraliza itens horizontalmente */
  justify-content: center; /* Centraliza itens verticalmente */
  height: 100vh; /* Faz com que a app preencha a altura total da tela */
}
#logo-container {
  justify-content: center;
  align-items: center;
  height: 100vh; /* ou a altura que você desejar */
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}

#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
}
</style>
