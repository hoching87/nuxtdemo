<template>
	<header class="header">
		<h2>Demo</h2>
		<div class="header__links">
			<NuxtLink to="/submit" v-if="$route.path !== '/submit'">
				Create
			</NuxtLink>
			<NuxtLink to="/" v-if="$route.path !== '/'">HomePage</NuxtLink>
		</div>
	</header>
	<div class="body">
		<slot />
	</div>
</template>

<style lang="scss">
.header {
	display: flex;
	padding: 1rem;
	align-items: center;
	background-color: lightblue;

	&__links {
		display: flex;
		gap: 1rem;
		margin-left: auto;
	}
}

.body {
	padding: 1rem;
	text-align: center;
}
</style>
