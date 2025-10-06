<script lang="ts">
  import type { Snippet } from "svelte";
  import {
    IconBook2,
    IconBrandDiscordFilled,
    IconBrandWikipedia,
    IconMap,
    IconMusic,
    IconNotes
  } from "@tabler/icons-svelte";
  import type { LinkIcon } from "@/types/link";

  interface Props {
    href: string
    children: Snippet
    icon?: LinkIcon | null
  }

  const { href, icon = null, children }: Props = $props();
</script>

<a class="button" {href} target="_blank" rel="noopener noreferrer">
  {#if icon === "rules"}<IconBook2 />
  {:else if icon === "map"}<IconMap />
  {:else if icon === "document"}<IconNotes />
  {:else if icon === "music"}<IconMusic />
  {:else if icon === "wiki"}<IconBrandWikipedia />
  {:else if icon === "discord"}<IconBrandDiscordFilled />
  {/if}
  {@render children()}
</a>
