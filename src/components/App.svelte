<script lang="ts">
  import ExternalLink from "@/components/ExternalLink.svelte";
  import Server from "@/components/Server.svelte";
  import { onyxLinks, onyxServers } from "@/servers/onyx";
  import { ss220Links, ss220Servers } from "@/servers/ss220";
  import { tauLinks, tauServers } from "@/servers/tauCeti";
  import type { Link } from "@/types/Link";

  const infoLinks: Array<Link> = [
    { text: "📝 Paperwork Simulator", url: "http://ps.ss13.net" },
    { text: "🗺️ WebMap", url: "https://affectedarc07.github.io/SS13WebMap" },
  ];
</script>

<div class="stars" />
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://www.byond.com/download/">Загрузить BYOND</ExternalLink>
  </header>
  <section class="community">
    <h2>SS220</h2>
    {#each ss220Links as { url, icon, text }}
      <ExternalLink href={url} {icon}>{text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each ss220Servers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Tau Ceti</h2>
    {#each tauLinks as { url, icon, text }}
      <ExternalLink href={url} {icon}>{text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each tauServers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Chaotic Onyx</h2>
    {#each onyxLinks as { url, icon, text }}
      <ExternalLink href={url} {icon}>{text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each onyxServers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="info">
    {#each infoLinks as { url, icon, text }}
      <ExternalLink href={url} {icon}>{text}</ExternalLink>
    {/each}
  </section>
</main>

<style lang="scss">
  @mixin card {
    margin: 15px 0;
    background-color: #16161ce6;
    border: 1px solid #31313b;
    border-radius: 4px;
    padding: 20px;
  }
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .community {
    @include card;
    text-align: center;
    @media (max-width: 425px) {
      padding: 10px;
    }
    h2 {
      margin-top: 0;
    }
    &__servers {
      margin: 20px 0;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
  .info {
    @include card;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>
