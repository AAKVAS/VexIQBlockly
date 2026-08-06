/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/python';

export const forBlock = Object.create(null);

forBlock['display_print_block'] = function(block, generator) {
  const text = block.getFieldValue('Text') || '';
  const code = `brain.screen.print("${text}")\n`;
  return code;
};

forBlock['print_number_on_brain_screen_block'] = function(block, generator) {
  const number = generator.valueToCode(block, 'Number', Order.NONE) || '0';
  return `brain.screen.print(${number})\n`;
};

forBlock['display_newline_block'] = function(block, generator) {
  return `brain.screen.next_row()\n`;
};

forBlock['clear_display_block'] = function(block, generator) {
  return `brain.screen.clear_screen()\n`;
};

forBlock['display_font_color_block'] = function(block, generator) {
  const color = block.getFieldValue('FONT_COLOR');
  return `brain.screen.set_pen_color(Color.${color})\n`;
};

forBlock['display_background_color_block'] = function(block, generator) {
  const color = block.getFieldValue('FONT_COLOR');
  return `brain.screen.set_fill_color(Color.${color})\n`;
};

forBlock['display_font_style_block'] = function(block, generator) {
  const font = block.getFieldValue('FONT_FAMILY');
  const size = block.getFieldValue('SIZE');
  return `brain.screen.set_font(${font}${size})\n`;
};

forBlock['draw_pixel_block'] = function(block, generator) {
  const x = block.getFieldValue('X') || 0;
  const y = block.getFieldValue('Y') || 0;
  return `brain.screen.draw_pixel(${x}, ${y})\n`;
};

forBlock['draw_line_block'] = function(block, generator) {
  const x1 = block.getFieldValue('X1') || 0;
  const y1 = block.getFieldValue('Y1') || 0;
  const x2 = block.getFieldValue('X2') || 0;
  const y2 = block.getFieldValue('Y2') || 0;
  return `brain.screen.draw_line(${x1}, ${y1}, ${x2}, ${y2})\n`;
};

forBlock['draw_rectangle_block'] = function(block, generator) {
  const x = block.getFieldValue('X1') || 0;
  const y = block.getFieldValue('Y1') || 0;
  const w = block.getFieldValue('WIDTH') || 0;
  const h = block.getFieldValue('HEIGHT') || 0;
  return `brain.screen.draw_rectangle(${x}, ${y}, ${w}, ${h})\n`;
};

forBlock['draw_circle_block'] = function(block, generator) {
  const x = block.getFieldValue('X') || 0;
  const y = block.getFieldValue('Y') || 0;
  const r = block.getFieldValue('RADIUS') || 0;
  return `brain.screen.draw_circle(${x}, ${y}, ${r})\n`;
};

forBlock['set_pen_width_block'] = function(block, generator) {
  const width = block.getFieldValue('WIDTH') || 0;
  return `brain.screen.set_pen_width(${width})\n`;
};

forBlock['display_fill_color_block'] = function(block, generator) {
  const color = block.getFieldValue('FONT_COLOR');
  return `brain.screen.set_fill_color(Color.${color})\n`;
};

forBlock['play_sound_block'] = function(block, generator) {
  const sound = block.getFieldValue('SOUND');
  return `brain.play_sound(SoundType.${sound})\n`;
};

forBlock['play_note_block'] = function(block, generator) {
  const note = block.getFieldValue('SOUND');
  const octave = block.getFieldValue('octave');
  const duration = block.getFieldValue('Duration') || 500;
  return `brain.play_note(${octave}, ${note}, ${duration})\n`;
};

forBlock['brain_left_button_pressed_block'] = function(block, generator) {
  return ['brain.buttonLeft.pressing()', Order.ATOMIC];
};

forBlock['brain_right_button_pressed_block'] = function(block, generator) {
  return ['brain.buttonRight.pressing()', Order.ATOMIC];
};

forBlock['brain_check_button_pressed_block'] = function(block, generator) {
  return ['brain.buttonCheck.pressing()', Order.ATOMIC];
};

forBlock['get_battery_capacity_block'] = function(block, generator) {
  return ['brain.battery.capacity()', Order.ATOMIC];
};

forBlock['get_brain_timer_block'] = function(block, generator) {
  return ['brain.timer.time(MSEC)', Order.ATOMIC];
};

forBlock['reset_brain_timer_block'] = function(block, generator) {
  return `brain.timer.clear()\n`;
};

forBlock['wait_until_block'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'NAME', Order.NONE) || 'False';
  return `while not ${condition}:\n    pass\n`;
};

forBlock['wait_block'] = function(block, generator) {
  const seconds = block.getFieldValue('TIME') || 1;
  return `wait(${seconds}, SECONDS)\n`;
};

forBlock['stop_program_block'] = function(block, generator) {
  return `brain.program_stop()\n`;
};

forBlock['break_block'] = function(block, generator) {
  return `break\n`;
};

forBlock['calibrate_gyro_block'] = function(block, generator) {
  return `drivetrain_gyro.calibrate()\n`;
};

forBlock['set_gyro_heading_block'] = function(block, generator) {
  const heading = block.getFieldValue('NAME') || 0;
  return `drivetrain_gyro.set_heading(${heading})\n`;
};

forBlock['set_gyro_rotation_block'] = function(block, generator) {
  const rotation = block.getFieldValue('NAME') || 0;
  return `drivetrain_gyro.set_rotation(${rotation})\n`;
};

forBlock['get_gyro_heading_block'] = function(block, generator) {
  return ['drivetrain_gyro.heading()', Order.ATOMIC];
};

forBlock['get_gyro_rotation_block'] = function(block, generator) {
  return ['drivetrain_gyro.rotation()', Order.ATOMIC];
};

forBlock['get_gyro_rate_block'] = function(block, generator) {
  return ['drivetrain_gyro.rate()', Order.ATOMIC];
};

forBlock['is_gyro_calibrating_block'] = function(block, generator) {
  return ['drivetrain_gyro.is_calibrating()', Order.ATOMIC];
};
