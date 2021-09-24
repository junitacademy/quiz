<script>
	export let name;
	import router from "page";

	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Profile from "./pages/Profile.svelte";
	import Quizzes from "./pages/Quizzes.svelte";
	import Quiz from "./pages/Quiz.svelte";
import NotFound from "./pages/NotFound.svelte";

	let page, path, params;

	router((ctx, next) => {
		console.log(ctx);
		path = ctx.path;
		params = ctx.params;
		next();
	});

	router("/", () => (page = Home));
	router("/about", () => (page = About));
	router("/profile", () => (page = Profile));
	router("/quizzes", () => (page = Quizzes));
	router("/quiz/:id", () => (page = Quiz));
	router("*",()=>(page = NotFound));

	router.start();
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Header {name} {path} />
<main class="container-fluid p-3">
	<svelte:component this={page} {params} />
</main>
<Footer />

<style>
</style>
