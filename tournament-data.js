// Единый источник данных турнира. Читают: Игры.dc.html и Моя дорога.dc.html
window.TOURNAMENT = {
  fbConfig: {
    apiKey: "AIzaSyCN1Styvy48VaY8F_EmlX0LZBZhx8VRiXk",
    authDomain: "tenniscamp-85e50.firebaseapp.com",
    databaseURL: "https://tenniscamp-85e50-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tenniscamp-85e50",
    storageBucket: "tenniscamp-85e50.firebasestorage.app",
    messagingSenderId: "1060313786887",
    appId: "1:1060313786887:web:d883383ad625dab5bd18a2"
  },
  players: [
    { id: 'annaS',  name: 'Анна С',    f: true  },
    { id: 'annaV',  name: 'Анна В',    f: true  },
    { id: 'oleg',   name: 'Олег',      f: false },
    { id: 'nik',    name: 'Николай',   f: false },
    { id: 'kate',   name: 'Екатерина', f: true  },
    { id: 'alexey', name: 'Алексей',   f: false },
    { id: 'andrOr', name: 'Андрей Ор', f: false },
    { id: 'andrOs', name: 'Андрей Ос', f: false },
    { id: 'kostya', name: 'Константин', f: false },
    { id: 'olga',   name: 'Ольга',     f: true  },
    { id: 'artemS', name: 'Артем Ш',   f: false },
    { id: 'artemY', name: 'Артем Ю',   f: false },
    { id: 'ilya',   name: 'Илья',      f: false },
    { id: 'sasha',  name: 'Александра', f: true  }
  ],
  teams: [
    { id: 'A', name: 'Команда А', hue: 25,  slots: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { id: 'B', name: 'Команда Б', hue: 255, slots: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'] }
  ],
  dur: { big: 20, padel: 20, beach: 15, table: 10 },
  defaultAssign: {
    'A:A1': 'kate', 'A:A2': 'nik', 'A:A3': 'sasha', 'A:A4': 'annaS', 'A:A5': 'oleg', 'A:A6': 'andrOr', 'A:A7': 'alexey',
    'B:B1': 'annaV', 'B:B2': 'artemS', 'B:B3': 'andrOs', 'B:B4': 'artemY', 'B:B5': 'olga', 'B:B6': 'kostya', 'B:B7': 'ilya'
  },
  sports: [
    { id: 'big', name: 'Большой теннис', icon: '🎾', hue: 145, meta: '8 матчей · 10:00–14:00', matches: [
      { time: '10:00', a: ['A4', 'A1'], b: ['B4', 'B7'] },
      { time: '10:30', fmt: 'одиночка', a: ['A6'], b: ['B3'] },
      { time: '11:00', a: ['A7', 'A2'], b: ['B7', 'B6'] },
      { time: '11:30', a: ['A5', 'A3'], b: ['B5', 'B6'] },
      { time: '12:00', a: ['A7', 'A5'], b: ['B4', 'B3'] },
      { time: '12:30', a: ['A6', 'A4'], b: ['B5', 'B2'] },
      { time: '13:00', fmt: 'одиночка', a: ['A1'], b: ['B1'] },
      { time: '13:30', a: ['A2', 'A3'], b: ['B1', 'B2'] }
    ]},
    { id: 'padel', name: 'Падел', icon: '🥎', hue: 250, meta: '7 матчей · 10:00–14:00', matches: [
      { time: '10:00', a: ['A6', 'A2'], b: ['B6', 'B2'] },
      { time: '10:30', a: ['A5', 'A1'], b: ['B5', 'B7'] },
      { time: '11:00', a: ['A5', 'A4'], b: ['B4', 'B1'] },
      { time: '11:30', a: ['A7', 'A1'], b: ['B2', 'B3'] },
      { time: '12:00', a: ['A6', 'A3'], b: ['B7', 'B1'] },
      { time: '12:30', a: ['A7', 'A3'], b: ['B4', 'B6'] },
      { time: '13:00', a: ['A2', 'A4'], b: ['B5', 'B3'] }
    ]},
    { id: 'beach', name: 'Пляжный', icon: '🏖', hue: 45, meta: '7 матчей · 10:30–15:00', matches: [
      { time: '10:30', a: ['A7', 'A4'], b: ['B1', 'B6'] },
      { time: '12:30', a: ['A1', 'A2'], b: ['B3', 'B7'] },
      { time: '13:00', a: ['A6', 'A5'], b: ['B2', 'B7'] },
      { time: '13:30', a: ['A6', 'A7'], b: ['B5', 'B4'] },
      { time: '14:00', a: ['A5', 'A2'], b: ['B2', 'B4'] },
      { time: '14:20', a: ['A4', 'A3'], b: ['B1', 'B5'] },
      { time: '14:45', a: ['A1', 'A3'], b: ['B6', 'B3'] }
    ]},
    { id: 'table', name: 'Настольный', icon: '🏓', hue: 315, meta: '14 матчей · 2 стола · 10:00–14:35', matches: [
      { time: '10:00', fmt: 'Стол 1', a: ['A7'], b: ['B3'] },
      { time: '10:00', fmt: 'Стол 2', a: ['A3'], b: ['B1'] },
      { time: '10:30', fmt: 'Стол 1', a: ['A2'], b: ['B4'] },
      { time: '11:00', fmt: 'Стол 1', a: ['A3'], b: ['B5'] },
      { time: '11:00', fmt: 'Стол 2', a: ['A1'], b: ['B2'] },
      { time: '11:30', fmt: 'Стол 1', a: ['A2'], b: ['B7'] },
      { time: '11:30', fmt: 'Стол 2', a: ['A4'], b: ['B1'] },
      { time: '12:00', fmt: 'Стол 1', a: ['A4'], b: ['B5'] },
      { time: '12:00', fmt: 'Стол 2', a: ['A1'], b: ['B6'] },
      { time: '13:30', fmt: 'Стол 1', a: ['A5'], b: ['B3'] },
      { time: '13:55', fmt: 'Стол 1', a: ['A7'], b: ['B7'] },
      { time: '13:55', fmt: 'Стол 2', a: ['A6'], b: ['B6'] },
      { time: '14:25', fmt: 'Стол 1', a: ['A5'], b: ['B4'] },
      { time: '14:25', fmt: 'Стол 2', a: ['A6'], b: ['B2'] }
    ]}
  ]
};