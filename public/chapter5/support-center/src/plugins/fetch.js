let baseUrl

export default {
    install(Vue, options) {
        baseUrl = options.baseUrl

        Vue.prototype.$fetch = $fetch
    },
};

export async function $fetch(url) {
    const response = await fetch(`${baseUrl}${url}`)
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error('error')
    }
}
