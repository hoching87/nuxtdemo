// import { defineStore } from "pinia";

export const articlesStore = defineStore('articles', () => {
    const articles = ref([])
    const article = ref()

    const getArticles = async () => {
        if (articles.value.length === 0) {
            const res = await $fetch('https://jsonplaceholder.typicode.com/posts')
            articles.value = res
            return res
        } else {
            return []
        }
    }

    const getArticle = async (id) => {
        const res = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        article.value = res
        return res
    }

    const createArticles = async (body) => {
        const res = await $fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body
        })
        articles.value.unshift(res)
        return res
    }

    return { articles, article, getArticles, getArticle, createArticles }
}) 