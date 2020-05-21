// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // World
  worldRatio: getWorldRatio(),
  // Game
  turn: 1,
  players: [
    {
      name: 'Anne of Cleves',
      food: maxFood,
      health: maxHealth,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
    {
      name: 'William the Bald',
      food: maxFood,
      health: maxHealth,
      skipTurn: false,
      skippedTurn: false,
      hand: [],
      lastPlayedCardId: null,
      dead: false,
    },
  ],
  currentPlayerIndex: Math.round(Math.random()),
  testHand: [],
  activeOverlay: null,
  drawPile: pile,
  discardPile: {},
  canPlay: false,

  get currentPlayer() {
    return state.players[state.currentPlayerIndex]
  },

  get currentOpponentId() {
    return state.currentPlayerIndex === 0 ? 1 : 0
  },

  get currentOpponent() {
    return state.players[this.currentOpponentId]
  },

  get currentHand() {
    return state.currentPlayer.hand
  },


}
