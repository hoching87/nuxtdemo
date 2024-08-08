<template>
	<h1>Homepage</h1>
	<div class="articles">
		<NuxtLink
			class="item"
			v-for="item in article.articles"
			:key="item.id"
			:to="`/${item.id}`"
		>
			<div>
				<div class="item__title">{{ item.title }}</div>
				<div class="item__body">{{ item.body }}</div>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup>
const article = articlesStore();

await useAsyncData("articles", article.getArticles);
</script>

<style lang="scss">
.articles {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
	justify-content: center;
	padding-top: 1rem;

	.item {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: greenyellow;
		color: black;
		width: 15rem;
		padding: 1rem;
		border-radius: 1rem;

		&__title {
			font-weight: 900;
		}

		&:hover {
			cursor: pointer;
			transform: translate(-0.5rem, -0.5rem);
			box-shadow: 10px 10px;
		}
	}
}
</style>
