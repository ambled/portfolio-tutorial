<script lang="ts">
    import { render } from "svelte/server";
import "../app.css";

    let {children} = $props();
</script>

{@render children()}