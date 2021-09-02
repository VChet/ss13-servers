<script lang="ts">
  import { Wikipedia, Discord } from "@icons-pack/svelte-simple-icons";
  import type { LinkButton } from "./types/LinkButtons";

  export let data: LinkButton;
</script>

<a class="button" href={data.url} target="_blank" rel="noreferrer">
  {#if data.type === "wiki"}
    <Wikipedia size={16} />
  {:else if data.type === "discord"}
    <Discord size={16} color="#7289DA" />
  {/if}
  {data.text}
</a>
