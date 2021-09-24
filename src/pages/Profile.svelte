<script>
    import { login, user } from "../firebase";
</script>
{#if $user}
<p>Welcome {$user.displayName}</p>
{:else}
<button on:click="{login}">Login</button>
{/if}