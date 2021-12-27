<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/footer.svelte";
  import "../app.css";
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";

  if (browser) {
    $session = supabase.auth.session();
    // $session ? goto("/") : goto("/signup");
    supabase.auth.onAuthStateChange((event, sesh) => {
      $session = sesh;
    });
  }
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer> -->
<style>
</style>
