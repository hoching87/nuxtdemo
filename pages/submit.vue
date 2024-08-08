<template>
	<Form
		class="submit"
		@submit="onSubmit"
		v-slot="{ isSubmitting }"
		:validation-schema="schema"
	>
		<h1>Submit</h1>
		<Field name="title" placeholder="Title" :rules="isRequired" />
		<ErrorMessage name="title" />
		<Field name="body" placeholder="Body" :rules="isRequired" />
		<ErrorMessage name="body" />
		<button type="submit" :disabled="isSubmitting">Submit</button>
	</Form>
</template>

<script setup>
const article = articlesStore();

const schema = {
	title: "required",
	body: "required",
};

const isRequired = (value) => {
	return value;
};

const onSubmit = async (value) => {
	await article.createArticles(value);
	navigateTo("/");
};
</script>

<style lang="scss">
.submit {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	input,
	button {
		width: 500px;
	}

	span {
		color: red;
	}
}
</style>
