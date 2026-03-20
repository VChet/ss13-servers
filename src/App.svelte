<script lang="ts">
  import { ss220Links, ss220Servers } from "@/servers/ss220";
  import { tauLinks, tauServers } from "@/servers/tauCeti";
  import type { Link } from "@/types/link";
  import Community from "./components/Community.svelte";
  import ExternalLink from "./components/ExternalLink.svelte";

  const infoLinks: Link[] = [
    { text: "Paperwork Simulator", icon: "document", url: "http://ps.ss13.net" },
    { text: "WebMap", icon: "map", url: "https://webmap.affectedarc07.co.uk" }
  ];

  const updateTimestamp = import.meta.env.VITE_SERVERS_UPDATE;
  const date = new Date(updateTimestamp).toLocaleDateString("ru-RU", { day: "numeric", month: "numeric", year: "numeric" });
</script>

<div class="stars"></div>
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://www.byond.com/download/">BYOND</ExternalLink>
    <ExternalLink href="https://store.steampowered.com/app/1255460/Space_Station_14/">SS14</ExternalLink>
  </header>
  <div>Last update: {date}</div>
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
