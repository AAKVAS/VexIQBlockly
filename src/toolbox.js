import * as Blockly from 'blockly';
import { colour } from 'blockly/blocks';

export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: "category",
      name: '%{BKY_CATEGORY_DISPLAY}',  
      colour: '240',
      contents: [
        {
          kind: 'block',
          type: 'display_print_block',
        },
        {
          kind: 'block',
          type: 'print_value_on_brain_screen_block',
        },
        {
          kind: 'block',
          type: 'display_newline_block',
        },
        {
          kind: 'block',
          type: 'clear_display_block',
        },
      {
          kind: 'block',
          type: 'display_font_color_block',
        },
        {
          kind: 'block',
          type: 'display_font_style_block',
        },
        {
          kind: 'block',
          type: 'display_background_color_block',
        },
        {
          kind: 'block',
          type: 'draw_pixel_block',
        },
        {
          kind: 'block',
          type: 'draw_line_block',
        },
        {
          kind: 'block',
          type: 'draw_rectangle_block',
        },
        {
          kind: 'block',
          type: 'draw_circle_block',
        },
        {
          kind: 'block',
          type: 'set_pen_width_block',
        },
        {
          kind: 'block',
          type: 'display_fill_color_block',
        },
      ]
    },
    {
      kind: "category",
      name: '%{BKY_CATEGORY_SOUND}',  
      colour: '210',
      contents: [
        {
          kind: 'block',
          type: 'play_sound_block',
        },
        {
          kind: 'block',
          type: 'play_note_block',
        },
      ]
    },
    {
      kind: "category",
      name: '%{BKY_CATEGORY_BRAIN_SENSING}',
      colour: '60',
      contents: [
        {
          kind: 'block',
          type: 'brain_left_button_pressed_block',
        },
        {
          kind: 'block',
          type: 'brain_right_button_pressed_block',
        },
        {
          kind: 'block',
          type: 'brain_check_button_pressed_block',
        },
        {
          kind: 'block',
          type: 'get_battery_capacity_block',
        },
        {
          kind: 'block',
          type: 'calibrate_gyro_block',
        },
        {
          kind: 'block',
          type: 'set_gyro_heading_block',
        },
        {
          kind: 'block',
          type: 'set_gyro_rotation_block',
        },
        {
          kind: 'block',
          type: 'get_gyro_heading_block',
        },
        {
          kind: 'block',
          type: 'get_gyro_rotation_block',
        },
        {
          kind: 'block',
          type: 'get_gyro_rate_block',
        },
        {
          kind: 'block',
          type: 'is_gyro_calibrating_block',
        },
      ]
    },
    {
      "kind": "category",
      "name": '%{BKY_CATEGORY_CONTROLLER}',
      "colour": 210,
      "contents": [
        { "kind": "block", "type": "create_controller_block" },
        { "kind": "block", "type": "controller_remote_enabled_block" },
        { "kind": "block", "type": "controller_button_pressing_block" },
        { "kind": "block", "type": "controller_axis_position_block" },
        { "kind": "block", "type": "controller_button_pressed_handler" },
        { "kind": "block", "type": "controller_button_released_handler" },
        { "kind": "block", "type": "controller_axis_changed_handler" }
      ]
    },
    {
      kind: "category",
      name: '%{BKY_CATEGORY_TOUCH_SENSING}',
      colour: '150',
      contents: [
        {
          kind: 'block',
          type: 'create_bumper_block'
        },
        {
          kind: 'block',
          type: 'bumper_pressed_block'
        },
        {
          kind: 'block',
          type: 'bumper_pressed_handler'
        },
        {
          kind: 'block',
          type: 'bumper_released_handler'
        },
        {
          kind: 'block',
          type: 'create_touch_led_block'
        },
        {
          kind: 'block',
          type: 'touch_led_pressed_block'
        },
        {
          kind: 'block',
          type: 'touch_led_set_color_block'
        },
        {
          kind: 'block',
          type: 'touch_led_set_brightness_block'
        },
        {
          kind: 'block',
          type: 'touch_led_pressed_handler'
        },
        {
          kind: 'block',
          type: 'touch_led_released_handler'
        },
        {
          kind: 'block',
          type: 'touch_led_set_blink_block'
        },
        {
          kind: 'block',
          type: 'touch_led_stop_blink_block'
        },
      ]
    },
    {
      kind: "category",
      name: '%{BKY_CATEGORY_OPTICAL_SENSING}',
      colour: '0',
      contents: [        
        {
          kind: 'block',
          type: 'create_color_sensor_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_object_detected_handler'
        },
        {
          kind: 'block',
          type: 'color_sensor_set_light_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_set_light_power_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_is_near_object_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_color_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_brightness_block'
        },
        {
          kind: 'block',
          type: 'color_sensor_hue_block'
        },
        {
          kind: 'block',
          type: 'create_distance_sensor_block'
        },
        {
          kind: 'block',
          type: 'distance_is_object_detected_block'
        },
        {
          kind: 'block',
          type: 'distance_object_distance_block'
        },
        {
          kind: 'block',
          type: 'distance_object_velocity_block'
        }, 
        {
          kind: 'block',
          type: 'create_optical_sensor_block'
        },
        {
          kind: 'block',
          type: 'optical_set_light_block'
        },
        {
          kind: 'block',
          type: 'optical_set_light_power_block'
        },
        {
          kind: 'block',
          type: 'optical_object_detect_threshold_block'
        },
        {
          kind: 'block',
          type: 'optical_is_near_object_block'
        },
        {
          kind: 'block',
          type: 'optical_color_block'
        },
        {
          kind: 'block',
          type: 'optical_brightness_block'
        },  
        {
          kind: 'block',
          type: 'optical_hue_block'
        },
        {
          kind: 'block',
          type: 'optical_rgb_block'
        },
        {
          kind: 'block',
          type: 'optical_object_detected_handler'
        },  
        {
          kind: 'block',
          type: 'optical_object_lost_handler'
        },        
             
      ]
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_MOVEMENT}',
      colour: '240',
      contents: [
        {
          kind: 'block',
          type: 'create_motor_block',
        },
        {
          kind: 'block',
          type: 'create_motor_group_from_list',
        },
        {
          kind: 'block',
          type: 'spin_block',
        },
        {
          kind: 'block',
          type: 'spin_for_block',
        },
        {
          kind: 'block',
          type: 'spin_to_position_block',
        },
        {
          kind: 'block',
          type: 'stop_motor_block',
        },
        {
          kind: 'block',
          type: 'create_drivetrain_block',
        },
        {
          kind: 'block',
          type: 'create_smart_drive_block',
        },
        {
          kind: 'block',
          type: 'drive_block',
        },
        {
          kind: 'block',
          type: 'drive_for_block',
        },
        {
          kind: 'block',
          type: 'turn_block',
        },
        {
          kind: 'block',
          type: 'turn_for_block',
        },
        {
          kind: 'block',
          type: 'stop_drivetrain_block',
        },
      ]
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_PNEUMATIC}',
      colour: '300',
      contents: [
        {
          kind: 'block',
          type: 'create_pneumatic_block',
        },
        {
          kind: 'block',
          type: 'pneumatic_pump_on_block',
        },
        {
          kind: 'block',
          type: 'pneumatic_pump_off_block',
        },
        {
          kind: 'block',
          type: 'pneumatic_extend_block',
        },
        {
          kind: 'block',
          type: 'pneumatic_retract_block',
        },
      ]
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_LOGIC}',
      categorystyle: 'logic_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'controls_ifelse',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_negate',
        },
      ],
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_LOOPS}',
      categorystyle: 'loop_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'wait_until_block',
        },
        {
          kind: 'block',
          type: 'wait_block',
        },
        {
          kind: 'block',
          type: 'stop_program_block',
        },
        {
          kind: 'block',
          type: 'get_brain_timer_block',
        },
        {
          kind: 'block',
          type: 'reset_brain_timer_block',
        }, 
        {
          kind: 'block',
          type: 'controls_forEach',
        },
        {
          kind: 'block',
          type: 'controls_flow_statements',
        },
      ],
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_MATH}',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'math_number',
          fields: {
            NUM: 123,
          },
        },
        {
          kind: 'block',
          type: 'math_arithmetic',
          inputs: {
            A: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_single',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_trig',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_constant',
        },
        {
          kind: 'block',
          type: 'math_number_property',
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_round',
          fields: {
            OP: 'ROUND',
          },
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_on_list',
          fields: {
            OP: 'SUM',
          },
        },
        {
          kind: 'block',
          type: 'math_modulo',
          inputs: {
            DIVIDEND: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_constrain',
          inputs: {
            VALUE: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_int',
          inputs: {
            FROM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_float',
        },
        {
          kind: 'block',
          type: 'math_atan2',
          inputs: {
            X: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_TEXT}',
      categorystyle: 'text_category',
      contents: [
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'text_join',
        },
        {
          kind: 'block',
          type: 'text_append',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_length',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_isEmpty',
          inputs: {
            VALUE: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: '',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_indexOf',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
            FIND: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_charAt',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_getSubstring',
          inputs: {
            STRING: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_changeCase',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_trim',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: 'abc',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_count',
          inputs: {
            SUB: {
              shadow: {
                type: 'text',
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_replace',
          inputs: {
            FROM: {
              shadow: {
                type: 'text',
              },
            },
            TO: {
              shadow: {
                type: 'text',
              },
            },
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'text_reverse',
          inputs: {
            TEXT: {
              shadow: {
                type: 'text',
              },
            },
          },
        },
      ],
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_LISTS}',
      categorystyle: 'list_category',
      contents: [
        {
          kind: 'block',
          type: 'lists_create_with',
        },
        {
          kind: 'block',
          type: 'lists_repeat',
          inputs: {
            NUM: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_length',
        },
        {
          kind: 'block',
          type: 'lists_isEmpty',
        },
        {
          kind: 'block',
          type: 'lists_indexOf',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_getIndex',
          inputs: {
            VALUE: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_setIndex',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_getSublist',
          inputs: {
            LIST: {
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_split',
          inputs: {
            DELIM: {
              shadow: {
                type: 'text',
                fields: {
                  TEXT: ',',
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_sort',
        },
        {
          kind: 'block',
          type: 'lists_reverse',
        },
      ],
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_VARIABLES}',
      categorystyle: 'variable_category',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: '%{BKY_CATEGORY_FUNCTIONS}',
      categorystyle: 'procedure_category',
      custom: 'PROCEDURE',
    },
  ],
};
