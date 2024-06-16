<script lang="ts">
  import Community from "./Community.svelte";
  import ExternalLink from "./ExternalLink.svelte";
  import { onyxLinks, onyxServers } from "@/servers/onyx";
  import { ss220Links, ss220Servers } from "@/servers/ss220";
  import { tauLinks, tauServers } from "@/servers/tauCeti";
  import type { Link } from "@/types/link";

  const infoLinks: Link[] = [
    { text: "Paperwork Simulator", icon: "document", url: "http://ps.ss13.net" },
    { text: "WebMap", icon: "map", url: "https://webmap.affectedarc07.co.uk" }
  ];
</script>

<div class="stars" />
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://www.byond.com/download/">BYOND</ExternalLink>
    <ExternalLink href="https://store.steampowered.com/app/1255460/Space_Station_14/">SS14</ExternalLink>
  </header>
  <Community
    name="SS220 | WyccStation"
    description="Banda & Streamers project, 756 voices"
    links={ss220Links}
    servers={ss220Servers}
  />
  <Community
    name="Tau Ceti"
    links={tauLinks}
    servers={tauServers}
  />
  <Community
    name="Chaotic Onyx"
    links={onyxLinks}
    servers={onyxServers}
  />
  <section class="card info">
    <ul class="info__buttons">
      {#each infoLinks as { url, icon, text }}
        <li>
          <ExternalLink href={url} {icon}>{text}</ExternalLink>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style lang="scss">
  :global(.card) {
    padding: 20px;
    margin: 15px 0;
    background-color: #16161ce6;
    border: 1px solid #31313b;
    border-radius: 4px;
  }
  .header {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;

    @media (width <= 425px) {
      grid-template-columns: 1fr;
    }
  }
  .info {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    &__buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }
  }
</style>
