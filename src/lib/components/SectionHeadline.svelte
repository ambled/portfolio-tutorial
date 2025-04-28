<script lang="ts">

    import type { Snippet } from "svelte";
  
    interface AboutMeSectionProps {
      children: Snippet;
      sectionName: string;
    }
    let { children, sectionName }: AboutMeSectionProps = $props();
  </script>

<dev class="default-margin" id={sectionName}>
    <h2>{@render children()}</h2>
    <div class="underscore"></div>
</dev>