<script>
  import "../app.css";
  import Header from "../lib/header/Header.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<section>
<Nav />
	<slot />
</section>
