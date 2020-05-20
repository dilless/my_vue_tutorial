Vue.component('castle', {
    template: `
        <div class="castle" :class="'player-' + index">
            <img :src="'svg/castle' + index + '.svg'" alt="" class="building">
            <img :src="'svg/ground' + index + '.svg'" alt="" class="ground">
            <castle-banners :player="player"/>
        </div>
    `,

    props: ['player', 'index']
})


Vue.component('castle-banners', {
    template: `
        <div class="banners">
            <img class="food-icon" src="svg/food-icon.svg" alt="">
            <bubble type="food" :value="player.food" :ratio="foodRatio"/>
            <banner-bar class="food-bar" color="#288339" :ratio="foodRatio"/>
            
            <img src="svg/health-icon.svg" alt="" class="health-icon">
            <bubble type="health" :value="player.health" :ratio="healthRation"/>
            <banner-bar class="health-bar" color="#9b2e2e" :ratio="healthRation"/>
        </div>
    `,

    props: ['player'],

    computed: {
        foodRatio() {
            return this.player.food / maxFood
        },
        healthRation() {
            return this.player.health / maxHealth
        }
    }
})

Vue.component('bubble', {
    template: `
        <div class="stat-bubble" :class="type + '-bubble'" :style="bubbleStyle">
            <img :src="'svg/' + type + '-bubble.svg'" alt="">
            <div class="counter">{{ value }}</div>
        </div>
    `,

    props: ['type', 'value', 'ratio'],

    computed: {
        bubbleStyle() {
            return {
                top: (this.ratio * 220 + 40) * state.worldRatio + 'px',
            }
        },
    }
})

Vue.component('banner-bar', {
    template: '#banner',

    props: ['color', 'ratio'],

    data() {
        return {
            height: 0,
        }
    },

    computed: {
        targetHeight() {
            return 220 * this.ratio + 40
        },
    },

    created() {
        this.height = this.targetHeight
    },

    watch: {
        targetHeight(newValue, oldValue) {
            const vm = this
            new TWEEN.Tween({value: oldValue})
                .easing(TWEEN.Easing.Cubic.InOut)
                .to({value: newValue}, 500)
                .onUpdate(function () {
                    vm.height = this.value.toFixed(0)
                })
                .start()
        },
    },
})

const cloudAnimationDurations = {
    min: 10000,
    max: 50000,
}

Vue.component('cloud', {
    template: `
        <div class="cloud" :class="'cloud' + type" :style="style">
            <img :src="'svg/cloud' + type + '.svg'" alt="" @load="initPosition">
        </div>
    `,

    props: ['type'],

    data() {
        return {
            style: {
                transform: 'none',
                zIndex:0,
            },
        }
    },

    methods: {
        setPosition(left, top) {
            this.style.transform = `translate(${left}px, ${top}px)`
        },
        initPosition() {
            const width = this.$el.clientWidth
            this.setPosition(-width, 0)
        }
    },
})
