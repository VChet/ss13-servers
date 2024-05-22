<script lang="ts">
  import ExternalLink from "@/components/ExternalLink.svelte";
  import Server from "@/components/Server.svelte";
  import { onyxLinks, onyxServers } from "@/servers/onyx";
  import { ss220Links, ss220Servers } from "@/servers/ss220";
  import { tauLinks, tauServers } from "@/servers/tauCeti";
  import type { Link } from "@/types/Link";

  const infoLinks: Link[] = [
    { text: "Paperwork Simulator", icon: "document", url: "http://ps.ss13.net" },
    { text: "WebMap", icon: "map", url: "https://affectedarc07.github.io/SS13WebMap" }
  ];
</script>

<div class="stars" />
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://www.byond.com/download/">BYOND</ExternalLink>
    <ExternalLink href="https://store.steampowered.com/app/1255460/Space_Station_14/">SS14</ExternalLink>
  </header>
  <section class="community">
    <h2>SS220</h2>
    <ul class="community__buttons">
      {#each ss220Links as { url, icon, text }}
        <li>
          <ExternalLink href={url} {icon}>{text}</ExternalLink>
        </li>
      {/each}
    </ul>
    <ul class="community__servers">
      {#each ss220Servers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Tau Ceti</h2>
    <ul class="community__buttons">
      {#each tauLinks as { url, icon, text }}
        <li>
          <ExternalLink href={url} {icon}>{text}</ExternalLink>
        </li>
      {/each}
    </ul>
    <ul class="community__servers">
      {#each tauServers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Chaotic Onyx</h2>
    <ul class="community__buttons">
      {#each onyxLinks as { url, icon, text }}
        <li>
          <ExternalLink href={url} {icon}>{text}</ExternalLink>
        </li>
      {/each}
    </ul>
    <ul class="community__servers">
      {#each onyxServers as data}
        <Server {data} />
      {/each}
    </ul>
  </section>
  <section class="info">
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
  @mixin card {
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
  .community {
    @include card;

    text-align: center;

    @media (width <= 425px) {
      padding: 10px;
    }
    h2 {
      margin-top: 0;
    }
    &__buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }
    &__servers {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      margin: 20px 0;
    }
  }
  .info {
    @include card;

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
