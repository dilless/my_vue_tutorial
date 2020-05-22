<template>
    <main class="faq">
        <h1>Frequently Asked Questions</h1>
        <loading v-if="remoteDataBusy"/>
        <div class="error" v-if="hasRemoteErrors">
            Can't load the questions
        </div>
        <section class="list">
            <article v-for="question in questionList" :key="'faq-list-' + question.title">
                <h2 v-html="question.title"></h2>
                <p v-html="question.content"></p>
            </article>
        </section>
    </main>
</template>

<script>
    import RemoteData from "../mixins/RemoteData";

    export default {
        mixins: [
            RemoteData({
                questionList: '/questions',
            }),
        ],
        name: "FAQ",
    }
</script>

<style scoped>

</style>
