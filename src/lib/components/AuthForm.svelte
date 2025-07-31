<script lang="ts">
	import Button from './Button.svelte';
	interface ComponentProps {
		isRegistration: boolean;
	}

	let { isRegistration }: ComponentProps = $props();
</script>

<div class="default-margin auth-container">
	<h1 class="mb-l">{isRegistration ? 'Register' : 'Login'}</h1>
	<div class="form-and-social-login">
		<form class="auth-form">
			{#if isRegistration}
				<input placeholder="Name" type="text" name="name" />
			{/if}
			<input placeholder="Email" type="email" name="email" />
			<input placeholder="Password" type="password" name="password" />
			{#if isRegistration}
				<input placeholder="Confirm Password" type="password" name="confirmPassword" />
			{/if}
			<Button type="submit">{isRegistration ? 'Register' : 'Login'}</Button>
			{#if !isRegistration}
				<p class="auth-hint mt-s">Don't have an account? <a href="/register">Register</a></p>
			{:else}
				<p class="auth-hint mt-s">Already have an account? <a href="/login">Login</a></p>
			{/if}
		</form>
		<div class="social-login"></div>
	</div>
</div>

<style>
	.auth-container {
		margin-top: 80px;
	}
	.form-and-social-login {
		display: flex;
	}
	.auth-form {
		display: flex;
		flex-direction: column;
		align-items: start;
		border-right: 1px solid gray;
		padding-right: 80px;
		width: 40%;
	}
	.auth-form input {
		width: 100%;
		margin-bottom: 30px;
	}

	.auth-form input:last-of-type {
		margin-bottom: 30px;
	}

	.auth-hint {
		font-size: 16px;
		color: gray;
	}

	.auth-error {
		background-color: red;
		color: white;
		font-size: 10px;
		border-radius: 12px;
		padding: 12px;
		width: 100%;
		margin-bottom: 8px;
	}

	.auth-error:last-of-type {
		margin-bottom: 16px;
	}

	.social-login {
		padding-left: 80px;
		width: 60%;
	}
</style>
