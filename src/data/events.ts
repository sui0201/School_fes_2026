export type Event = {
  name: string
  description: string
  location: string
  ticketRequired: boolean
}

export type Venue = {
  name: string
  mapNumber: string
  events: Event[]
}

export const venues: Venue[] = [
  {
    name: 'PC室',
    mapNumber: '③④',
    events: [
      {
        name: 'Tinkercad講座',
        description: '3DCADを使ってネームキーホルダーを制作',
        location: 'PC室',
        ticketRequired: true,
      },
      {
        name: '高1企画',
        description: 'ロボカップやWeb研などの展示',
        location: 'PC室',
        ticketRequired: false,
      },
      {
        name: 'LEGO製作体験',
        description: 'LEGOでロボットを作って動かそう',
        location: 'PC室',
        ticketRequired: true,
      },
      {
        name: 'Dengiken Play!',
        description: '部員が制作したゲームを体験',
        location: 'PC室',
        ticketRequired: false,
      },
      {
        name: '作曲展示',
        description: '部員が制作した楽曲を展示',
        location: 'PC室',
        ticketRequired: false,
      },
      {
        name: 'Vラボ',
        description: '自分で描いたイラストを動かしてみよう',
        location: 'PC室',
        ticketRequired: false,
      },
      {
        name: 'Visual Physics',
        description: 'Pythonで表現した物理現象を展示',
        location: 'PC室',
        ticketRequired: false,
      },
      {
        name: 'LEGOクレーン',
        description: 'LEGOクレーンでボールをキャッチ',
        location: 'PC室',
        ticketRequired: false,
      },
    ],
  },

  {
    name: 'ロボット技術室',
    mapNumber: '②',
    events: [
      {
        name: 'ドローン操縦体験',
        description: 'ドローンでコースを走破しよう',
        location: 'ロボット技術室',
        ticketRequired: true,
      },
      {
        name: 'リニアカーリング',
        description: '自作の電磁石と回路を使ったミニゲーム',
        location: 'ロボット技術室',
        ticketRequired: false,
      },
      {
        name: 'CPU製作',
        description: '自作CPUやマイコンを使った体験',
        location: 'ロボット技術室',
        ticketRequired: false,
      },
      {
        name: '鳥取ローバーチャレンジ',
        description: '大会の機体や基板などを展示',
        location: 'ロボット技術室',
        ticketRequired: false,
      },
      {
        name: 'ロボカップサッカー',
        description: 'ロボットでサッカーをする様子を展示',
        location: 'ロボット技術室',
        ticketRequired: false,
      },
      {
        name: 'ロボカップレスキュー',
        description: '大会で使用した機体などを展示',
        location: 'ロボット技術室',
        ticketRequired: false,
      },
    ],
  },

  {
    name: 'グラウンド',
    mapNumber: '①',
    events: [
      {
        name: 'Dengiken-MR',
        description: 'グラウンドを駆け回るMRゲーム',
        location: 'グラウンド',
        ticketRequired: false,
      },
      {
        name: 'VR Cat of Cats',
        description: 'BlenderとUnityを使用したゲーム制作',
        location: 'グラウンド',
        ticketRequired: false,
      },
    ],
  },

  {
    name: '5F一般教室',
    mapNumber: '⑤⑥⑦',
    events: [
      {
        name: '高2企画',
        description: 'バーチャル空間を歩いて探検しよう',
        location: '5F一般教室',
        ticketRequired: false,
      },
      {
        name: '4Dシアター',
        description: '未知の物質を探す4D体験',
        location: '5F一般教室',
        ticketRequired: false,
      },
      {
        name: 'ロボマス',
        description: 'ロボマスを操作して対戦しよう',
        location: '5F一般教室',
        ticketRequired: false,
      },
    ],
  },
]
