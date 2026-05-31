<script lang="ts">
  import type { Snippet } from "svelte";
  import {
    IconAtom,
    IconBook2,
    IconBrandDiscordFilled,
    IconBrandSteam,
    IconBrandWikipedia,
    IconMap,
    IconMusic
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
  {:else if icon === "byond"}<IconAtom />
  {:else if icon === "discord"}<IconBrandDiscordFilled />
  {:else if icon === "map"}<IconMap />
  {:else if icon === "music"}<IconMusic />
  {:else if icon === "steam"}<IconBrandSteam />
  {:else if icon === "wiki"}<IconBrandWikipedia />
  {/if}
  {@render children()}
</a>
