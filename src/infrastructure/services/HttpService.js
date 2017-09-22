import Vue from 'vue'

/**
 * @param path
 * @param data
 * @param cb
 * @param errorCb
 */
const get = (path, data, cb, errorCb) => {
    Vue.axios.get(path, {params: data})
        .then((response) => {
            cb(response)
        }).catch(error => {
            errorCb(error)
    })
}

/**
 * @param path
 * @param cb
 * @param errorCb
 */
const remove = (path, cb, errorCb) => {
    Vue.axios.delete(path)
        .then((response) => {
            cb(response)
        }).catch(error => {
        errorCb(error)
    })
}

/**
 * @param path
 * @param data
 * @param cb
 * @param errorCb
 */
const post = (path, data, cb, errorCb) => {
    Vue.axios.post(path, data)
        .then((response) => {
            cb(response)
        }).catch(error => {
            errorCb(error)
    })
}

/**
 * @param path
 * @param data
 * @param cb
 * @param errorCb
 */
const put = (path, data, cb, errorCb) => {
    Vue.axios.post(path, data)
        .then((response) => {
            cb(response)
        }).catch(error => {
            errorCb(error)
    })
}

export {
    get,
    remove,
    post,
    put
}
