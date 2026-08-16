import * as Blockly from 'blockly';

export const definitions = Blockly.common.createBlockDefinitionsFromJsonArray([
{
  "type": "display_print_block",
  "tooltip":  '%{BKY_PRINT_ON_BRAIN_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_PRINT_ON_BRAIN_TITLE}',
  "args0": [
    {
      "type": "field_input",
      "name": "Text",
      "text": "Hello World!"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "print_value_on_brain_screen_block",
  "tooltip": '%{BKY_PRINT_VALUE_ON_BRAIN_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_PRINT_VALUE_ON_BRAIN_TITLE}',
  "args0": [
    {
      "type": "input_value",
      "name": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},                    
{
  "type": "display_newline_block",
  "tooltip": '%{BKY_DISPLAY_NEWLINE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DISPLAY_NEWLINE_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "clear_display_block",
  "tooltip": '%{BKY_CLEAR_DISPLAY_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_CLEAR_DISPLAY_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "display_font_color_block",
  "tooltip": '%{BKY_DISPLAY_FONT_COLOR_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DISPLAY_FONT_COLOR_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FONT_COLOR",
      "options": [
        ['%{BKY_RED}', "RED"],
        ['%{BKY_GREEN}', "GREEN"],
        ['%{BKY_BLUE}', "BLUE"],
        ['%{BKY_WHITE}', "WHITE"],
        ['%{BKY_BLACK}', "BLACK"],
        ['%{BKY_GRAY}', "GRAY"],
        ['%{BKY_YELLOW}', "YELLOW"],
        ['%{BKY_ORANGE}', "ORANGE"],
        ['%{BKY_PURPLE}', "PURPLE"],
        ['%{BKY_REDVIOLET}', "RED_VIOLET"],
        ['%{BKY_VIOLET}', "VIOLET"],
        ['%{BKY_BLUEVIOLET}', "BLUE_VIOLET"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "display_background_color_block",
  "tooltip": '%{BKY_DISPLAY_BACKGROUND_COLOR_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DISPLAY_BACKGROUND_COLOR_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FONT_COLOR",
      "options": [
        ['%{BKY_RED}', "RED"],
        ['%{BKY_GREEN}', "GREEN"],
        ['%{BKY_BLUE}', "BLUE"],
        ['%{BKY_WHITE}', "WHITE"],
        ['%{BKY_BLACK}', "BLACK"],
        ['%{BKY_GRAY}', "GRAY"],
        ['%{BKY_YELLOW}', "YELLOW"],
        ['%{BKY_ORANGE}', "ORANGE"],
        ['%{BKY_PURPLE}', "PURPLE"],
        ['%{BKY_REDVIOLET}', "RED_VIOLET"],
        ['%{BKY_VIOLET}', "VIOLET"],
        ['%{BKY_BLUEVIOLET}', "BLUE_VIOLET"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},                    
{
  "type": "display_font_style_block",
  "tooltip": '%{BKY_DISPLAY_FONT_STYLE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DISPLAY_FONT_STYLE_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FONT_FAMILY",
      "options": [
        ['%{BKY_FONT_MONO}', "MONO"],
        ['%{BKY_FONT_PROP}', "PROP"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "SIZE",
      "options": [
        ['%{BKY_SIZE_S}', "20"],
        ['%{BKY_SIZE_M}', "30"],
        ['%{BKY_SIZE_L}', "40"],
        ['%{BKY_SIZE_XL}', "60"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "draw_pixel_block",
  "tooltip": '%{BKY_DRAW_PIXEL_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DRAW_PIXEL_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 107
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "draw_line_block",
  "tooltip": '%{BKY_DRAW_LINE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DRAW_LINE_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "X1",
      "value": 0,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "Y1",
      "value": 0,
      "min": 0,
      "max": 107
    },
    {
      "type": "field_number",
      "name": "X2",
      "value": 10,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "Y2",
      "value": 10,
      "min": 0,
      "max": 107
    },
    {
      "type": "input_dummy",
      "name": "COORDS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "draw_rectangle_block",
  "tooltip": '%{BKY_DRAW_RECTANGLE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DRAW_RECTANGLE_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "X1",
      "value": 0,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "Y1",
      "value": 0,
      "min": 0,
      "max": 107
    },
    {
      "type": "field_number",
      "name": "WIDTH",
      "value": 10,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "HEIGHT",
      "value": 10,
      "min": 0,
      "max": 107
    },
    {
      "type": "input_dummy",
      "name": "COORDS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "draw_circle_block",
  "tooltip": '%{BKY_DRAW_CIRCLE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DRAW_CIRCLE_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 159
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 107
    },
    {
      "type": "field_number",
      "name": "RADIUS",
      "value": 10,
      "min": 0,
      "max": 159
    },
    {
      "type": "input_dummy",
      "name": "COORDS"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "set_pen_width_block",
  "tooltip": '%{BKY_SET_PEN_WIDTH_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_SET_PEN_WIDTH_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "WIDTH",
      "value": 0,
      "min": 0,
      "max": 32
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "display_fill_color_block",
  "tooltip": '%{BKY_DISPLAY_FILL_COLOR_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_DISPLAY_FILL_COLOR_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FONT_COLOR",
      "options": [
        ['%{BKY_RED}', "RED"],
        ['%{BKY_GREEN}', "GREEN"],
        ['%{BKY_BLUE}', "BLUE"],
        ['%{BKY_WHITE}', "WHITE"],
        ['%{BKY_BLACK}', "BLACK"],
        ['%{BKY_GRAY}', "GRAY"],
        ['%{BKY_YELLOW}', "YELLOW"],
        ['%{BKY_ORANGE}', "ORANGE"],
        ['%{BKY_PURPLE}', "PURPLE"],
        ['%{BKY_REDVIOLET}', "RED_VIOLET"],
        ['%{BKY_VIOLET}', "VIOLET"],
        ['%{BKY_BLUEVIOLET}', "BLUE_VIOLET"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "play_sound_block",
  "tooltip": '%{BKY_PLAY_SOUND_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_PLAY_SOUND_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SOUND",
      "options": [
        ['%{BKY_SOUND_ALARM}', "ALARM"],
        ['%{BKY_SOUND_ALARM2}', "ALARM2"],
        ['%{BKY_SOUND_DOOR_CLOSE}', "DOOR_CLOSE"],
        ['%{BKY_SOUND_FILLUP}', "FILLUP"],
        ['%{BKY_SOUND_HEADLIGHTS_OFF}', "HEADLIGHTS_OFF"],
        ['%{BKY_SOUND_HEADLIGHTS_ON}', "HEADLIGHTS_ON"],
        ['%{BKY_SOUND_RATCHET}', "RATCHET"],
        ['%{BKY_SOUND_RATCHET2}', "RATCHET2"],
        ['%{BKY_SOUND_SIREN}', "SIREN"],
        ['%{BKY_SOUND_SIREN2}', "SIREN2"],
        ['%{BKY_SOUND_TADA}', "TADA"],
        ['%{BKY_SOUND_TOLLBOOTH}', "TOLLBOOTH"],
        ['%{BKY_SOUND_WRENCH}', "WRENCH"],
        ['%{BKY_SOUND_WRONG_WAY}', "WRONG_WAY"],
        ['%{BKY_SOUND_WRONG_WAY_SLOW}', "WRONG_WAY_SLOW"]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210
},
{
  "type": "play_note_block",
  "tooltip": '%{BKY_PLAY_NOTE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_PLAY_NOTE_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "SOUND",
      "options": [
        ['%{BKY_NOTE_A}', "5"],
        ['%{BKY_NOTE_B}', "6"],
        ['%{BKY_NOTE_C}', "0"],
        ['%{BKY_NOTE_D}', "1"],
        ['%{BKY_NOTE_E}', "2"],
        ['%{BKY_NOTE_F}', "3"],
        ['%{BKY_NOTE_G}', "4"]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "octave",
      "options": [
        ['%{BKY_OCTAVE_LOW}', "3"],
        ['%{BKY_OCTAVE_HIGH}', "4"]
      ]
    },
    {
      "type": "field_number",
      "name": "Duration",
      "value": 500,
      "min": 0,
      "max": 500
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210
},
{
  "type": "brain_left_button_pressed_block",
  "tooltip": '%{BKY_BRAIN_LEFT_BUTTON_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_BRAIN_LEFT_BUTTON_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "wait_until_block",
  "tooltip": '%{BKY_WAIT_UNTIL_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_WAIT_UNTIL_TITLE}',
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Boolean"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},
{
  "type": "wait_block",
  "tooltip": '%{BKY_WAIT_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_WAIT_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "TIME",
      "value": 1,
      "min": 0,
      "max": 1000
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
},                    
{
  "type": "stop_program_block",
  "tooltip": "",
  "helpUrl": "",
  "message0": '%{BKY_STOP_PROGRAM_BLOCK_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "colour": 120
},
{
  "type": "get_battery_capacity_block",
  "tooltip": '%{BKY_GET_BATTERY_CAPACITY_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_GET_BATTERY_CAPACITY_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "brain_right_button_pressed_block",
  "tooltip": '%{BKY_BRAIN_RIGHT_BUTTON_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_BRAIN_RIGHT_BUTTON_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "brain_check_button_pressed_block",
  "tooltip": '%{BKY_BRAIN_CHECK_BUTTON_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_BRAIN_CHECK_BUTTON_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "calibrate_gyro_block",
  "tooltip": '%{BKY_CALIBRATE_GYRO_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_CALIBRATE_GYRO_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "set_gyro_heading_block",
  "tooltip": '%{BKY_SET_GYRO_HEADING_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_SET_GYRO_HEADING_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 180,
      "min": -360,
      "max": 360
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "set_gyro_rotation_block",
  "tooltip": '%{BKY_SET_GYRO_ROTATION_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_SET_GYRO_ROTATION_TITLE}',
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 180
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "get_gyro_heading_block",
  "tooltip": '%{BKY_GET_GYRO_HEADING_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_GET_GYRO_HEADING_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "get_gyro_rotation_block",
  "tooltip": '%{BKY_GET_GYRO_ROTATION_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_GET_GYRO_ROTATION_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "get_gyro_rate_block",
  "tooltip": '%{BKY_GET_GYRO_RATE_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_GET_GYRO_RATE_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "is_gyro_calibrating_block",
  "tooltip": '%{BKY_IS_GYRO_CALIBRATING_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_IS_GYRO_CALIBRATING_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 60
},
{
  "type": "get_brain_timer_block",
  "tooltip": '%{BKY_GET_BRAIN_TIMER_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_GET_BRAIN_TIMER_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 180
},
{
  "type": "reset_brain_timer_block",
  "tooltip": '%{BKY_RESET_BRAIN_TIMER_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_RESET_BRAIN_TIMER_TITLE}',
  "args0": [
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},
{
  type: 'drive_block',
  tooltip: '%{BKY_DRIVE_BLOCK_TOOLTIP}',
  helpUrl: '',
  message0: '%{BKY_DRIVE_BLOCK_TITLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DIRECTION',
      options: [
        ['%{BKY_FORWARD}', 'FORWARD'],
        ['%{BKY_REVERSE}', 'REVERSE']
      ]
    },
    {
      type: 'input_value',
      name: 'DRIVETRAIN',
      check: ["Drivetrain", "SmartDrive"]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  inputsInline: true
},
{
  type: 'drive_for_block',
  tooltip: '%{BKY_DRIVE_FOR_BLOCK_TOOLTIP}',
  helpUrl: '',
  message0: '%{BKY_DRIVE_FOR_BLOCK_TITLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DIRECTION',
      options: [
        ['%{BKY_FORWARD}', 'FORWARD'],
        ['%{BKY_REVERSE}', 'REVERSE']
      ]
    },
    {
      type: 'field_number',
      name: 'DISTANCE',
      value: 100,
      min: 0
    },
    {
      type: 'field_dropdown',
      name: 'UNIT',
      options: [
        ['%{BKY_UNIT_MM}', 'MM'],
        ['%{BKY_UNIT_INCH}', 'INCHES'],
        ['%{BKY_UNIT_DEG}', 'DEGREES']
      ]
    },
    {
      type: 'input_value',
      name: 'DRIVETRAIN',
      check: ["Drivetrain", "SmartDrive"]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  inputsInline: true
},
{
  type: 'turn_block',
  tooltip: '%{BKY_TURN_BLOCK_TOOLTIP}',
  helpUrl: '',
  message0: '%{BKY_TURN_BLOCK_TITLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DIRECTION',
      options: [
        ['%{BKY_TURN_RIGHT}', 'RIGHT'],
        ['%{BKY_TURN_LEFT}', 'LEFT']
      ]
    },
    {
      type: 'input_value',
      name: 'DRIVETRAIN',
      check: ["Drivetrain", "SmartDrive"]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  inputsInline: true
},
{
  type: 'turn_for_block',
  tooltip: '%{BKY_TURN_FOR_BLOCK_TOOLTIP}',
  helpUrl: '',
  message0: '%{BKY_TURN_FOR_BLOCK_TITLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'DIRECTION',
      options: [
        ['%{BKY_TURN_RIGHT}', 'RIGHT'],
        ['%{BKY_TURN_LEFT}', 'LEFT']
      ]
    },
    {
      type: 'field_number',
      name: 'ANGLE',
      value: 90,
      min: 0,
      max: 360
    },
    {
      type: 'input_value',
      name: 'DRIVETRAIN',
      check: ["Drivetrain", "SmartDrive"]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  inputsInline: true
},
{
  type: 'create_motor_block',
  message0: '%{BKY_CREATE_MOTOR_BLOCK_TITLE}',
  args0: [
    {
      type: 'field_dropdown',
      name: 'PORT',
      options: [
        ['%{BKY_PORT1}', 'Ports.PORT1'],
        ['%{BKY_PORT2}', 'Ports.PORT2'],
        ['%{BKY_PORT3}', 'Ports.PORT3'],
        ['%{BKY_PORT4}', 'Ports.PORT4'],
        ['%{BKY_PORT5}', 'Ports.PORT5'],
        ['%{BKY_PORT6}', 'Ports.PORT6'],
        ['%{BKY_PORT7}', 'Ports.PORT7'],
        ['%{BKY_PORT8}', 'Ports.PORT8'],
        ['%{BKY_PORT9}', 'Ports.PORT9'],
        ['%{BKY_PORT10}', 'Ports.PORT10'],
        ['%{BKY_PORT11}', 'Ports.PORT11'],
        ['%{BKY_PORT12}', 'Ports.PORT12']
      ]
    },
    {
      type: 'field_checkbox',
      name: 'REVERSE',
      checked: false
    }
  ],
  output: null,
  colour: 230,
  tooltip: '%{BKY_CREATE_MOTOR_BLOCK_TOOLTIP}'
},
{
  type: 'create_motor_group_from_list',
  message0: '%{BKY_CREATE_MOTOR_GROUP_FROM_LIST_TITLE}',
  args0: [
    {
      type: 'input_value',
      name: 'MOTOR_LIST',
      check: 'Array'
    }
  ],
  output: 'MotorGroup',
  colour: 230,
  tooltip: '%{BKY_CREATE_MOTOR_GROUP_FROM_LIST_TOOLTIP}'
},
{
  "type": "spin_block",
  "message0": '%{BKY_SPIN_BLOCK_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DIRECTION",
      "options": [
        ['%{BKY_FORWARD}', "FORWARD"],
        ['%{BKY_REVERSE}', "REVERSE"]
      ]
    },
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "field_number",
      "name": "VELOCITY",
      "value": 50,
      "min": 0,
      "max": 100
    },
    {
      "type": "field_dropdown",
      "name": "UNIT",
      "options": [
        ['%{BKY_UNIT_PERCENT}', "PERCENT"],
        ['%{BKY_UNIT_RPM}', "RPM"],
        ['%{BKY_UNIT_DPS}', "DPS"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200,
  "inputsInline": true,
  "tooltip": "%{BKY_SPIN_BLOCK_TOOLTIP}"
},
{
  "type": "spin_for_block",
  "message0": '%{BKY_SPIN_FOR_BLOCK_TITLE}',
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DIRECTION",
      "options": [
        ['%{BKY_FORWARD}', "FORWARD"],
        ['%{BKY_REVERSE}', "REVERSE"]
      ]
    },
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "field_number",
      "name": "DISTANCE",
      "value": 90,
      "min": 0
    },
    {
      "type": "field_dropdown",
      "name": "DIST_UNIT",
      "options": [
        ['%{BKY_UNIT_DEGREES}', "DEGREES"],
        ['%{BKY_UNIT_TURNS}', "TURNS"]
      ]
    },
    {
      "type": "field_number",
      "name": "VELOCITY",
      "value": 50,
      "min": 0,
      "max": 100
    },
    {
      "type": "field_dropdown",
      "name": "VEL_UNIT",
      "options": [
        ['%{BKY_UNIT_PERCENT}', "PERCENT"],
        ['%{BKY_UNIT_RPM}', "RPM"],
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200,
  "inputsInline": true,
  "tooltip": "%{BKY_SPIN_FOR_BLOCK_TOOLTIP}"
},
{
  "type": "stop_motor_block",
  "message0": '%{BKY_STOP_MOTOR_BLOCK_TITLE}',
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": ["Motor", "MotorGroup"]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200,
  "inputsInline": true,
  "tooltip": "%{BKY_STOP_MOTOR_BLOCK_TOOLTIP}"
},
{
  "type": "spin_to_position_block",
  "message0": "%{BKY_SPIN_TO_POSITION_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "MOTOR",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "field_number",
      "name": "POSITION",
      "value": 360,
      "min": -9999,
      "max": 9999
    },
    {
      "type": "field_dropdown",
      "name": "UNIT",
      "options": [
        ['%{BKY_UNIT_DEGREES}', "DEGREES"],
        ['%{BKY_UNIT_TURNS}', "TURNS"]
      ]
    },
    {
      "type": "field_number",
      "name": "VELOCITY",
      "value": 50,
      "min": 0,
      "max": 100
    },
    {
      "type": "field_dropdown",
      "name": "VEL_UNIT",
      "options": [
        ['%{BKY_UNIT_PERCENT}', "PERCENT"],
        ['%{BKY_UNIT_RPM}', "RPM"],
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200,
  "inputsInline": true,
  "tooltip": "%{BKY_SPIN_TO_POSITION_BLOCK_TOOLTIP}"
},

{
  "type": "create_drivetrain_block",
  "message0": "%{BKY_CREATE_DRIVETRAIN_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "LEFT",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "input_value",
      "name": "RIGHT",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "field_number",
      "name": "WHEEL_TRAVEL",
      "value": 300,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_number",
      "name": "TRACK_WIDTH",
      "value": 320,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_number",
      "name": "WHEEL_BASE",
      "value": 320,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_dropdown",
      "name": "UNITS",
      "options": [
        ['%{BKY_UNIT_MM}', "MM"],
        ['%{BKY_UNIT_CM}', "DistanceUnits.CM"],
        ['%{BKY_UNIT_INCH}', "INCHES"]
      ]
    },
    {
      "type": "field_number",
      "name": "GEAR_RATIO",
      "value": 1,
      "min": 0.1,
      "max": 10,
      "precision": 0.1
    }
  ],
  "output": "Drivetrain",
  "colour": 230,
  "inputsInline": false,
  "tooltip": "%{BKY_CREATE_DRIVETRAIN_BLOCK_TOOLTIP}"
},
{
  "type": "create_smart_drive_block",
  "message0": "%{BKY_CREATE_SMART_DRIVE_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "LEFT",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "input_value",
      "name": "RIGHT",
      "check": ["Motor", "MotorGroup"]
    },
    {
      "type": "field_number",
      "name": "WHEEL_TRAVEL",
      "value": 300,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_number",
      "name": "TRACK_WIDTH",
      "value": 320,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_number",
      "name": "WHEEL_BASE",
      "value": 320,
      "min": 1,
      "max": 1000
    },
    {
      "type": "field_dropdown",
      "name": "UNITS",
      "options": [
        ['%{BKY_UNIT_MM}', "MM"],
        ['%{BKY_UNIT_CM}', "DistanceUnits.CM"],
        ['%{BKY_UNIT_INCH}', "INCHES"]
      ]
    },
    {
      "type": "field_number",
      "name": "GEAR_RATIO",
      "value": 1,
      "min": 0.1,
      "max": 10,
      "precision": 0.1
    }
  ],
  "output": "SmartDrive",
  "colour": 230,
  "inputsInline": false,
  "tooltip": "%{BKY_CREATE_SMART_DRIVE_BLOCK_TOOLTIP}"
},
{
  "type": "stop_drivetrain_block",
  "message0": '%{BKY_STOP_DRIVETRAIN_BLOCK_TITLE}',
  "args0": [
    {
      "type": "input_value",
      "name": "DRIVETRAIN",
      "check": ["Drivetrain", "SmartDrive"]
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        ["%{BKY_STOP_MODE_COAST}", "COAST"],
        ["%{BKY_STOP_MODE_BRAKE}", "BRAKE"],
        ["%{BKY_STOP_MODE_HOLD}", "HOLD"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "inputsInline": true,
  "tooltip": '%{BKY_STOP_DRIVETRAIN_BLOCK_TOOLTIP}'
},
{
  "type": "create_pneumatic_block",
  "message0": "%{BKY_CREATE_PNEUMATIC_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "Pneumatic",
  "colour": 300,
  "tooltip": "%{BKY_CREATE_PNEUMATIC_BLOCK_TOOLTIP}"
},
{
  "type": "pneumatic_pump_on_block",
  "message0": "%{BKY_PNEUMATIC_PUMP_ON_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PNEUMATIC",
      "check": "Pneumatic"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "inputsInline": true,
  "tooltip": "%{BKY_PNEUMATIC_PUMP_ON_BLOCK_TOOLTIP}"
},
{
  "type": "pneumatic_pump_off_block",
  "message0": "%{BKY_PNEUMATIC_PUMP_OFF_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PNEUMATIC",
      "check": "Pneumatic"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "inputsInline": true,
  "tooltip": "%{BKY_PNEUMATIC_PUMP_OFF_BLOCK_TOOLTIP}"
},
{
  "type": "pneumatic_extend_block",
  "message0": "%{BKY_PNEUMATIC_EXTEND_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PNEUMATIC",
      "check": "Pneumatic"
    },
    {
      "type": "field_dropdown",
      "name": "CYLINDER",
      "options": [
        ["%{BKY_CYLINDER1}", "CYLINDER1"],
        ["%{BKY_CYLINDER2}", "CYLINDER2"],
        ["%{BKY_CYLINDERALL}", "CYLINDERALL"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "inputsInline": true,
  "tooltip": "%{BKY_PNEUMATIC_EXTEND_BLOCK_TOOLTIP}"
},
{
  "type": "pneumatic_retract_block",
  "message0": "%{BKY_PNEUMATIC_RETRACT_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PNEUMATIC",
      "check": "Pneumatic"
    },
    {
      "type": "field_dropdown",
      "name": "CYLINDER",
      "options": [
        ["%{BKY_CYLINDER1}", "CYLINDER1"],
        ["%{BKY_CYLINDER2}", "CYLINDER2"],
        ["%{BKY_CYLINDERALL}", "CYLINDERALL"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "inputsInline": true,
  "tooltip": "%{BKY_PNEUMATIC_RETRACT_BLOCK_TOOLTIP}"
},
{
  "type": "pneumatic_installed_block",
  "message0": "%{BKY_PNEUMATIC_INSTALLED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "PNEUMATIC",
      "check": "Pneumatic"
    }
  ],
  "output": "Boolean",
  "colour": 300,
  "inputsInline": true,
  "tooltip": "%{BKY_PNEUMATIC_INSTALLED_BLOCK_TOOLTIP}"
},
{
  "type": "create_bumper_block",
  "message0": "%{BKY_CREATE_BUMPER_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "Bumper",
  "colour": 150,
  "tooltip": "%{BKY_CREATE_BUMPER_BLOCK_TOOLTIP}"
},
{
  "type": "bumper_pressed_block",
  "message0": "%{BKY_BUMPER_PRESSED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "BUMPER",
      "check": "Bumper"
    }
  ],
  "output": "Boolean",
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_BUMPER_PRESSED_BLOCK_TOOLTIP}"
},
{
  "type": "bumper_pressed_handler",
  "message0": "%{BKY_BUMPER_PRESSED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "BUMPER",
      "check": "Bumper"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_BUMPER_PRESSED_HANDLER_TOOLTIP}"
},
{
  "type": "bumper_released_handler",
  "message0": "%{BKY_BUMPER_RELEASED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "BUMPER",
      "check": "Bumper"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_BUMPER_RELEASED_HANDLER_TOOLTIP}"
},
{
  "type": "create_touch_led_block",
  "message0": "%{BKY_CREATE_TOUCH_LED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "TouchLED",
  "colour": 60,
  "tooltip": "%{BKY_CREATE_TOUCH_LED_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_pressed_block",
  "message0": "%{BKY_TOUCH_LED_PRESSED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    }
  ],
  "output": "Boolean",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_PRESSED_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_set_color_block",
  "message0": "%{BKY_TOUCH_LED_SET_COLOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "field_dropdown",
      "name": "COLOR",
      "options": [
        ['%{BKY_RED}', "RED"],
        ['%{BKY_GREEN}', "GREEN"],
        ['%{BKY_BLUE}', "BLUE"],
        ['%{BKY_WHITE}', "WHITE"],
        ['%{BKY_BLACK}', "BLACK"],
        ['%{BKY_GRAY}', "GRAY"],
        ['%{BKY_YELLOW}', "YELLOW"],
        ['%{BKY_ORANGE}', "ORANGE"],
        ['%{BKY_PURPLE}', "PURPLE"],
        ['%{BKY_REDVIOLET}', "RED_VIOLET"],
        ['%{BKY_VIOLET}', "VIOLET"],
        ['%{BKY_BLUEVIOLET}', "BLUE_VIOLET"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_SET_COLOR_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_set_brightness_block",
  "message0": "%{BKY_TOUCH_LED_SET_BRIGHTNESS_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "field_number",
      "name": "BRIGHTNESS",
      "value": 50,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_SET_BRIGHTNESS_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_pressed_handler",
  "message0": "%{BKY_TOUCH_LED_PRESSED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_PRESSED_HANDLER_TOOLTIP}"
},
{
  "type": "touch_led_released_handler",
  "message0": "%{BKY_TOUCH_LED_RELEASED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_RELEASED_HANDLER_TOOLTIP}"
},
{
  "type": "touch_led_set_fade_block",
  "message0": "%{BKY_TOUCH_LED_SET_FADE_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "field_dropdown",
      "name": "FADE_TYPE",
      "options": [
        ["%{BKY_FADE_FAST}", "FAST"],
        ["%{BKY_FADE_SLOW}", "SLOW"],
        ["%{BKY_FADE_OFF}", "OFF"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_SET_FADE_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_set_blink_block",
  "message0": "%{BKY_TOUCH_LED_SET_BLINK_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    },
    {
      "type": "field_dropdown",
      "name": "COLOR",
      "options": [
        ['%{BKY_RED}', "RED"],
        ['%{BKY_GREEN}', "GREEN"],
        ['%{BKY_BLUE}', "BLUE"],
        ['%{BKY_WHITE}', "WHITE"],
        ['%{BKY_BLACK}', "BLACK"],
        ['%{BKY_GRAY}', "GRAY"],
        ['%{BKY_YELLOW}', "YELLOW"],
        ['%{BKY_ORANGE}', "ORANGE"],
        ['%{BKY_PURPLE}', "PURPLE"],
        ['%{BKY_REDVIOLET}', "RED_VIOLET"],
        ['%{BKY_VIOLET}', "VIOLET"],
        ['%{BKY_BLUEVIOLET}', "BLUE_VIOLET"]
      ]
    },
    {
      "type": "field_number",
      "name": "ONTIME",
      "value": 0.25,
      "min": 0,
      "step": 0.05
    },
    {
      "type": "field_number",
      "name": "OFFTIME",
      "value": 0.25,
      "min": 0,
      "step": 0.05
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_SET_BLINK_BLOCK_TOOLTIP}"
},
{
  "type": "touch_led_stop_blink_block",
  "message0": "%{BKY_TOUCH_LED_STOP_BLINK_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "TOUCH_LED",
      "check": "TouchLED"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_TOUCH_LED_STOP_BLINK_BLOCK_TOOLTIP}"
},
{
  "type": "create_color_sensor_block",
  "message0": "%{BKY_CREATE_COLOR_SENSOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "ColorSensor",
  "colour": 0,
  "tooltip": "%{BKY_CREATE_COLOR_SENSOR_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_object_detected_handler",
  "message0": "%{BKY_COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TOOLTIP}"
},
{
  "type": "color_sensor_set_light_block",
  "message0": "%{BKY_COLOR_SENSOR_SET_LIGHT_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    },
    {
      "type": "field_dropdown",
      "name": "LIGHT_STATE",
      "options": [
        ["%{BKY_LIGHT_ON}", "ON"],
        ["%{BKY_LIGHT_OFF}", "OFF"],
        ["%{BKY_LIGHT_BRIGHTNESS}", "BRIGHTNESS"]
      ]
    },
    {
      "type": "field_number",
      "name": "BRIGHTNESS",
      "value": 50,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_SET_LIGHT_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_set_light_power_block",
  "message0": "%{BKY_COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    },
    {
      "type": "field_number",
      "name": "POWER",
      "value": 50,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_is_near_object_block",
  "message0": "%{BKY_COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_color_block",
  "message0": "%{BKY_COLOR_SENSOR_COLOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    }
  ],
  "output": "String",
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_COLOR_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_brightness_block",
  "message0": "%{BKY_COLOR_SENSOR_BRIGHTNESS_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    }
  ],
  "output": "Number",
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_BRIGHTNESS_BLOCK_TOOLTIP}"
},
{
  "type": "color_sensor_hue_block",
  "message0": "%{BKY_COLOR_SENSOR_HUE_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "COLOR_SENSOR",
      "check": "ColorSensor"
    }
  ],
  "output": "Number",
  "colour": 0,
  "inputsInline": true,
  "tooltip": "%{BKY_COLOR_SENSOR_HUE_BLOCK_TOOLTIP}"
},
{
  "type": "create_distance_sensor_block",
  "message0": "%{BKY_CREATE_DISTANCE_SENSOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "DistanceSensor",
  "colour": 150,
  "tooltip": "%{BKY_CREATE_DISTANCE_SENSOR_BLOCK_TOOLTIP}"
},
{
  "type": "distance_is_object_detected_block",
  "message0": "%{BKY_DISTANCE_IS_OBJECT_DETECTED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "DISTANCE_SENSOR",
      "check": "DistanceSensor"
    }
  ],
  "output": "Boolean",
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_DISTANCE_IS_OBJECT_DETECTED_BLOCK_TOOLTIP}"
},
{
  "type": "distance_object_distance_block",
  "message0": "%{BKY_DISTANCE_OBJECT_DISTANCE_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "DISTANCE_SENSOR",
      "check": "DistanceSensor"
    },
    {
      "type": "field_dropdown",
      "name": "UNIT",
      "options": [
        ["%{BKY_UNIT_MM}", "MM"],
        ["%{BKY_UNIT_INCH}", "INCHES"],
        ["%{BKY_UNIT_CM}", "DistanceUnits.CM"]
      ]
    }
  ],
  "output": "Number",
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_DISTANCE_OBJECT_DISTANCE_BLOCK_TOOLTIP}"
},
{
  "type": "distance_object_velocity_block",
  "message0": "%{BKY_DISTANCE_OBJECT_VELOCITY_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "DISTANCE_SENSOR",
      "check": "DistanceSensor"
    }
  ],
  "output": "Number",
  "colour": 150,
  "inputsInline": true,
  "tooltip": "%{BKY_DISTANCE_OBJECT_VELOCITY_BLOCK_TOOLTIP}"
},
{
  "type": "create_optical_sensor_block",
  "message0": "%{BKY_CREATE_OPTICAL_SENSOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        ["%{BKY_PORT1}", "PORT1"],
        ["%{BKY_PORT2}", "PORT2"],
        ["%{BKY_PORT3}", "PORT3"],
        ["%{BKY_PORT4}", "PORT4"],
        ["%{BKY_PORT5}", "PORT5"],
        ["%{BKY_PORT6}", "PORT6"],
        ["%{BKY_PORT7}", "PORT7"],
        ["%{BKY_PORT8}", "PORT8"],
        ["%{BKY_PORT9}", "PORT9"],
        ["%{BKY_PORT10}", "PORT10"],
        ["%{BKY_PORT11}", "PORT11"],
        ["%{BKY_PORT12}", "PORT12"]
      ]
    }
  ],
  "output": "OpticalSensor",
  "colour": 60,
  "tooltip": "%{BKY_CREATE_OPTICAL_SENSOR_BLOCK_TOOLTIP}"
},
{
  "type": "optical_set_light_block",
  "message0": "%{BKY_OPTICAL_SET_LIGHT_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    },
    {
      "type": "field_dropdown",
      "name": "LIGHT_STATE",
      "options": [
        ["%{BKY_LIGHT_ON}", "ON"],
        ["%{BKY_LIGHT_OFF}", "OFF"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_SET_LIGHT_BLOCK_TOOLTIP}"
},
{
  "type": "optical_set_light_power_block",
  "message0": "%{BKY_OPTICAL_SET_LIGHT_POWER_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    },
    {
      "type": "field_number",
      "name": "POWER",
      "value": 50,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_SET_LIGHT_POWER_BLOCK_TOOLTIP}"
},
{
  "type": "optical_object_detect_threshold_block",
  "message0": "%{BKY_OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    },
    {
      "type": "field_number",
      "name": "THRESHOLD",
      "value": 128,
      "min": 0,
      "max": 255
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TOOLTIP}"
},
{
  "type": "optical_is_near_object_block",
  "message0": "%{BKY_OPTICAL_IS_NEAR_OBJECT_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    }
  ],
  "output": "Boolean",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_IS_NEAR_OBJECT_BLOCK_TOOLTIP}"
},
{
  "type": "optical_color_block",
  "message0": "%{BKY_OPTICAL_COLOR_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    }
  ],
  "output": "Color",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_COLOR_BLOCK_TOOLTIP}"
},
{
  "type": "optical_brightness_block",
  "message0": "%{BKY_OPTICAL_BRIGHTNESS_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    }
  ],
  "output": "Number",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_BRIGHTNESS_BLOCK_TOOLTIP}"
},
{
  "type": "optical_hue_block",
  "message0": "%{BKY_OPTICAL_HUE_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    }
  ],
  "output": "Number",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_HUE_BLOCK_TOOLTIP}"
},
{
  "type": "optical_rgb_block",
  "message0": "%{BKY_OPTICAL_RGB_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    }
  ],
  "output": "Tuple",
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_RGB_BLOCK_TOOLTIP}"
},
{
  "type": "optical_object_detected_handler",
  "message0": "%{BKY_OPTICAL_OBJECT_DETECTED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_OBJECT_DETECTED_HANDLER_TOOLTIP}"
},
{
  "type": "optical_object_lost_handler",
  "message0": "%{BKY_OPTICAL_OBJECT_LOST_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "OPTICAL_SENSOR",
      "check": "OpticalSensor"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true,
  "tooltip": "%{BKY_OPTICAL_OBJECT_LOST_HANDLER_TOOLTIP}"
},
{
  "type": "create_controller_block",
  "message0": "%{BKY_CREATE_CONTROLLER_BLOCK_TITLE}",
  "args0": [],
  "output": "Controller",
  "colour": 210,
  "tooltip": "%{BKY_CREATE_CONTROLLER_BLOCK_TOOLTIP}"
},
{
  "type": "controller_remote_enabled_block",
  "message0": "%{BKY_CONTROLLER_REMOTE_ENABLED_BLOCK_TITLE}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ENABLED",
      "options": [
        ["%{BKY_ENABLE}", "True"],
        ["%{BKY_DISABLE}", "False"]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_REMOTE_ENABLED_BLOCK_TOOLTIP}"
},
{
  "type": "controller_button_pressing_block",
  "message0": "%{BKY_CONTROLLER_BUTTON_PRESSING_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CONTROLLER",
      "check": "Controller"
    },
    {
      "type": "field_dropdown",
      "name": "BUTTON",
      "options": [
        ["%{BKY_BUTTON_EUP}", "buttonEUp"],
        ["%{BKY_BUTTON_EDOWN}", "buttonEDown"],
        ["%{BKY_BUTTON_FUP}", "buttonFUp"],
        ["%{BKY_BUTTON_FDOWN}", "buttonFDown"],
        ["%{BKY_BUTTON_LUP}", "buttonLUp"],
        ["%{BKY_BUTTON_LDOWN}", "buttonLDown"],
        ["%{BKY_BUTTON_RUP}", "buttonRUp"],
        ["%{BKY_BUTTON_RDOWN}", "buttonRDown"],
        ["%{BKY_BUTTON_L3}", "buttonL3"],
        ["%{BKY_BUTTON_R3}", "buttonR3"]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_BUTTON_PRESSING_BLOCK_TOOLTIP}"
},
{
  "type": "controller_axis_position_block",
  "message0": "%{BKY_CONTROLLER_AXIS_POSITION_BLOCK_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CONTROLLER",
      "check": "Controller"
    },
    {
      "type": "field_dropdown",
      "name": "AXIS",
      "options": [
        ["%{BKY_AXIS_A}", "axisA"],
        ["%{BKY_AXIS_B}", "axisB"],
        ["%{BKY_AXIS_C}", "axisC"],
        ["%{BKY_AXIS_D}", "axisD"]
      ]
    }
  ],
  "output": "Number",
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_AXIS_POSITION_BLOCK_TOOLTIP}"
},
{
  "type": "controller_button_pressed_handler",
  "message0": "%{BKY_CONTROLLER_BUTTON_PRESSED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CONTROLLER",
      "check": "Controller"
    },
    {
      "type": "field_dropdown",
      "name": "BUTTON",
      "options": [
        ["%{BKY_BUTTON_EUP}", "buttonEUp"],
        ["%{BKY_BUTTON_EDOWN}", "buttonEDown"],
        ["%{BKY_BUTTON_FUP}", "buttonFUp"],
        ["%{BKY_BUTTON_FDOWN}", "buttonFDown"],
        ["%{BKY_BUTTON_LUP}", "buttonLUp"],
        ["%{BKY_BUTTON_LDOWN}", "buttonLDown"],
        ["%{BKY_BUTTON_RUP}", "buttonRUp"],
        ["%{BKY_BUTTON_RDOWN}", "buttonRDown"],
        ["%{BKY_BUTTON_L3}", "buttonL3"],
        ["%{BKY_BUTTON_R3}", "buttonR3"]
      ]
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_BUTTON_PRESSED_HANDLER_TOOLTIP}"
},
{
  "type": "controller_button_released_handler",
  "message0": "%{BKY_CONTROLLER_BUTTON_RELEASED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CONTROLLER",
      "check": "Controller"
    },
    {
      "type": "field_dropdown",
      "name": "BUTTON",
      "options": [
        ["%{BKY_BUTTON_EUP}", "buttonEUp"],
        ["%{BKY_BUTTON_EDOWN}", "buttonEDown"],
        ["%{BKY_BUTTON_FUP}", "buttonFUp"],
        ["%{BKY_BUTTON_FDOWN}", "buttonFDown"],
        ["%{BKY_BUTTON_LUP}", "buttonLUp"],
        ["%{BKY_BUTTON_LDOWN}", "buttonLDown"],
        ["%{BKY_BUTTON_RUP}", "buttonRUp"],
        ["%{BKY_BUTTON_RDOWN}", "buttonRDown"],
        ["%{BKY_BUTTON_L3}", "buttonL3"],
        ["%{BKY_BUTTON_R3}", "buttonR3"]
      ]
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_BUTTON_RELEASED_HANDLER_TOOLTIP}"
},
{
  "type": "controller_axis_changed_handler",
  "message0": "%{BKY_CONTROLLER_AXIS_CHANGED_HANDLER_TITLE}",
  "args0": [
    {
      "type": "input_value",
      "name": "CONTROLLER",
      "check": "Controller"
    },
    {
      "type": "field_dropdown",
      "name": "AXIS",
      "options": [
        ["%{BKY_AXIS_A}", "axisA"],
        ["%{BKY_AXIS_B}", "axisB"],
        ["%{BKY_AXIS_C}", "axisC"],
        ["%{BKY_AXIS_D}", "axisD"]
      ]
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "inputsInline": true,
  "tooltip": "%{BKY_CONTROLLER_AXIS_CHANGED_HANDLER_TOOLTIP}"
},

]);

