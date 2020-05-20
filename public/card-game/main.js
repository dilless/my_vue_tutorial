// eslint-disable-next-line no-undef
new Vue({
    name: 'game',
    el: '#app',

    template: `
        <div id="#app" @click="">
            <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
            <transition name="hand">
                <hand v-if="!activeOverlay" :cards="testHand" @card-play="testPlayCard"/>
            </transition>
            <overlay>
                Hello World!
            </overlay>
        </div>
    `,

    // eslint-disable-next-line no-undef
    data: state,

    computed: {
        testCard() {
            return cards.archers
        }
    },

    methods: {
        handlePlay() {
            console.log('You played a card!')
        },
        testDrawCard() {
            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)]
            return {
                uid: cardUid++,
                id: randomId,
                def: cards[randomId]
            }
        },
        createTestHand() {
            const cards = []
            const ids = Object.keys(cards)

            for (let i = 0; i < 5; i++) {
                cards.push(this.testDrawCard())
            }
            return cards
        },
        testPlayCard(card) {
            const index = this.testHand.indexOf(card)
            this.testHand.splice(index, 1)
        }
    },

    created() {
        this.testHand = this.createTestHand()
    },
})

window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
