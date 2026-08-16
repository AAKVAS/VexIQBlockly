export const ruTable = {
  'CATEGORY_DISPLAY': 'Экран',
  'CATEGORY_SOUND': "Звук",
  'CATEGORY_CONTROLLER': "Контроллер",
  'CATEGORY_BRAIN_SENSING': "Датчики платы",
  'CATEGORY_TOUCH_SENSING': "Датчики касаний",
  'CATEGORY_OPTICAL_SENSING': "Оптические датчики",
  'CATEGORY_MOVEMENT': 'Движение',
  'CATEGORY_PNEUMATIC': 'Пневматика',
  'CATEGORY_LOGIC': 'Логика',
  'CATEGORY_LOOPS': 'Циклы',
  'CATEGORY_MATH': 'Математика',
  'CATEGORY_TEXT': 'Текст',
  'CATEGORY_LISTS': 'Списки',
  'CATEGORY_VARIABLES': 'Переменные',
  'CATEGORY_FUNCTIONS': 'Функции',

  'PRINT_ON_BRAIN_TITLE': 'Вывести текст на экран %1 %2',
  'PRINT_ON_BRAIN_TOOLTIP': 'Выводит изображение на экран',
  
  'PRINT_VALUE_ON_BRAIN_TITLE': 'Вывести на экран значение %1',
  'PRINT_VALUE_ON_BRAIN_TOOLTIP': 'Выводит значение на экран',

  'DISPLAY_NEWLINE_TITLE': 'Перенести курсор на новую строку экрана %1',
  'DISPLAY_NEWLINE_TOOLTIP': 'Перенести курсор на новую строку экрана',

  'CLEAR_DISPLAY_TITLE': 'Очистить дисплей %1',
  'CLEAR_DISPLAY_TOOLTIP': 'Очищает все символы с экрана',

  'DISPLAY_FONT_COLOR_TITLE': 'Установить цвет шрифта/пера %1 %2',
  'DISPLAY_FONT_COLOR_TOOLTIP': 'Устанавливает цвет текста и линий',

  'DISPLAY_BACKGROUND_COLOR_TITLE': 'Установить цвет фона %1 %2',
  'DISPLAY_BACKGROUND_COLOR_TOOLTIP': 'Устанавливает цвет фона экрана',

  'DISPLAY_FONT_STYLE_TITLE': 'Установить шрифт %1 %2 %3',
  'DISPLAY_FONT_STYLE_TOOLTIP': 'Выбирает шрифт и размер',

  'DRAW_PIXEL_TITLE': 'Нарисовать пиксель на дисплее в координате %1 %2 %3',
  'DRAW_PIXEL_TOOLTIP': 'Рисует точку по координатам',

  'DRAW_LINE_TITLE': 'Нарисовать линию на экране %1 %2 %3 %4 %5',
  'DRAW_LINE_TOOLTIP': 'Рисует линию от (X1,Y1) до (X2,Y2)',  

  'DRAW_RECTANGLE_TITLE': 'Нарисовать прямоугольник на экране %1 %2 %3 %4 %5',
  'DRAW_RECTANGLE_TOOLTIP': 'Рисует прямоугольник с заданными размерами',  

  'DRAW_CIRCLE_TITLE': 'Нарисовать круг на экране %1 %2 %3 %4',
  'DRAW_CIRCLE_TOOLTIP': 'Рисует круг с центром в (X,Y) и радиусом',

  'SET_PEN_WIDTH_TITLE': 'Установить ширину пера %1 %2',
  'SET_PEN_WIDTH_TOOLTIP': 'от 0 до 32',
  
  'DISPLAY_FILL_COLOR_TITLE': 'Установить цвет фигур %1 %2',
  'DISPLAY_FILL_COLOR_TOOLTIP': 'Устанавливает цвет заливки фигур',

  'PLAY_SOUND_TITLE': 'Воспроизвести звук %1 %2',
  'PLAY_SOUND_TOOLTIP': 'Проигрывает выбранный звук',

  'PLAY_NOTE_TITLE': 'Воспроизвести ноту %1 октава %2 длительность (мс) %3 %4',
  'PLAY_NOTE_TOOLTIP': 'Проигрывает музыкальную ноту',  

  'BRAIN_LEFT_BUTTON_TITLE': 'Кнопка ◀ нажата? %1',
  'BRAIN_LEFT_BUTTON_TOOLTIP': 'Возвращает истину, если левая кнопка нажата',  

  'BRAIN_RIGHT_BUTTON_TITLE': 'Кнопка ▶ нажата? %1',
  'BRAIN_RIGHT_BUTTON_TOOLTIP': 'Возвращает истину, если правая кнопка нажата',

  'BRAIN_CHECK_BUTTON_TITLE': 'Кнопка ✔ нажата? %1',
  'BRAIN_CHECK_BUTTON_TOOLTIP': 'Возвращает истину, если центральная кнопка нажата',  

  'STOP_PROGRAM_BLOCK_TITLE': 'Остановить программу %1',

  'GET_BATTERY_CAPACITY_TITLE': 'Ёмкость аккумулятора в процентах %1',
  'GET_BATTERY_CAPACITY_TOOLTIP': 'Заряд аккумулятора от 0% до 100%', 

  'WAIT_UNTIL_TITLE': 'Ждать пока не %1',
  'WAIT_UNTIL_TOOLTIP': 'Программа будет остановлена пока не выполняется условие',

  'WAIT_TITLE': 'Ждать %1 (сек) %2',
  'WAIT_TOOLTIP': 'Останавливает программу на указанное время',

  'BREAK_TITLE': 'Прервать цикл %1',
  'BREAK_TOOLTIP': 'Прерывает циклические логические операции', 
  
  'CALIBRATE_GYRO_TITLE': 'Откалибровать гироскоп %1',
  'CALIBRATE_GYRO_TOOLTIP': 'Запускает калибровку гироскопа',

  'SET_GYRO_HEADING_TITLE': 'Установить направление гироскопа %1 (градусы) %2',
  'SET_GYRO_HEADING_TOOLTIP': 'Устанавливает текущий угол курса',

  'SET_GYRO_ROTATION_TITLE': 'Повернуть гироскоп на %1 (градусов) %2',
  'SET_GYRO_ROTATION_TOOLTIP': 'Устанавливает угол поворота',

  'GET_GYRO_HEADING_TITLE': 'Направление гироскопа в градусах %1',
  'GET_GYRO_HEADING_TOOLTIP': 'Возвращает текущий курс',

  'GET_GYRO_ROTATION_TITLE': 'Вращение гироскопа в градусах %1',
  'GET_GYRO_ROTATION_TOOLTIP': 'Возвращает накопленный угол поворота',

  'GET_GYRO_RATE_TITLE': 'Скорость вращения гироскопа в dps (оборот в секунду) %1',
  'GET_GYRO_RATE_TOOLTIP': 'Возвращает текущую угловую скорость',

  'IS_GYRO_CALIBRATING_TITLE': 'Гироскоп калибруется? %1',
  'IS_GYRO_CALIBRATING_TOOLTIP': 'Истина, если калибруется, иначе ложь',  

  'GET_BRAIN_TIMER_TITLE': 'Получить время таймера в секундах %1',
  'GET_BRAIN_TIMER_TOOLTIP': 'Возвращает текущее значение таймера',

  'RESET_BRAIN_TIMER_TITLE': 'Сбросить время таймера %1',
  'RESET_BRAIN_TIMER_TOOLTIP': 'Обнуляет таймер',

  'RED': 'красный',
  'GREEN': 'зеленый',
  'BLUE': 'синий',
  'WHITE': 'белый',
  'BLACK': 'черный',
  'GRAY': 'серый',
  'YELLOW': 'желтый',
  'ORANGE': 'оранжевый',
  'PURPLE': 'фиолетовый',
  'REDVIOLET': 'красно-фиолетовый',
  'VIOLET': 'фиалковый',
  'BLUEVIOLET': 'сине-фиолетовый',

  'FONT_MONO': 'моноширный',
  'FONT_PROP': 'пропорциональный',

  'SIZE_XS': 'очень маленький',
  'SIZE_S': 'маленький',
  'SIZE_M': 'средний',
  'SIZE_L': 'большой',
  'SIZE_XL': 'очень большой',
  'SIZE_XXL': 'супер большой',

  'SOUND_ALARM': 'Тревога',
  'SOUND_ALARM2': 'Тревога2',
  'SOUND_DOOR_CLOSE': 'Закрытие двери',
  'SOUND_FILLUP': 'Заправка',
  'SOUND_HEADLIGHTS_OFF': 'Выключение фар',
  'SOUND_HEADLIGHTS_ON': 'Включение фар',
  'SOUND_RATCHET': 'Трещетка',
  'SOUND_RATCHET2': 'Трещетка 2',
  'SOUND_SIREN': 'Сирена',
  'SOUND_SIREN2': 'Сирена2',
  'SOUND_TADA': 'Тадам!',
  'SOUND_TOLLBOOTH': 'Бзынь',
  'SOUND_WRENCH': 'Ключ',
  'SOUND_WRONG_WAY': 'Неверный путь',
  'SOUND_WRONG_WAY_SLOW': 'Неверный путь медленный',

  'NOTE_A': 'A (ля)',
  'NOTE_B': 'B (си)',
  'NOTE_C': 'C (до)',
  'NOTE_D': 'D (ре)',
  'NOTE_E': 'E (ми)',
  'NOTE_F': 'F (фа)',
  'NOTE_G': 'G (соль)',     

  'OCTAVE_LOW': 'низкая',
  'OCTAVE_HIGH': 'высокая',

  'CODE_COPIED': 'Код скопирован!',
  'CODE_COPY_FAILED': 'Не удалось скопировать код.',


  'RESET_BRAIN_TIMER_TITLE': 'Сбросить время таймера %1',
  'RESET_BRAIN_TIMER_TOOLTIP': 'Обнуляет таймер',

  'DRIVE_BLOCK_TITLE': 'Ехать %1 используя %2',
  'DRIVE_BLOCK_TOOLTIP': 'Двигаться непрерывно, пока не остановят',
  'DRIVE_FOR_BLOCK_TITLE': 'Ехать %1 на расстояние %2 %3 используя %4',
  'DRIVE_FOR_BLOCK_TOOLTIP': 'Проехать заданное расстояние',
  'TURN_BLOCK_TITLE': 'Повернуть %1 используя %2',
  'TURN_BLOCK_TOOLTIP': 'Поворачивать непрерывно, пока не остановят',
  'TURN_FOR_BLOCK_TITLE': 'Повернуть %1 на %2 градусов используя %3',
  'TURN_FOR_BLOCK_TOOLTIP': 'Повернуть на заданный угол',

  'FORWARD': 'вперёд',
  'REVERSE': 'назад',
  'TURN_RIGHT': 'вправо',
  'TURN_LEFT': 'влево',

  'UNIT_MM': 'мм',
  'UNIT_INCH': 'дюймы',
  'UNIT_DEG': 'градусы',

  'PORT1': 'порт 1',
  'PORT2': 'порт 2',
  'PORT3': 'порт 3',
  'PORT4': 'порт 4',
  'PORT5': 'порт 5',
  'PORT6': 'порт 6',
  'PORT7': 'порт 7',
  'PORT8': 'порт 8',
  'PORT9': 'порт 9',
  'PORT10': 'порт 10',
  'PORT11': 'порт 11',
  'PORT12': 'порт 12',

  'CREATE_MOTOR_BLOCK_TITLE': 'Мотор на порту %1 обратное вращение %2',
  'CREATE_MOTOR_BLOCK_TOOLTIP': 'Объявляет объект мотора на указанном порту',

  'CREATE_MOTOR_GROUP_FROM_LIST_TITLE': 'Группа моторов из списка %1',
  'CREATE_MOTOR_GROUP_FROM_LIST_TOOLTIP': 'Создаёт группу моторов из списка моторов',

  'SPIN_BLOCK_TOOLTIP': 'Вращать мотор или группу непрерывно',
  'SPIN_FOR_BLOCK_TOOLTIP': 'Вращать мотор или группу на заданное расстояние',
  'STOP_MOTOR_BLOCK_TOOLTIP': 'Остановить вращение мотора или группы',

  'SPIN_TO_POSITION_BLOCK_TOOLTIP': 'Вращать мотор или группу в абсолютную позицию',

  'SPIN_BLOCK_TITLE': 'Вращать %1 %2 со скоростью %3 %4',
  'SPIN_FOR_BLOCK_TITLE': 'Вращать %1 %2 на расстояние %3 %4 со скоростью %5 %6',
  'STOP_MOTOR_BLOCK_TITLE': 'Остановить вращение %1',
  'SPIN_TO_POSITION_BLOCK_TITLE': 'Вращать в позицию %1 %2 %3 со скоростью %4 %5',

  'UNIT_PERCENT': 'проценты',
  'UNIT_RPM': 'об/мин',
  'UNIT_DPS': 'град/сек',
  'UNIT_DEGREES': 'градусы',
  'UNIT_TURNS': 'обороты',

  'CREATE_DRIVETRAIN_BLOCK_TITLE': 'Cобрать шасси из левой части %1 и правой части %2 диаметр колеса %3 мм колея %4 мм база %5 мм единицы %6 передаточное %7',
  'CREATE_DRIVETRAIN_BLOCK_TOOLTIP': 'Создаёт шасси(Drivetrain) для управления колёсной базой',

  'CREATE_SMART_DRIVE_BLOCK_TITLE': 'Создать умный привод из левой части %1 и правой части %2 диаметр колеса %3 мм колея %4 мм база %5 мм единицы %6 передаточное %7',
  'CREATE_SMART_DRIVE_BLOCK_TOOLTIP': 'Создаёт умный привод с гироскопом',

  'CREATE_INERTIAL_BLOCK_TITLE': 'Гироскоп',
  'CREATE_INERTIAL_BLOCK_TOOLTIP': 'Создаёт гироскоп для умного привода',

  'UNIT_CM': 'см',
  'UNIT_INCH': 'дюймы',

  'STOP_DRIVETRAIN_BLOCK_TITLE': 'Остановить шасси/привод %1 режим %2',
  'STOP_DRIVETRAIN_BLOCK_TOOLTIP': 'Останавливает привод с указанным режимом',

  'STOP_MODE_COAST': 'накат',
  'STOP_MODE_BRAKE': 'тормоз',
  'STOP_MODE_HOLD': 'удержание',

  'CREATE_PNEUMATIC_BLOCK_TITLE': 'Пневматика на порту %1',
  'CREATE_PNEUMATIC_BLOCK_TOOLTIP': 'Создаёт объект пневматики на указанном порту',

  'PNEUMATIC_PUMP_ON_BLOCK_TITLE': 'Включить насос %1',
  'PNEUMATIC_PUMP_ON_BLOCK_TOOLTIP': 'Включает воздушный насос',

  'PNEUMATIC_PUMP_OFF_BLOCK_TITLE': 'Выключить насос %1',
  'PNEUMATIC_PUMP_OFF_BLOCK_TOOLTIP': 'Выключает воздушный насос',

  'PNEUMATIC_EXTEND_BLOCK_TITLE': 'Выдвинуть цилиндр %2 у %1',
  'PNEUMATIC_EXTEND_BLOCK_TOOLTIP': 'Выдвигает пневматический цилиндр',

  'PNEUMATIC_RETRACT_BLOCK_TITLE': 'Втянуть цилиндр %2 у %1',
  'PNEUMATIC_RETRACT_BLOCK_TOOLTIP': 'Втягивает пневматический цилиндр',

  'PNEUMATIC_INSTALLED_BLOCK_TITLE': 'Соленоид %1 подключён?',
  'PNEUMATIC_INSTALLED_BLOCK_TOOLTIP': 'Проверяет, подключён ли соленоид к мозгу',

  'CYLINDER1': 'цилиндр 1',
  'CYLINDER2': 'цилиндр 2',
  'CYLINDERALL': 'оба цилиндра',

  'CREATE_BUMPER_BLOCK_TITLE': 'Бампер на порту %1',
  'CREATE_BUMPER_BLOCK_TOOLTIP': 'Объявлет бамперный переключатель',

  'BUMPER_PRESSED_BLOCK_TITLE': 'Бампер %1 нажат?',
  'BUMPER_PRESSED_BLOCK_TOOLTIP': 'Возвращает истину, если бампер нажат',

  'BUMPER_PRESSED_HANDLER_TITLE': 'Когда бампер %1 нажат, выполнить %2',
  'BUMPER_PRESSED_HANDLER_TOOLTIP': 'Выполняет вложенные блоки при нажатии бампера',

  'BUMPER_RELEASED_HANDLER_TITLE': 'Когда бампер %1 отпущен, выполнить %2',
  'BUMPER_RELEASED_HANDLER_TOOLTIP': 'Выполняет вложенные блоки при отпускании бампера',

  'CREATE_TOUCH_LED_BLOCK_TITLE': 'Сенсорный светодиод на порту %1',
  'CREATE_TOUCH_LED_BLOCK_TOOLTIP': 'Создаёт объект Touch LED',

  'TOUCH_LED_PRESSED_BLOCK_TITLE': 'Сенсорный светодиод %1 нажат?',
  'TOUCH_LED_PRESSED_BLOCK_TOOLTIP': 'Возвращает True, если сенсорный светодиод нажат',

  'TOUCH_LED_SET_COLOR_BLOCK_TITLE': 'Установить цвет %2 у %1',
  'TOUCH_LED_SET_COLOR_BLOCK_TOOLTIP': 'Устанавливает цвет свечения',

  'TOUCH_LED_SET_BRIGHTNESS_BLOCK_TITLE': 'Установить яркость %2 у %1',
  'TOUCH_LED_SET_BRIGHTNESS_BLOCK_TOOLTIP': 'Устанавливает яркость от 0 до 100',

  'TOUCH_LED_PRESSED_HANDLER_TITLE': 'Когда сенсорный светодиод %1 нажат, выполнить %2',
  'TOUCH_LED_PRESSED_HANDLER_TOOLTIP': 'Выполняет вложенные блоки при нажатии',

  'TOUCH_LED_RELEASED_HANDLER_TITLE': 'Когда сенсорный светодиод %1 отпущен, выполнить %2',
  'TOUCH_LED_RELEASED_HANDLER_TOOLTIP': 'Выполняет вложенные блоки при отпускании',

  'TOUCH_LED_INSTALLED_BLOCK_TITLE': 'Сенсорный светодиод %1 установлен?',
  'TOUCH_LED_INSTALLED_BLOCK_TOOLTIP': 'Проверяет, подключён ли сенсорный светодиод',

  'OFF': 'выключен',

  'TOUCH_LED_SET_FADE_BLOCK_TITLE': 'Установить затухание %2 у %1',
  'TOUCH_LED_SET_FADE_BLOCK_TOOLTIP': 'Устанавливает тип перехода между цветами',

  'TOUCH_LED_SET_BLINK_BLOCK_TITLE': 'Начать мигание цветом %2 у светодиода %1 (вкл %3 с, выкл %4 с)',
  'TOUCH_LED_SET_BLINK_BLOCK_TOOLTIP': 'Устанавливает мигание светодиода',

  'TOUCH_LED_STOP_BLINK_BLOCK_TITLE': 'Остановить мигание у светодиода %1',
  'TOUCH_LED_STOP_BLINK_BLOCK_TOOLTIP': 'Останавливает мигание (устанавливает яркость 0)',

  'FADE_FAST': 'Быстро',
  'FADE_SLOW': 'Медленно',
  'FADE_OFF': 'Мгновенно (без затухания)',

  'CREATE_COLOR_SENSOR_BLOCK_TITLE': 'Датчик цвета на порту %1',
  'CREATE_COLOR_SENSOR_BLOCK_TOOLTIP': 'Создаёт объект Color Sensor',

  'COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TITLE': 'Когда датчик цвета %1 обнаружил объект, выполнить %2',
  'COLOR_SENSOR_OBJECT_DETECTED_HANDLER_TOOLTIP': 'Выполняет вложенные блоки при обнаружении объекта',

  'COLOR_SENSOR_SET_LIGHT_BLOCK_TITLE': 'Установить подсветку %2 у %1 (яркость %3)',
  'COLOR_SENSOR_SET_LIGHT_BLOCK_TOOLTIP': 'Управляет подсветкой датчика цвета',

  'COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TITLE': 'Установить мощность подсветки %2 у %1',
  'COLOR_SENSOR_SET_LIGHT_POWER_BLOCK_TOOLTIP': 'Устанавливает яркость подсветки',

  'COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TITLE': 'Датчик цвета %1 обнаружил объект (ближе 57 мм)?',
  'COLOR_SENSOR_IS_NEAR_OBJECT_BLOCK_TOOLTIP': 'Возвращает True, если объект ближе 57 мм',

  'COLOR_SENSOR_COLOR_BLOCK_TITLE': 'Цвет (hex) с датчика %1',
  'COLOR_SENSOR_COLOR_BLOCK_TOOLTIP': 'Возвращает цвет в формате hex',

  'COLOR_SENSOR_BRIGHTNESS_BLOCK_TITLE': 'Яркость с датчика %1',
  'COLOR_SENSOR_BRIGHTNESS_BLOCK_TOOLTIP': 'Возвращает яркость от 0 до 100',

  'COLOR_SENSOR_HUE_BLOCK_TITLE': 'Оттенок с датчика %1',
  'COLOR_SENSOR_HUE_BLOCK_TOOLTIP': 'Возвращает оттенок от 0 до 360 градусов',

  'LIGHT_ON': 'Включена',
  'LIGHT_OFF': 'Выключена',
  'LIGHT_BRIGHTNESS': 'Яркость',

  'CREATE_DISTANCE_SENSOR_BLOCK_TITLE': 'Датчик расстояния на порту %1',
  'CREATE_DISTANCE_SENSOR_BLOCK_TOOLTIP': 'Создаёт объект Distance Sensor (2-го поколения)',

  'DISTANCE_IS_OBJECT_DETECTED_BLOCK_TITLE': 'Датчик %1 обнаружил объект?',
  'DISTANCE_IS_OBJECT_DETECTED_BLOCK_TOOLTIP': 'Возвращает True, если объект в диапазоне',

  'DISTANCE_OBJECT_DISTANCE_BLOCK_TITLE': 'Расстояние до объекта от %1 в %2',
  'DISTANCE_OBJECT_DISTANCE_BLOCK_TOOLTIP': 'Возвращает расстояние до ближайшего объекта',

  'DISTANCE_OBJECT_VELOCITY_BLOCK_TITLE': 'Скорость объекта от %1',
  'DISTANCE_OBJECT_VELOCITY_BLOCK_TOOLTIP': 'Возвращает относительную скорость объекта (м/с)',

  'CREATE_OPTICAL_SENSOR_BLOCK_TITLE': 'Оптический датчик на порту %1',
  'CREATE_OPTICAL_SENSOR_BLOCK_TOOLTIP': 'Создаёт объект Optical Sensor',

  'OPTICAL_SET_LIGHT_BLOCK_TITLE': 'Установить подсветку %2 у %1',
  'OPTICAL_SET_LIGHT_BLOCK_TOOLTIP': 'Включает/выключает подсветку оптического датчика',

  'OPTICAL_SET_LIGHT_POWER_BLOCK_TITLE': 'Установить мощность подсветки %2 у оптического датчика %1',
  'OPTICAL_SET_LIGHT_POWER_BLOCK_TOOLTIP': 'Устанавливает яркость подсветки оптического датчика в значении (0–100)',

  'OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TITLE': 'Установить порог обнаружения %2 у %1',
  'OPTICAL_OBJECT_DETECT_THRESHOLD_BLOCK_TOOLTIP': 'Устанавливает порог обнаружения (0–255), чем выше порог, тем ближе ищутся объекты',

  'OPTICAL_IS_NEAR_OBJECT_BLOCK_TITLE': 'Оптический датчик %1 близко к объекту?',
  'OPTICAL_IS_NEAR_OBJECT_BLOCK_TOOLTIP': 'Возвращает True, если объект рядом',

  'OPTICAL_COLOR_BLOCK_TITLE': 'Цвет с датчика %1',
  'OPTICAL_COLOR_BLOCK_TOOLTIP': 'Возвращает обнаруженный цвет (константа)',

  'OPTICAL_BRIGHTNESS_BLOCK_TITLE': 'Яркость с датчика %1',
  'OPTICAL_BRIGHTNESS_BLOCK_TOOLTIP': 'Возвращает яркость в процентах',

  'OPTICAL_HUE_BLOCK_TITLE': 'Оттенок с датчика %1',
  'OPTICAL_HUE_BLOCK_TOOLTIP': 'Возвращает оттенок (0–360°)',

  'OPTICAL_RGB_BLOCK_TITLE': 'Цвет RGB с датчика %1',
  'OPTICAL_RGB_BLOCK_TOOLTIP': 'Возвращает кортеж (R, G, B, яркость)',

  'OPTICAL_OBJECT_DETECTED_HANDLER_TITLE': 'Когда оптический датчик %1 обнаружил объект, выполнить %2',
  'OPTICAL_OBJECT_DETECTED_HANDLER_TOOLTIP': 'Выполняет блоки при обнаружении объекта',

  'OPTICAL_OBJECT_LOST_HANDLER_TITLE': 'Когда оптический датчик %1 потерял объект, выполнить %2',
  'OPTICAL_OBJECT_LOST_HANDLER_TOOLTIP': 'Выполняет блоки при потере объекта',

  'CREATE_CONTROLLER_BLOCK_TITLE': 'Контроллер',
  'CREATE_CONTROLLER_BLOCK_TOOLTIP': 'Создаёт объект Controller',

  'CONTROLLER_REMOTE_ENABLED_BLOCK_TITLE': 'Удалённое управление %1',
  'CONTROLLER_REMOTE_ENABLED_BLOCK_TOOLTIP': 'Включает/выключает действия контроллера из меню устройств',

  'CONTROLLER_BUTTON_PRESSING_BLOCK_TITLE': 'Кнопка %2 контроллера %1 нажата?',
  'CONTROLLER_BUTTON_PRESSING_BLOCK_TOOLTIP': 'Возвращает True, если кнопка нажата',

  'CONTROLLER_AXIS_POSITION_BLOCK_TITLE': 'Позиция оси %2 контроллера %1',
  'CONTROLLER_AXIS_POSITION_BLOCK_TOOLTIP': 'Возвращает позицию оси от -100 до 100',

  'CONTROLLER_BUTTON_PRESSED_HANDLER_TITLE': 'Когда кнопка %2 контроллера %1 нажата, выполнить %3',
  'CONTROLLER_BUTTON_PRESSED_HANDLER_TOOLTIP': 'Выполняет блоки при нажатии кнопки',

  'CONTROLLER_BUTTON_RELEASED_HANDLER_TITLE': 'Когда кнопка %2 контроллера %1 отпущена, выполнить %3',
  'CONTROLLER_BUTTON_RELEASED_HANDLER_TOOLTIP': 'Выполняет блоки при отпускании кнопки',

  'CONTROLLER_AXIS_CHANGED_HANDLER_TITLE': 'Когда ось %2 контроллера %1 изменилась, выполнить %3',
  'CONTROLLER_AXIS_CHANGED_HANDLER_TOOLTIP': 'Выполняет блоки при изменении позиции оси',

  'BUTTON_EUP': 'E ▲',
  'BUTTON_EDOWN': 'E ▼',
  'BUTTON_FUP': 'F ▲',
  'BUTTON_FDOWN': 'F ▼',
  'BUTTON_LUP': 'L ▲',
  'BUTTON_LDOWN': 'L ▼',
  'BUTTON_RUP': 'R ▲',
  'BUTTON_RDOWN': 'R ▼',
  'BUTTON_L3': 'L3 (джойстик)',
  'BUTTON_R3': 'R3 (джойстик)',

  'AXIS_A': 'A (левый верт.)',
  'AXIS_B': 'B (левый гориз.)',
  'AXIS_C': 'C (правый гориз.)',
  'AXIS_D': 'D (правый верт.)',

  'ENABLE': 'включить',
  'DISABLE': 'выключить',
};