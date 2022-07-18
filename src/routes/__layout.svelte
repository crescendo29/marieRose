<script>
  import "../app.css";
  import Header from "../lib/header/Header.svelte";
</script>

<section class="bg-[url('images/gold.jpg')] bg-no-repeat bg-cover">
  <Header />
	<slot />
</section>