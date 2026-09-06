/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/python';

export const forBlock = Object.create(null);
let functionCounter = 0;

forBlock['display_print_block'] = function(block, generator) {
  const text = block.getFieldValue('Text') || '';
  const code = `brain.screen.print("${text}")\n`;
  return code;
};

forBlock['print_value_on_brain_screen_block'] = function(block, generator) {
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
  return `brain_inertial.calibrate()\n`;
};

forBlock['set_gyro_heading_block'] = function(block, generator) {
  const heading = block.getFieldValue('NAME') || 0;
  return `brain_inertial.set_heading(${heading})\n`;
};

forBlock['set_gyro_rotation_block'] = function(block, generator) {
  const rotation = block.getFieldValue('NAME') || 0;
  return `brain_inertial.set_rotation(${rotation})\n`;
};

forBlock['get_gyro_heading_block'] = function(block, generator) {
  return ['brain_inertial.heading()', Order.ATOMIC];
};

forBlock['get_gyro_rotation_block'] = function(block, generator) {
  return ['brain_inertial.rotation()', Order.ATOMIC];
};

forBlock['get_gyro_rate_block'] = function(block, generator) {
  return ['brain_inertial.rate()', Order.ATOMIC];
};

forBlock['is_gyro_calibrating_block'] = function(block, generator) {
  return ['brain_inertial.is_calibrating()', Order.ATOMIC];
};

forBlock['drive_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const drivetrain = generator.valueToCode(block, 'DRIVETRAIN', Order.ATOMIC) || 'drivetrain';
  return `${drivetrain}.drive(${direction})\n`;
};

forBlock['drive_for_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const distance = block.getFieldValue('DISTANCE') || 0;
  const unit = block.getFieldValue('UNIT');
  const drivetrain = generator.valueToCode(block, 'DRIVETRAIN', Order.ATOMIC) || 'drivetrain';
  return `${drivetrain}.drive_for(${direction}, ${distance}, ${unit})\n`;
};

forBlock['turn_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const drivetrain = generator.valueToCode(block, 'DRIVETRAIN', Order.ATOMIC) || 'drivetrain';
  return `${drivetrain}.turn(${direction})\n`;
};

forBlock['turn_for_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const angle = block.getFieldValue('ANGLE') || 90;
  const drivetrain = generator.valueToCode(block, 'DRIVETRAIN', Order.ATOMIC) || 'drivetrain';
  return `${drivetrain}.turn_for(${direction}, ${angle}, DEGREES)\n`;
};

forBlock['create_motor_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  const reverse = block.getFieldValue('REVERSE') === 'TRUE' ? 'True' : 'False';
  return [`Motor(${port}, 1.0, ${reverse})`, Order.ATOMIC];
};

forBlock['create_motor_group_from_list'] = function(block, generator) {
  const listCode = generator.valueToCode(block, 'MOTOR_LIST', Order.ATOMIC) || '[]';
  return [`MotorGroup(*${listCode})`, Order.ATOMIC];
};

forBlock['spin_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const velocity = block.getFieldValue('VELOCITY');
  const unit = block.getFieldValue('UNIT');
  const motor = generator.valueToCode(block, 'MOTOR', Order.ATOMIC) || 'motor';
  return `${motor}.spin(${direction}, ${velocity}, ${unit})\n`;
};

forBlock['spin_for_block'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  const distance = block.getFieldValue('DISTANCE');
  const distUnit = block.getFieldValue('DIST_UNIT');
  const velocity = block.getFieldValue('VELOCITY');
  const velUnit = block.getFieldValue('VEL_UNIT');
  const motor = generator.valueToCode(block, 'MOTOR', Order.ATOMIC) || 'motor';
  return `${motor}.spin_for(${direction}, ${distance}, ${distUnit}, ${velocity}, ${velUnit})\n`;
};

forBlock['stop_motor_block'] = function(block, generator) {
  const motor = generator.valueToCode(block, 'MOTOR', Order.ATOMIC) || 'motor';
  return `${motor}.stop()\n`;
};

