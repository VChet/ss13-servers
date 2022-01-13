<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Server from "./Server.svelte";
  import { onyxButtons, onyxServers } from "./servers/onyx";
  import { ss220Buttons, ss220Servers } from "./servers/ss220";
  import { fetchTauServer, tauButtons, tauServers } from "./servers/tauCeti";
  import type { LinkButton } from "./types/LinkButtons";

  async function fetchTauServers() {
    const api = [
      { name: "Tau Ceti Classic", url: "https://taucetistation.org/server/tauceti/json" },
      { name: "Tau Ceti Classic II", url: "https://taucetistation.org/server/tauceti2/json" },
      { name: "Tau Ceti Classic III", url: "https://taucetistation.org/server/tauceti3/json" },
    ];
    try {
      await Promise.all(
        api.map((server) =>
          fetchTauServer(server.url).then((data) => {
            const index = tauServers.findIndex((ts) => ts.name === server.name);
            tauServers[index] = { ...tauServers[index], ...data };
          })
        )
      );
    } catch ({ response }) {
      console.error(response);
    }
  }

  onMount(() => {
    fetchTauServers();
    setInterval(fetchTauServers, 10 * 60 * 1000); // every 10 minutes
  });

  const infoButtons: Array<LinkButton> = [
    { text: "📝 Paperwork Simulator", url: "http://ps.ss13.net" },
    { text: "🗺️ WebMap", url: "https://affectedarc07.github.io/SS13WebMap" },
  ];
</script>

<div class="stars" />
<main class="container">
  <h1>Space Station 13 RU Servers</h1>
  <section class="servers">
    <h2>SS220</h2>
    {#each ss220Buttons as button}
      <Button data={button} />
    {/each}
    <ul>
      {#each ss220Servers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="servers">
    <h2>Tau Ceti</h2>
    {#each tauButtons as button}
      <Button data={button} />
    {/each}
    <button class="button" on:click={fetchTauServers}>🔄</button>
    <ul>
      {#each tauServers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="servers">
    <h2>Chaotic Onyx</h2>
    {#each onyxButtons as button}
      <Button data={button} />
    {/each}
    <ul>
      {#each onyxServers as server}
        <Server data={server} />
      {/each}
    </ul>
  </section>
  <section class="info">
    {#each infoButtons as button}
      <Button data={button} />
    {/each}
  </section>
</main>

<style lang="scss">
  @mixin block {
    margin: 15px 0;
    background-color: #16161ce6;
    border: 1px solid #31313b;
    border-radius: 4px;
    padding: 20px;
  }
  .servers {
    @include block;
    text-align: center;
    h2 {
      margin-top: 0;
    }
    ul {
      margin: 20px 0;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  .info {
    @include block;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
</style>
