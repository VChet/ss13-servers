<script lang="ts">
  import ExternalLink from "./ExternalLink.svelte";
  import Server from "./Server.svelte";
  import { onyxLinks, onyxServers } from "./servers/onyx";
  import { ss220Links, ss220Servers } from "./servers/ss220";
  import { tauLinks, tauServers } from "./servers/tauCeti";
  import type { Link } from "./types/Link";

  const infoLinks: Array<Link> = [
    { text: "📝 Paperwork Simulator", url: "http://ps.ss13.net" },
    { text: "🗺️ WebMap", url: "https://affectedarc07.github.io/SS13WebMap" },
  ];
</script>

<div class="stars" />
<main class="container">
  <header class="header">
    <h1>Space Station 13 RU Servers</h1>
    <ExternalLink href="https://www.byond.com/download/">Get BYOND</ExternalLink>
  </header>
  <section class="community">
    <h2>SS220</h2>
    {#each ss220Links as link}
      <ExternalLink href={link.url} icon={link.icon}>{link.text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each ss220Servers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Tau Ceti</h2>
    {#each tauLinks as link}
      <ExternalLink href={link.url} icon={link.icon}>{link.text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each tauServers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="community">
    <h2>Chaotic Onyx</h2>
    {#each onyxLinks as link}
      <ExternalLink href={link.url} icon={link.icon}>{link.text}</ExternalLink>
    {/each}
    <ul class="community__servers">
      {#each onyxServers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="info">
    {#each infoLinks as link}
      <ExternalLink href={link.url} icon={link.icon}>{link.text}</ExternalLink>
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
    justify-content: space-between;
    align-items: center;
  }
  .community {
    @include card;
    text-align: center;
    h2 {
      margin-top: 0;
    }
    &__servers {
      margin: 20px 0;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  .info {
    @include card;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>