forBlock['spin_to_position_block'] = function(block, generator) {
  const motor = generator.valueToCode(block, 'MOTOR', Order.ATOMIC) || 'motor';
  const position = block.getFieldValue('POSITION') || 0;
  const unit = block.getFieldValue('UNIT');
  const velocity = block.getFieldValue('VELOCITY') || 50;
  const velUnit = block.getFieldValue('VEL_UNIT');
  return `${motor}.spin_to_position(${position}, ${unit}, ${velocity}, ${velUnit})\n`;
};

forBlock['create_drivetrain_block'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', Order.ATOMIC) || 'None';
  const right = generator.valueToCode(block, 'RIGHT', Order.ATOMIC) || 'None';
  const wheelTravel = block.getFieldValue('WHEEL_TRAVEL') || 200;
  const trackWidth = block.getFieldValue('TRACK_WIDTH') || 173;
  const wheelBase = block.getFieldValue('WHEEL_BASE') || 76;
  const units = block.getFieldValue('UNITS');
  const gearRatio = block.getFieldValue('GEAR_RATIO') || 1;
  return [`DriveTrain(${left}, ${right}, ${wheelTravel}, ${trackWidth}, ${wheelBase}, ${units}, ${gearRatio})`, Order.ATOMIC];
};

forBlock['create_smart_drive_block'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', Order.ATOMIC) || 'None';
  const right = generator.valueToCode(block, 'RIGHT', Order.ATOMIC) || 'None';
  const wheelTravel = block.getFieldValue('WHEEL_TRAVEL') || 200;
  const trackWidth = block.getFieldValue('TRACK_WIDTH') || 173;
  const wheelBase = block.getFieldValue('WHEEL_BASE') || 76;
  const units = block.getFieldValue('UNITS');
  const gearRatio = block.getFieldValue('GEAR_RATIO') || 1;
  return [`SmartDrive(${left}, ${right}, brain_inertial, ${wheelTravel}, ${trackWidth}, ${wheelBase}, ${units}, ${gearRatio})`, Order.ATOMIC];
};

forBlock['stop_drivetrain_block'] = function(block, generator) {
  const drivetrain = generator.valueToCode(block, 'DRIVETRAIN', Order.ATOMIC) || 'drivetrain';
  const mode = block.getFieldValue('MODE');
  return `${drivetrain}.stop(${mode})\n`;
};

forBlock['create_pneumatic_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`Pneumatic(${port})`, Order.ATOMIC];
};

forBlock['pneumatic_pump_on_block'] = function(block, generator) {
  const pneumatic = generator.valueToCode(block, 'PNEUMATIC', Order.ATOMIC) || 'pneumatic_1';
  return `${pneumatic}.pump_on()\n`;
};

forBlock['pneumatic_pump_off_block'] = function(block, generator) {
  const pneumatic = generator.valueToCode(block, 'PNEUMATIC', Order.ATOMIC) || 'pneumatic_1';
  return `${pneumatic}.pump_off()\n`;
};

forBlock['pneumatic_extend_block'] = function(block, generator) {
  const pneumatic = generator.valueToCode(block, 'PNEUMATIC', Order.ATOMIC) || 'pneumatic_1';
  const cylinder = block.getFieldValue('CYLINDER');
  return `${pneumatic}.extend(${cylinder})\n`;
};

forBlock['pneumatic_retract_block'] = function(block, generator) {
  const pneumatic = generator.valueToCode(block, 'PNEUMATIC', Order.ATOMIC) || 'pneumatic_1';
  const cylinder = block.getFieldValue('CYLINDER');
  return `${pneumatic}.retract(${cylinder})\n`;
};

forBlock['pneumatic_installed_block'] = function(block, generator) {
  const pneumatic = generator.valueToCode(block, 'PNEUMATIC', Order.ATOMIC) || 'pneumatic_1';
  return [`${pneumatic}.installed()`, Order.ATOMIC];
};

forBlock['create_bumper_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`Bumper(${port})`, Order.ATOMIC];
};

forBlock['bumper_pressed_block'] = function(block, generator) {
  const bumper = generator.valueToCode(block, 'BUMPER', Order.ATOMIC) || 'bumper_1';
  return [`${bumper}.pressing()`, Order.ATOMIC];
};

