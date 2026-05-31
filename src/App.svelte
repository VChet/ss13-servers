<script lang="ts">
  import { ss220Links, ss220Servers } from "@/servers/ss220";
  import { tauLinks, tauServers } from "@/servers/tauCeti";
  import Community from "./components/Community.svelte";
  import ExternalLink from "./components/ExternalLink.svelte";

  const updateTimestamp = import.meta.env.VITE_SERVERS_UPDATE;
  const date = new Date(updateTimestamp).toLocaleDateString("ru-RU", { day: "numeric", month: "numeric", year: "numeric" });
</script>

<div class="stars"></div>
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://webmap.affectedarc07.co.uk" icon="map">WebMap</ExternalLink>
    <ExternalLink href="https://www.byond.com/download" icon="byond">BYOND</ExternalLink>
    <ExternalLink href="https://store.steampowered.com/app/1255460/Space_Station_14" icon="steam">SS14</ExternalLink>
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
</main>

<style>
.header {
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  gap: 10px;
  align-items: center;
  @media (width <= 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
