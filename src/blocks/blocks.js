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
  "type": "print_number_on_brain_screen_block",
  "tooltip": '%{BKY_PRINT_NUMBER_ON_BRAIN_TOOLTIP}',
  "helpUrl": "",
  "message0": '%{BKY_PRINT_NUMBER_ON_BRAIN_TITLE}',
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
}                                        
]);