forBlock['bumper_pressed_handler'] = function(block, generator) {
  const bumper = generator.valueToCode(block, 'BUMPER', Order.ATOMIC) || 'bumper_1';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'bumper_pressed_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '  pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${bumper}.pressed(${functionName})\n`;
  return code;
};

forBlock['bumper_released_handler'] = function(block, generator) {
  const bumper = generator.valueToCode(block, 'BUMPER', Order.ATOMIC) || 'bumper_1';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'bumper_released_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${bumper}.released(${functionName})\n`;
  return code;
};



forBlock['create_touch_led_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`Touchled(Ports.${port})`, Order.ATOMIC];
};

forBlock['touch_led_pressed_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  return [`${touchLed}.pressing()`, Order.ATOMIC];
};

forBlock['touch_led_set_color_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const color = block.getFieldValue('COLOR');
  return `${touchLed}.set_color(Color.${color})\n`;
};

forBlock['touch_led_set_brightness_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const brightness = block.getFieldValue('BRIGHTNESS') || 50;
  return `${touchLed}.set_brightness(${brightness})\n`;
};

forBlock['touch_led_pressed_handler'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'touch_led_pressed_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${touchLed}.pressed(${functionName})\n`;
  return code;
};

forBlock['touch_led_released_handler'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'touch_led_released_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${touchLed}.released(${functionName})\n`;
  return code;
};

forBlock['touch_led_set_fade_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const fadeType = block.getFieldValue('FADE_TYPE');
  return `${touchLed}.set_fade(FadeType.${fadeType})\n`;
};

forBlock['touch_led_set_blink_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  const color = block.getFieldValue('COLOR');
  const ontime = block.getFieldValue('ONTIME') || 0.25;
  const offtime = block.getFieldValue('OFFTIME') || 0.25;
  return `${touchLed}.set_blink(Color.${color}, ${ontime}, ${offtime})\n`;
};

forBlock['touch_led_stop_blink_block'] = function(block, generator) {
  const touchLed = generator.valueToCode(block, 'TOUCH_LED', Order.ATOMIC) || 'touch_led';
  return `${touchLed}.set_brightness(0)\n`;
};


forBlock['create_color_sensor_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`ColorSensor(Ports.${port})`, Order.ATOMIC];
};

forBlock['color_sensor_object_detected_handler'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'color_sensor_detected_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${sensor}.object_detected(${functionName})\n`;
  return code;
};

forBlock['color_sensor_set_light_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  const state = block.getFieldValue('LIGHT_STATE');
  let code = '';
  if (state === 'ON') {
    code = `${sensor}.set_light(100)\n`;
  } else if (state === 'OFF') {
    code = `${sensor}.set_light(0)\n`;
  } else if (state === 'BRIGHTNESS') {
    const brightness = block.getFieldValue('BRIGHTNESS') || 50;
    code = `${sensor}.set_light(${brightness})\n`;
  }
  return code;
};

forBlock['color_sensor_set_light_power_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  const power = block.getFieldValue('POWER') || 50;
  return `${sensor}.set_light_power(${power})\n`;
};

forBlock['color_sensor_is_near_object_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  return [`${sensor}.is_near_object()`, Order.ATOMIC];
};

forBlock['color_sensor_color_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  return [`${sensor}.color()`, Order.ATOMIC];
};

forBlock['color_sensor_brightness_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  return [`${sensor}.brightness()`, Order.ATOMIC];
};

forBlock['color_sensor_hue_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'COLOR_SENSOR', Order.ATOMIC) || 'color_1';
  return [`${sensor}.hue()`, Order.ATOMIC];
};

forBlock['create_distance_sensor_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`Distance(Ports.${port})`, Order.ATOMIC];
};

forBlock['distance_is_object_detected_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'DISTANCE_SENSOR', Order.ATOMIC) || 'distance_1';
  return [`${sensor}.is_object_detected()`, Order.ATOMIC];
};

forBlock['distance_object_distance_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'DISTANCE_SENSOR', Order.ATOMIC) || 'distance_1';
  const unit = block.getFieldValue('UNIT');
  return [`${sensor}.object_distance(${unit})`, Order.ATOMIC];
};

forBlock['distance_object_velocity_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'DISTANCE_SENSOR', Order.ATOMIC) || 'distance_1';
  return [`${sensor}.object_velocity()`, Order.ATOMIC];
};


