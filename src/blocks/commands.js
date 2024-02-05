/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Define custom blocks.
 * @author abbychau@gmail.com (Abby Chau)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from "blockly/core";
// import {javascriptGenerator, Order} from "blockly/javascript";
import { pythonGenerator, Order } from "blockly/python";


function color() {
  return Math.floor(Math.random() * (360 + 1));
}

Blockly.Blocks['takeoff_tello'] = {
  init: function() {
    this.appendValueInput("TIME")
        .setCheck(null)
        .appendField("Takeoff for #")
        .appendField(new Blockly.FieldNumber(10), "ID")
        .appendField("seconds");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["takeoff"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Takeoff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Cause the drone to leave the ground.");
    this.setHelpUrl("https://example.com"); // Replace with a relevant URL if available
  }
};


pythonGenerator.forBlock["takeoff"] = function (block, generator) {
  var code = 'tello.takeoff()\n'; // Cria o comando para mover o drone para trás
  return code;
};

Blockly.Blocks["land"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Land Drone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Cause the drone to return to the ground.");
    this.setHelpUrl("https://example.com"); // Replace with a relevant URL if available
  }
};

pythonGenerator.forBlock["land"] = function (block, generator) {
  var code = 'tello.land()\n'; // Cria o comando para mover o drone para trás
  return code;
};

Blockly.Blocks["front"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Forward at")
      .appendField(new Blockly.FieldNumber(0, 0, 100), "SPEED")
      .appendField("speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Move the drone forward at 0-100% speed.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};
pythonGenerator.forBlock["front"] = function (block, generator) {
  var speed = block.getFieldValue('SPEED'); // Obtém o valor da velocidade
  var code = 'tello.move_forward(' + speed + ')\n'; // Cria o comando para mover o drone para trás
  return code;
};


Blockly.Blocks["back"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Backward at")
      .appendField(new Blockly.FieldNumber(0, 0, 100), "SPEED")
      .appendField("speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Move the drone back at 0-100% speed.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};

pythonGenerator.forBlock["back"] = function (block, generator) {
  var speed = block.getFieldValue('SPEED'); // Obtém o valor da velocidade
  var code = 'tello.move_back(' + speed + ')\n'; // Cria o comando para mover o drone para trás
  return code;
};



Blockly.Blocks["left"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Left at")
      .appendField(new Blockly.FieldNumber(0, 0, 100), "SPEED")
      .appendField("speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Move the drone left at 0-100% speed.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};

pythonGenerator.forBlock["left"] = function (block, generator) {
  var speed = block.getFieldValue('SPEED'); // Obtém o valor da velocidade
  var code = 'tello.move_left(' + speed + ')\n'; // Cria o comando para mover o drone para a direita
  return code;
};


Blockly.Blocks["right"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Right at")
      .appendField(new Blockly.FieldNumber(0, 0, 100), "SPEED")
      .appendField("speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Move the drone right at 0-100% speed.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};

pythonGenerator.forBlock["right"] = function (block, generator) {
  var speed = block.getFieldValue('SPEED'); // Obtém o valor da velocidade
  var code = 'tello.move_right(' + speed + ')\n'; // Cria o comando para mover o drone para a direita
  return code;
};


Blockly.Blocks["wait"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Wait")
      .appendField(new Blockly.FieldNumber(1, 0, Infinity), "DURATION")
      .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Wait N seconds before calling the next statement.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};

pythonGenerator.forBlock["wait"] = function (block, generator) {
  var duration = block.getFieldValue('DURATION'); // Obtém o número do campo de entrada
  var code = 'import time\n'; // Importa o módulo time
  code += 'time.sleep(' + duration + ')\n'; // Adiciona a linha de código para a função sleep
  return code;
};



Blockly.Blocks["print"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("print")
      .appendField(new Blockly.FieldTextInput(""), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Write message out to terminal.");
    // Optionally, add a help URL if you have one
    // this.setHelpUrl("https://example.com");
  }
};

pythonGenerator.forBlock["print"] = function (block, generator) {
  var message = block.getFieldValue('MESSAGE'); // Obtém o texto do campo de entrada
  var code = 'print(' + JSON.stringify(message) + ')\n'; // Cria a linha de código Python para imprimir a mensagem
  return code;
};

Blockly.Blocks["take_picture"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Take Picture");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("Cause the drone to return to the ground.");
    this.setHelpUrl("https://example.com"); // Replace with a relevant URL if available
  }
};

pythonGenerator.forBlock["take_picture"] = function (block, generator) {
  var code = 'cv2.imwrite("picture.png", frame_read.frame)\n'; // Cria o comando para mover o drone para trás
  return code;
};

Blockly.Blocks['unremovable_block'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Tello Python Imports");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(color()); // Adjust the color() to match your palette
    this.setTooltip("This block cannot be removed.");
    this.setDeletable(false); // Normally doesn't prevent deletion from the workspace, but used for contextual purposes
    this.setHelpUrl("https://example.com"); // Replace with a relevant URL if available
  }
};

pythonGenerator.forBlock['unremovable_block'] = function(block) {
  var code = 'from djitellopy import Tello\n';
  code += 'import cv2, math, time\n\n';
  code += 'tello = Tello()\n';
  code += 'tello.connect()\n\n';
  code += 'tello.streamon()\n';
  code += 'frame_read = tello.get_frame_read()\n\n';
  return code;
};


