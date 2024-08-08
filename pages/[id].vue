<template>
	<div class="detail">
		<NuxtLink class="homepage" to="/">< Back</NuxtLink>

		<div class="detail__content">
			<h1>{{ article.article.title }}</h1>
			<span>{{ article.article.body }}</span>
		</div>
	</div>
</template>

<script setup>
const route = useRoute();
const article = articlesStore();

const { data, status } = await useAsyncData("articles", () =>
	article.getArticle(route.params.id)
);
</script>

<style lang="scss">
.detail {
	padding: 2rem;
	background-color: lightgray;
	border-radius: 1rem;
	text-align: left;

	&__content {
		text-align: center;
	}
}
</style>