forBlock['create_optical_sensor_block'] = function(block, generator) {
  const port = block.getFieldValue('PORT');
  return [`Optical(Ports.${port})`, Order.ATOMIC];
};

forBlock['optical_set_light_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const state = block.getFieldValue('LIGHT_STATE');
  return `${sensor}.set_light(${state === 'ON' ? 'LedStateType.ON' : 'LedStateType.OFF'})\n`;
};

forBlock['optical_set_light_power_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const power = block.getFieldValue('POWER') || 50;
  return `${sensor}.set_light_power(${power})\n`;
};

forBlock['optical_object_detect_threshold_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const threshold = block.getFieldValue('THRESHOLD') || 128;
  return `${sensor}.object_detect_threshold(${threshold})\n`;
};

forBlock['optical_is_near_object_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  return [`${sensor}.is_near_object()`, Order.ATOMIC];
};

forBlock['optical_color_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  return [`${sensor}.color()`, Order.ATOMIC];
};

forBlock['optical_brightness_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const code = `${sensor}.brightness()`;
  return [code, Order.ATOMIC];
};

forBlock['optical_hue_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  return [`${sensor}.hue()`, Order.ATOMIC];
};

forBlock['optical_rgb_block'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const code = `${sensor}.rgb()`;
  return [code, Order.ATOMIC];
};

forBlock['optical_object_detected_handler'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'optical_detected_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${sensor}.object_detected(${functionName})\n`;
  return code;
};

forBlock['optical_object_lost_handler'] = function(block, generator) {
  const sensor = generator.valueToCode(block, 'OPTICAL_SENSOR', Order.ATOMIC) || 'optical_1';
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = 'optical_lost_' + functionCounter;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  const code = `\ndef ${functionName}():\n${body}\n${sensor}.object_lost(${functionName})\n`;
  return code;
};

forBlock['create_controller_block'] = function(block, generator) {
  return ['Controller()', Order.ATOMIC];
};

forBlock['controller_remote_enabled_block'] = function(block, generator) {
  const state = block.getFieldValue('ENABLED'); // "True" или "False"
  return `remote_control_code_enabled = ${state}\n`;
};

forBlock['controller_button_pressing_block'] = function(block, generator) {
  const controller = generator.valueToCode(block, 'CONTROLLER', Order.ATOMIC) || 'controller';
  const button = block.getFieldValue('BUTTON');
  return [`${controller}.${button}.pressing()`, Order.ATOMIC];
};

forBlock['controller_axis_position_block'] = function(block, generator) {
  const controller = generator.valueToCode(block, 'CONTROLLER', Order.ATOMIC) || 'controller';
  const axis = block.getFieldValue('AXIS');
  return [`${controller}.${axis}.position()`, Order.ATOMIC];
};

forBlock['controller_button_pressed_handler'] = function(block, generator) {
  const controller = generator.valueToCode(block, 'CONTROLLER', Order.ATOMIC) || 'controller';
  const button = block.getFieldValue('BUTTON');
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = `controller_btn_pressed_${functionCounter}`;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  return `\ndef ${functionName}():\n${body}\n${controller}.${button}.pressed(${functionName})\n`;
};

forBlock['controller_button_released_handler'] = function(block, generator) {
  const controller = generator.valueToCode(block, 'CONTROLLER', Order.ATOMIC) || 'controller';
  const button = block.getFieldValue('BUTTON');
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = `controller_btn_released_${functionCounter}`;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  return `\ndef ${functionName}():\n${body}\n${controller}.${button}.released(${functionName})\n`;
};

forBlock['controller_axis_changed_handler'] = function(block, generator) {
  const controller = generator.valueToCode(block, 'CONTROLLER', Order.ATOMIC) || 'controller';
  const axis = block.getFieldValue('AXIS');
  const doCode = generator.statementToCode(block, 'DO');
  functionCounter++;
  const functionName = `controller_axis_changed_${functionCounter}`;
  const body = doCode ? doCode.split('\n').map(line => line).join('\n') : '    pass\n';
  return `\ndef ${functionName}():\n${body}\n${controller}.${axis}.changed(${functionName})\n`;
};