<script>
	import { page } from "$app/stores";
	import logo from "./Horizan-animation.svg";
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
		integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
		crossorigin="anonymous"
	/>
	<link
		rel="stylesheet"
		href="/chain-1.0.0/assets/css/templatemo-chain-app-dev.css"
	/>
</svelte:head>

<header
	class="header-area header-sticky wow slideInDown"
	data-wow-duration="0.75s"
	data-wow-delay="0s"
>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="main-nav">
					<a href="/" class="logo">
						<img src={logo} alt="Horizan App" />
					</a>
					<span
						class="nav"
						style="display: block;"
						aria-expanded="false"
						aria-label="menu"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</span>
					<!-- ***** Menu ***** -->
					<ul class="nav">
						<li class="scroll-to-section">
						  <a class="button" class:active={$page.path === '/'} sveltekit:prefetch href="/"><i class="fas fa-home"/>Home</a>
						</li>
						<li class="scroll-to-section">
						  <a class="button" class:active={$page.path === '/about'} sveltekit:prefetch href="/about">About</a>
						</li>
						<li class="scroll-to-section">
						  <a class="button" class:active={$page.path === '/todos'} sveltekit:prefetch href="todos">Todos</a>
						</li>
						<li>
						  <div class="gradient-button">
							  <a class="buton is-primary-is-light" href="/"> <i class="fa fa-sign-out" aria-hidden="true"></i> Login <i class="fas fa-sign-in-alt"/></a>
						  </div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

<style>
	img {
		width: 165px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
