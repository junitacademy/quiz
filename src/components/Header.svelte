<script>
    export let name, path;
    let pages = [
        {
            href: "/",
            title: "Home",
        },
        {
            href: "/about",
            title: "About",
        },
        {
            href: "/quizzes",
            title: "Quizzes",
        },
    ];

    import { login, user } from "../firebase";

    user.subscribe((u) => {
        console.log(u);
    });
</script>

<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">{name}</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    {#each pages as page}
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                class:active={page.href === path}
                                href={page.href}>{page.title}</a
                            >
                        </li>
                    {/each}
                    {#if $user}
                        <li class="nav-link">
                            <a href="/profile" class="nav-link profile"
                                ><img
                                    class="avatar"
                                    alt={$user.displayName}
                                    src={$user.photoURL}
                                /></a
                            >
                        </li>
                    {:else}
                        <li class="nav-link">
                            <button class="nav-link" on:click={login}
                                >Login</button
                            >
                        </li>
                    {/if}
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
    .avatar {
        width: 2rem;
        margin: -1.5rem 0 -1.25rem 0;
        border-radius: 1rem;
    }
    .nav-link.profile{
        padding: 0;
    }
</style>
