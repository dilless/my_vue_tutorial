<template>
    <div class="row">
        <input class="input"
               :class="inputClass"
               :name="name"
               :type="type"
               :value.prop="text"
               :placeholder="placeholder"
               @input="update">
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props: {
            name: {
                type: String,
            },
            type: {
                type: String,
                default: 'text',
            },
            text: {
                required: true,
            },
            placeholder: {
                type: String,
            },
            invalid: {
                type: Boolean,
                default: false,
            },
        },
        model: {
            prop: 'text',
            event: 'update'
        },
        computed: {
            inputClass() {
                return {
                    'invalid': this.invalid
                }
            },
        },
        methods: {
            update(event) {
                this.$emit('update', event.currentTarget.value)
            },
        },
    }
</script>

<style scoped>

</style>
