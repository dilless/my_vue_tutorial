<template>
    <main class="login">
        <h1>Please login to continue</h1>
        <SamrtForm
            class="form"
            :title="title"
            :operation="operation"
            :valid="valid">
            <!-- todo -->
        </SamrtForm>

    </main>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                mode: 'login',
                username: '',
                password: '',
                password2: '',
                email: '',
            }
        },
        computed: {
            title() {
                switch (this.mode) {
                    case 'login':
                        return 'Login'
                    case 'signup':
                        return 'Create a new count'
                }
                return ''
            },
            retypePasswordError() {
                return this.password2 && this.password !== this.password2
            },
            signupValid() {
                return this.password2 && this.email && !this.retypePasswordError
            },
            valid() {
                return this.username && this.password && (this.mode !== 'signup' || this.signupValid)
            }
        },
        methods: {
            async operation() {
                await this[this.mode]()
            },
            async login() {
                // todo
            },
            async signup() {
                // todo
            },
        }
    }
</script>

<style scoped>

</style>
