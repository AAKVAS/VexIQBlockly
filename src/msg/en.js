
export const enTable = {
  'CATEGORY_DISPLAY': 'Display',
  'CATEGORY_SOUND': "Sound",
  'CATEGORY_CONTROLLER': "Controller",
  'CATEGORY_BRAIN_SENSING': "Brain sensing",
  'CATEGORY_TOUCH_SENSING': "Touch sensors",
  'CATEGORY_OPTICAL_SENSING': "Optical sensing",
  'CATEGORY_LOGIC': 'Logic',
  'CATEGORY_MOVEMENT': 'Movement',
  'CATEGORY_PNEUMATIC': 'Pneumatic',
  'CATEGORY_LOOPS': 'Loops',
  'CATEGORY_MATH': 'Math',
  'CATEGORY_TEXT': 'Text',
  'CATEGORY_LISTS': 'Lists',
  'CATEGORY_VARIABLES': 'Variables',
  'CATEGORY_FUNCTIONS': 'Functions',

  'PRINT_ON_BRAIN_TITLE': 'Print text on screen %1 %2',
  'PRINT_ON_BRAIN_TOOLTIP': 'Displays image on screen',

  'PRINT_VALUE_ON_BRAIN_TITLE': 'Print value on screen %1',
  'PRINT_VALUE_ON_BRAIN_TOOLTIP': 'Displays a value on the screen',

  'DISPLAY_NEWLINE_TITLE': 'Move cursor to new row on screen %1',
  'DISPLAY_NEWLINE_TOOLTIP': 'Move cursor to new row on screen',

  'CLEAR_DISPLAY_TITLE': 'Clear display %1',
  'CLEAR_DISPLAY_TOOLTIP': 'Clears all characters from the screen',

  'DISPLAY_FONT_COLOR_TITLE': 'Set font/pen color %1 %2',
  'DISPLAY_FONT_COLOR_TOOLTIP': 'Sets the color of text and lines',

  'DISPLAY_BACKGROUND_COLOR_TITLE': 'Set background color %1 %2',
  'DISPLAY_BACKGROUND_COLOR_TOOLTIP': 'Sets the background color of the screen',

  'DISPLAY_FONT_STYLE_TITLE': 'Set font %1 %2 %3',
  'DISPLAY_FONT_STYLE_TOOLTIP': 'Selects font and size',

  'DRAW_PIXEL_TITLE': 'Draw pixel on display at coordinates %1 %2 %3',
  'DRAW_PIXEL_TOOLTIP': 'Draws a point at given coordinates',

  'DRAW_LINE_TITLE': 'Draw line on screen %1 %2 %3 %4 %5',
  'DRAW_LINE_TOOLTIP': 'Draws a line from (X1,Y1) to (X2,Y2)',  

  'DRAW_RECTANGLE_TITLE': 'Draw rectangle on screen %1 %2 %3 %4 %5',
  'DRAW_RECTANGLE_TOOLTIP': 'Draws a rectangle with given dimensions',  

  'DRAW_CIRCLE_TITLE': 'Draw circle on screen %1 %2 %3 %4',
  'DRAW_CIRCLE_TOOLTIP': 'Draws a circle with center (X,Y) and radius',

  'SET_PEN_WIDTH_TITLE': 'Set pen width %1 %2',
  'SET_PEN_WIDTH_TOOLTIP': 'From 0 to 32',
  
  'DISPLAY_FILL_COLOR_TITLE': 'Set shapes fill color %1 %2',
  'DISPLAY_FILL_COLOR_TOOLTIP': 'Sets the fill color of shapes',

  'PLAY_SOUND_TITLE': 'Play sound %1 %2',
  'PLAY_SOUND_TOOLTIP': 'Plays the selected sound',

  'PLAY_NOTE_TITLE': 'Play note %1 octave %2 duration (ms) %3 %4',
  'PLAY_NOTE_TOOLTIP': 'Plays a musical note',

  'BRAIN_LEFT_BUTTON_TITLE': 'Left button ◀ pressed? %1',
  'BRAIN_LEFT_BUTTON_TOOLTIP': 'Returns true if left button is pressed',

  'BRAIN_RIGHT_BUTTON_TITLE': 'Right button ▶ pressed? %1',
  'BRAIN_RIGHT_BUTTON_TOOLTIP': 'Returns true if right button is pressed',

  'BRAIN_CHECK_BUTTON_TITLE': 'Check button ✔ pressed? %1',
  'BRAIN_CHECK_BUTTON_TOOLTIP': 'Returns true if center button is pressed', 

  'STOP_PROGRAM_BLOCK_TITLE': 'Stop program %1',

  'GET_BATTERY_CAPACITY_TITLE': 'Battery capacity in percent %1',
  'GET_BATTERY_CAPACITY_TOOLTIP': 'Battery charge from 0% to 100%',

  'WAIT_UNTIL_TITLE': 'Wait until %1',
  'WAIT_UNTIL_TOOLTIP': 'Program will pause until condition is true',

  'WAIT_TITLE': 'Wait %1 (sec) %2',
  'WAIT_TOOLTIP': 'Pauses the program for the specified time',
  
  'CALIBRATE_GYRO_TITLE': 'Calibrate gyro %1',
  'CALIBRATE_GYRO_TOOLTIP': 'Starts gyro calibration',

  'SET_GYRO_HEADING_TITLE': 'Set gyro heading %1 (degrees) %2',
  'SET_GYRO_HEADING_TOOLTIP': 'Sets the current heading angle',

  'SET_GYRO_ROTATION_TITLE': 'Rotate gyro by %1 (degrees) %2',
  'SET_GYRO_ROTATION_TOOLTIP': 'Sets the rotation angle',

  'GET_GYRO_HEADING_TITLE': 'Gyro heading in degrees %1',
  'GET_GYRO_HEADING_TOOLTIP': 'Returns the current heading',

  'GET_GYRO_ROTATION_TITLE': 'Gyro rotation in degrees %1',
  'GET_GYRO_ROTATION_TOOLTIP': 'Returns the accumulated rotation angle',

  'GET_GYRO_RATE_TITLE': 'Gyro rotation speed in dps (degrees per second) %1',
  'GET_GYRO_RATE_TOOLTIP': 'Returns the current angular velocity',

  'IS_GYRO_CALIBRATING_TITLE': 'Is gyro calibrating? %1',
  'IS_GYRO_CALIBRATING_TOOLTIP': 'True if calibrating, otherwise false',

  'GET_BRAIN_TIMER_TITLE': 'Get timer time in seconds %1',
  'GET_BRAIN_TIMER_TOOLTIP': 'Returns the current timer value',

  'RESET_BRAIN_TIMER_TITLE': 'Reset timer %1',
  'RESET_BRAIN_TIMER_TOOLTIP': 'Resets the timer',

  'RED': 'red',
  'GREEN': 'green',
  'BLUE': 'blue',
  'WHITE': 'white',
  'BLACK': 'black',
  'GRAY': 'gray',
  'YELLOW': 'yellow',
  'ORANGE': 'orange',
  'PURPLE': 'purple',
  'REDVIOLET': 'red-violet',
  'VIOLET': 'violet',
  'BLUEVIOLET': 'blue-violet',

  'FONT_MONO': 'monospace',
  'FONT_PROP': 'proportional',

  'SIZE_XS': 'very small',
  'SIZE_S': 'small',
  'SIZE_M': 'medium',
  'SIZE_L': 'large',
  'SIZE_XL': 'very large',
  'SIZE_XXL': 'extra large',

  'SOUND_ALARM': 'Alarm',
  'SOUND_ALARM2': 'Alarm 2',
  'SOUND_DOOR_CLOSE': 'Door Close',
  'SOUND_FILLUP': 'Fill Up',
  'SOUND_HEADLIGHTS_OFF': 'Headlights Off',
  'SOUND_HEADLIGHTS_ON': 'Headlights On',
  'SOUND_RATCHET': 'Ratchet',
  'SOUND_RATCHET2': 'Ratchet 2',
  'SOUND_SIREN': 'Siren',
  'SOUND_SIREN2': 'Siren 2',
  'SOUND_TADA': 'Tada!',
  'SOUND_TOLLBOOTH': 'Tollbooth',
  'SOUND_WRENCH': 'Wrench',
  'SOUND_WRONG_WAY': 'Wrong Way',
  'SOUND_WRONG_WAY_SLOW': 'Wrong Way Slow',

  'NOTE_A': 'A',
  'NOTE_B': 'B',
  'NOTE_C': 'C',
  'NOTE_D': 'D',
  'NOTE_E': 'E',
  'NOTE_F': 'F',
  'NOTE_G': 'G',

  'OCTAVE_LOW': 'low',
  'OCTAVE_HIGH': 'high',

  'CODE_COPIED': 'Code copied!',
  'CODE_COPY_FAILED': 'Failed to copy code.',

  'DRIVE_BLOCK_TITLE': 'Drive %1 using %2',
  'DRIVE_BLOCK_TOOLTIP': 'Drive continuously until stopped',
  'DRIVE_FOR_BLOCK_TITLE': 'Drive %1 for %2 %3 using %4',
  'DRIVE_FOR_BLOCK_TOOLTIP': 'Drive a given distance',
  'TURN_BLOCK_TITLE': 'Turn %1 using %2',
  'TURN_BLOCK_TOOLTIP': 'Turn continuously until stopped',
  'TURN_FOR_BLOCK_TITLE': 'Turn %1 %2 degrees using %3',
  'TURN_FOR_BLOCK_TOOLTIP': 'Turn for a given angle',

  'FORWARD': 'forward',
  'REVERSE': 'reverse',
  'TURN_RIGHT': 'right',
  'TURN_LEFT': 'left',

  'UNIT_MM': 'mm',
  'UNIT_INCH': 'inches',
  'UNIT_DEG': 'degrees',

  'PORT1': 'port 1',
  'PORT2': 'port 2',
  'PORT3': 'port 3',
  'PORT4': 'port 4',
  'PORT5': 'port 5',
  'PORT6': 'port 6',
  'PORT7': 'port 7',
  'PORT8': 'port 8',
  'PORT9': 'port 9',
  'PORT10': 'port 10',
  'PORT11': 'port 11',
  'PORT12': 'port 12',

  'CREATE_MOTOR_BLOCK_TITLE': 'Motor at port %1 reverse %2',
  'CREATE_MOTOR_BLOCK_TOOLTIP': 'Creates a motor object at the specified port',

  'CREATE_MOTOR_GROUP_FROM_LIST_TITLE': 'Motor group from list %1',
  'CREATE_MOTOR_GROUP_FROM_LIST_TOOLTIP': 'Creates a MotorGroup from a list of motors',

  'SPIN_BLOCK_TOOLTIP': 'Spin a motor or motor group continuously',
  'SPIN_FOR_BLOCK_TOOLTIP': 'Spin a motor or motor group for a given distance',
  'STOP_MOTOR_BLOCK_TOOLTIP': 'Stop a motor or motor group',
  'SPIN_TO_POSITION_BLOCK_TOOLTIP': 'Spin a motor or motor group to an absolute position',

  'SPIN_BLOCK_TITLE': 'Spin %1 %2 at velocity %3 %4',
  'SPIN_FOR_BLOCK_TITLE': 'Spin %1 %2 for %3 %4 at velocity %5 %6',
  'STOP_MOTOR_BLOCK_TITLE': 'Stop %1',
  'SPIN_TO_POSITION_BLOCK_TITLE': 'Spin to position %1 %2 %3 at velocity %4 %5',

  'UNIT_PERCENT': 'percent',
  'UNIT_RPM': 'RPM',
  'UNIT_DPS': 'DPS',
  'UNIT_DEGREES': 'degrees',
  'UNIT_TURNS': 'turns',

  'CREATE_DRIVETRAIN_BLOCK_TITLE': 'Create Drivetrain left %1 right %2 wheel travel %3 mm track width %4 mm wheel base %5 mm units %6 gear ratio %7',
  'CREATE_DRIVETRAIN_BLOCK_TOOLTIP': 'Creates a Drivetrain object for wheeled base control',

  'CREATE_SMART_DRIVE_BLOCK_TITLE': 'Create SmartDrive left %1 right %2 wheel travel %3 mm track width %4 mm wheel base %5 mm units %6 gear ratio %7',
  'CREATE_SMART_DRIVE_BLOCK_TOOLTIP': 'Creates a SmartDrive with gyro sensor',

  'CREATE_INERTIAL_BLOCK_TITLE': 'Inertial sensor',
  'CREATE_INERTIAL_BLOCK_TOOLTIP': 'Creates an Inertial object for SmartDrive',

  'UNIT_CM': 'cm',
  'UNIT_INCH': 'inches',

  'STOP_DRIVETRAIN_BLOCK_TITLE': 'Stop drivetrain %1 mode %2',
  'STOP_DRIVETRAIN_BLOCK_TOOLTIP': 'Stops the drivetrain with the specified mode',

  'STOP_MODE_COAST': 'coast',
  'STOP_MODE_BRAKE': 'brake',
  'STOP_MODE_HOLD': 'hold',

  'CREATE_PNEUMATIC_BLOCK_TITLE': 'Pneumatic at port %1',
  'CREATE_PNEUMATIC_BLOCK_TOOLTIP': 'Creates a Pneumatic object on the specified port',

  'PNEUMATIC_PUMP_ON_BLOCK_TITLE': 'Turn pump on %1',
  'PNEUMATIC_PUMP_ON_BLOCK_TOOLTIP': 'Turns the pneumatic air pump on',

  'PNEUMATIC_PUMP_OFF_BLOCK_TITLE': 'Turn pump off %1',
  'PNEUMATIC_PUMP_OFF_BLOCK_TOOLTIP': 'Turns the pneumatic air pump off',

  'PNEUMATIC_EXTEND_BLOCK_TITLE': 'Extend cylinder %2 of %1',
  'PNEUMATIC_EXTEND_BLOCK_TOOLTIP': 'Extends a pneumatic cylinder',

  'PNEUMATIC_RETRACT_BLOCK_TITLE': 'Retract cylinder %2 of %1',
  'PNEUMATIC_RETRACT_BLOCK_TOOLTIP': 'Retracts a pneumatic cylinder',

  'PNEUMATIC_INSTALLED_BLOCK_TITLE': 'Solenoid %1 installed?',
  'PNEUMATIC_INSTALLED_BLOCK_TOOLTIP': 'Checks if the solenoid is connected to the Brain',

  'CYLINDER1': 'cylinder 1',
  'CYLINDER2': 'cylinder 2',
  'CYLINDERALL': 'both cylinders',

  'CREATE_BUMPER_BLOCK_TITLE': 'Bumper at port %1',
  'CREATE_BUMPER_BLOCK_TOOLTIP': 'Creates a Bumper Switch object',

  'BUMPER_PRESSED_BLOCK_TITLE': 'Bumper %1 pressed?',
  'BUMPER_PRESSED_BLOCK_TOOLTIP': 'Returns True if the bumper is pressed',

  'BUMPER_PRESSED_HANDLER_TITLE': 'When bumper %1 pressed %2',
  'BUMPER_PRESSED_HANDLER_TOOLTIP': 'Executes nested blocks when the bumper is pressed',

  'BUMPER_RELEASED_HANDLER_TITLE': 'When bumper %1 released %2',
  'BUMPER_RELEASED_HANDLER_TOOLTIP': 'Executes nested blocks when the bumper is released',


  'CREATE_TOUCH_LED_BLOCK_TITLE': 'Touch LED at port %1',
  'CREATE_TOUCH_LED_BLOCK_TOOLTIP': 'Creates a Touch LED object',

  'TOUCH_LED_PRESSED_BLOCK_TITLE': 'Touch LED %1 pressed?',
  'TOUCH_LED_PRESSED_BLOCK_TOOLTIP': 'Returns True if the Touch LED is pressed',

  'TOUCH_LED_SET_COLOR_BLOCK_TITLE': 'Set color %2 of %1',
  'TOUCH_LED_SET_COLOR_BLOCK_TOOLTIP': 'Sets the LED color',

  'TOUCH_LED_SET_BRIGHTNESS_BLOCK_TITLE': 'Set brightness %2 of %1',
  'TOUCH_LED_SET_BRIGHTNESS_BLOCK_TOOLTIP': 'Sets brightness from 0 to 100',

  'TOUCH_LED_PRESSED_HANDLER_TITLE': 'When touch LED %1 pressed %2',
  'TOUCH_LED_PRESSED_HANDLER_TOOLTIP': 'Executes nested blocks when the Touch LED is pressed',

  'TOUCH_LED_RELEASED_HANDLER_TITLE': 'When touch LED %1 released %2',
  'TOUCH_LED_RELEASED_HANDLER_TOOLTIP': 'Executes nested blocks when the Touch LED is released',

  'TOUCH_LED_INSTALLED_BLOCK_TITLE': 'Touch LED %1 installed?',
  'TOUCH_LED_INSTALLED_BLOCK_TOOLTIP': 'Checks if the Touch LED is connected',

  'OFF': 'off',

  'TOUCH_LED_SET_FADE_BLOCK_TITLE': 'Set fade %2 of %1',
  'TOUCH_LED_SET_FADE_BLOCK_TOOLTIP': 'Sets the color transition type',

  'TOUCH_LED_SET_BLINK_BLOCK_TITLE': 'Blink color %2 of %1 (on %3 s, off %4 s)',
  'TOUCH_LED_SET_BLINK_BLOCK_TOOLTIP': 'Sets the LED to blink',

  'TOUCH_LED_STOP_BLINK_BLOCK_TITLE': 'Stop blinking %1',
  'TOUCH_LED_STOP_BLINK_BLOCK_TOOLTIP': 'Stops blinking (sets brightness to 0)',

  'FADE_FAST': 'Fast',
  'FADE_SLOW': 'Slow',
  'FADE_OFF': 'Instant (no fade)',

  'CREATE_COLOR_SENSOR_BLOCK_TITLE': 'Color sensor at port %1',
  'CREATE_COLOR_SENSOR_BLOCK_TOOLTIP': 'Creates a Color Sensor object',

  'COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TITLE': 'When color sensor %1 detects object %2',
  'COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TOOLTIP': 'Executes nested blocks when an object is detected',

  'COLOR_SENSOR_SET_LIGHT_BLOCK_TITLE': 'Set light %2 of %1 (brightness %3)',
  'COLOR_SENSOR_SET_LIGHT_BLOCK_TOOLTIP': 'Controls the Color Sensor\'s LED',

  'COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TITLE': 'Set light power %2 of %1',
  'COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TOOLTIP': 'Sets the LED brightness',

  'COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TITLE': 'Color sensor %1 near object?',
  'COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TOOLTIP': 'Returns True if an object is within 57 mm',

  'COLOR_SENSOR_COLOR_BLOCK_TITLE': 'Color (hex) from %1',
  'COLOR_SENSOR_COLOR_BLOCK_TOOLTIP': 'Returns the detected color as hex',

  'COLOR_SENSOR_BRIGHTNESS_BLOCK_TITLE': 'Brightness from %1',
  'COLOR_SENSOR_BRIGHTNESS_BLOCK_TOOLTIP': 'Returns brightness from 0 to 100',

  'COLOR_SENSOR_HUE_BLOCK_TITLE': 'Hue from %1',
  'COLOR_SENSOR_HUE_BLOCK_TOOLTIP': 'Returns hue from 0 to 360 degrees',

  'LIGHT_ON': 'On',
  'LIGHT_OFF': 'Off',
  'LIGHT_BRIGHTNESS': 'Brightness',

  'CREATE_DISTANCE_SENSOR_BLOCK_TITLE': 'Distance sensor at port %1',
  'CREATE_DISTANCE_SENSOR_BLOCK_TOOLTIP': 'Creates a Distance Sensor (2nd gen) object',

  'DISTANCE_IS_OBJECT_DETECTED_BLOCK_TITLE': 'Distance sensor %1 detected object?',
  'DISTANCE_IS_OBJECT_DETECTED_BLOCK_TOOLTIP': 'Returns True if an object is in range',

  'DISTANCE_OBJECT_DISTANCE_BLOCK_TITLE': 'Object distance from %1 in %2',
  'DISTANCE_OBJECT_DISTANCE_BLOCK_TOOLTIP': 'Returns the distance to the nearest object',

  'DISTANCE_OBJECT_VELOCITY_BLOCK_TITLE': 'Object velocity from %1',
  'DISTANCE_OBJECT_VELOCITY_BLOCK_TOOLTIP': 'Returns the relative velocity of the object (m/s)',

  'CREATE_OPTICAL_SENSOR_BLOCK_TITLE': 'Optical sensor at port %1',
  'CREATE_OPTICAL_SENSOR_BLOCK_TOOLTIP': 'Creates an Optical Sensor object',

  'OPTICAL_SET_LIGHT_BLOCK_TITLE': 'Set light %2 of %1',
  'OPTICAL_SET_LIGHT_BLOCK_TOOLTIP': 'Turns the Optical Sensor LED on/off',

  'OPTICAL_SET_LIGHT_POWER_BLOCK_TITLE': 'Set light power %2 of %1',
  'OPTICAL_SET_LIGHT_POWER_BLOCK_TOOLTIP': 'Sets LED brightness (0–100)',

  'OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TITLE': 'Set detect threshold %2 of %1',
  'OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TOOLTIP': 'Sets detection threshold (0–255)',

  'OPTICAL_IS_NEAR_OBJECT_BLOCK_TITLE': 'Optical sensor %1 near object?',
  'OPTICAL_IS_NEAR_OBJECT_BLOCK_TOOLTIP': 'Returns True if an object is near',

  'OPTICAL_COLOR_BLOCK_TITLE': 'Color from %1',
  'OPTICAL_COLOR_BLOCK_TOOLTIP': 'Returns the detected color (constant)',

  'OPTICAL_BRIGHTNESS_BLOCK_TITLE': 'Brightness from %1',
  'OPTICAL_BRIGHTNESS_BLOCK_TOOLTIP': 'Returns brightness (%)',

  'OPTICAL_HUE_BLOCK_TITLE': 'Hue from %1',
  'OPTICAL_HUE_BLOCK_TOOLTIP': 'Returns hue (0–360°)',

  'OPTICAL_RGB_BLOCK_TITLE': 'RGB from %1',
  'OPTICAL_RGB_BLOCK_TOOLTIP': 'Returns tuple (R, G, B, brightness)',

  'OPTICAL_OBJECT_DETECTED_HANDLER_TITLE': 'When optical sensor %1 detected object %2',
  'OPTICAL_OBJECT_DETECTED_HANDLER_TOOLTIP': 'Runs blocks when object is detected',

  'OPTICAL_OBJECT_LOST_HANDLER_TITLE': 'When optical sensor %1 lost object %2',
  'OPTICAL_OBJECT_LOST_HANDLER_TOOLTIP': 'Runs blocks when object is lost',

  'CREATE_CONTROLLER_BLOCK_TITLE': 'Controller',
  'CREATE_CONTROLLER_BLOCK_TOOLTIP': 'Creates a Controller object',

  'CONTROLLER_REMOTE_ENABLED_BLOCK_TITLE': 'Remote control %1',
  'CONTROLLER_REMOTE_ENABLED_BLOCK_TOOLTIP': 'Enables/disables controller actions from device menu',

  'CONTROLLER_BUTTON_PRESSING_BLOCK_TITLE': 'Button %2 of %1 pressed?',
  'CONTROLLER_BUTTON_PRESSING_BLOCK_TOOLTIP': 'Returns True if the button is pressed',

  'CONTROLLER_AXIS_POSITION_BLOCK_TITLE': 'Axis %2 of %1 position',
  'CONTROLLER_AXIS_POSITION_BLOCK_TOOLTIP': 'Returns axis position from -100 to 100',

  'CONTROLLER_BUTTON_PRESSED_HANDLER_TITLE': 'When button %2 of %1 pressed %3',
  'CONTROLLER_BUTTON_PRESSED_HANDLER_TOOLTIP': 'Runs blocks when button is pressed',

  'CONTROLLER_BUTTON_RELEASED_HANDLER_TITLE': 'When button %2 of %1 released %3',
  'CONTROLLER_BUTTON_RELEASED_HANDLER_TOOLTIP': 'Runs blocks when button is released',

  'CONTROLLER_AXIS_CHANGED_HANDLER_TITLE': 'When axis %2 of %1 changed %3',
  'CONTROLLER_AXIS_CHANGED_HANDLER_TOOLTIP': 'Runs blocks when axis position changes',

  'BUTTON_EUP': 'E ▲',
  'BUTTON_EDOWN': 'E ▼',
  'BUTTON_FUP': 'F ▲',
  'BUTTON_FDOWN': 'F ▼',
  'BUTTON_LUP': 'L ▲',
  'BUTTON_LDOWN': 'L ▼',
  'BUTTON_RUP': 'R ▲',
  'BUTTON_RDOWN': 'R ▼',
  'BUTTON_L3': 'L3 (joystick)',
  'BUTTON_R3': 'R3 (joystick)',

  'AXIS_A': 'axis A (left vert.)',
  'AXIS_B': 'axis B (left hor.)',
  'AXIS_C': 'axis C (right hor.)',
  'AXIS_D': 'axis D (right vert.)',

  'ENABLE': 'enable',
  'DISABLE': 'disable',
};