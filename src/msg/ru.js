export const ruTable = {
  'CATEGORY_DISPLAY': 'Экран',
  'CATEGORY_SOUND': "Звук",
  'CATEGORY_SENSING': "Датчики",
  'CATEGORY_LOGIC': 'Логика',
  'CATEGORY_LOOPS': 'Циклы',
  'CATEGORY_MATH': 'Математика',
  'CATEGORY_TEXT': 'Текст',
  'CATEGORY_LISTS': 'Списки',
  'CATEGORY_VARIABLES': 'Переменные',
  'CATEGORY_FUNCTIONS': 'Функции',

  'PRINT_ON_BRAIN_TITLE': 'Вывести текст на экран %1 %2',
  'PRINT_ON_BRAIN_TOOLTIP': 'Выводит изображение на экран',
  
  'PRINT_NUMBER_ON_BRAIN_TITLE': 'Вывести на экран число %1',
  'PRINT_NUMBER_ON_BRAIN_TOOLTIP': 'Выводит число на экран',

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

  'WAIT_UNTIL_TITLE': 'Ждать пока %1',
  'WAIT_UNTIL_TOOLTIP': 'Программа будет остановлена пока выполняется условие',

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
};