<script lang="ts">
  import {
    IconBook2,
    IconBrandDiscordFilled,
    IconBrandWikipedia,
    IconMap,
    IconMusic,
    IconNotes
  } from "@tabler/icons-svelte";
  import type { LinkIcon } from "@/types/link";

  export let href: string;
  export let icon: LinkIcon | null = null;
</script>

<a class="button" {href} target="_blank" rel="noopener noreferrer">
  {#if icon === "rules"}<IconBook2 />
  {:else if icon === "map"}<IconMap />
  {:else if icon === "document"}<IconNotes />
  {:else if icon === "music"}<IconMusic />
  {:else if icon === "wiki"}<IconBrandWikipedia />
  {:else if icon === "discord"}<IconBrandDiscordFilled />
  {/if}
  <slot />
</a>
