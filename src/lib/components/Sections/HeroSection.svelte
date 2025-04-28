<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>
<section class="hero-section default-margin">
  <h3>Hello! I'm Troy</h3>
  <div class="underscore mb-m"></div>
  <h1>I started writing code at a young age</h1>
  <h1 class="dark-grey"> and then learned to run systems later.</h1>
  <Button {onclick}>Let's talk</Button>
</section>
<style>
  .hero-section {
    padding-top: 60px;
  }
</style>
