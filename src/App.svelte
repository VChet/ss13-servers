<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";

  import Server from "./Server.svelte";
  import type { ServerModel } from "./types/Server";

  let tauServers: Array<ServerModel> = [
    {
      name: "Tau Ceti Classic",
      url: "byond://game.taucetistation.org:2506",
    },
    {
      name: "Tau Ceti Classic II",
      url: "byond://game.taucetistation.org:2507",
    },
    {
      name: "Tau Ceti Classic III",
      url: "byond://game.taucetistation.org:2508",
    },
  ];
  let ss220Servers: Array<ServerModel> = [
    {
      name: "Paradise",
      url: "byond://rv666.asuscomm.com:7721",
    },
    {
      name: "Тестовый",
      url: "byond://rv666.asuscomm.com:7720",
    },
  ];
  let onyxServers: Array<ServerModel> = [
    {
      name: "Chaotic Onyx",
      description:
        "Классический дух оторванной от остального человечества станции, на которой вечно что-то идет не так и никто не знает, что с этим делать.",
      url: "byond://play.ss13.ru:2506",
    },
    {
      name: "Eos Orbital Station",
      description:
        "Настоящий ролевой сервер про чрезвычайные ситуации с упором в отыгрыш интересных и запоминающихся персонажей.",
      url: "byond://play.ss13.ru:2507",
    },
    {
      name: "Crimson Dragon",
      description:
        "Квинтэссенция весёлого и динамичного безумия, заключенная внутри изолированной космической станции вместе с её параноидальным и зачастую крайне некомпетентным персоналом. Что может пойти не так?",
      url: "byond://play.ss13.ru:2508",
    },
  ];

  async function fetchTauServers() {
    try {
      await axios
        .get("https://taucetistation.org/server/tauceti/json")
        .then(({ data }) => {
          const index = tauServers.findIndex(
            (server) => server.name === "Tau Ceti Classic"
          );
          tauServers[index] = {
            error: data.error,
            name: "Tau Ceti Classic",
            map: data.map_name,
            mode: data.mode,
            players: data.players,
            duration: data.roundduration,
            url: "byond://game.taucetistation.org:2506",
          };
        });
      await axios
        .get("https://taucetistation.org/server/tauceti2/json")
        .then(({ data }) => {
          const index = tauServers.findIndex(
            (server) => server.name === "Tau Ceti Classic II"
          );
          tauServers[index] = {
            error: data.error,
            name: "Tau Ceti Classic II",
            map: data.map_name,
            mode: data.mode,
            players: data.players,
            duration: data.roundduration,
            url: "byond://game.taucetistation.org:2507",
          };
        });
      await axios
        .get("https://taucetistation.org/server/tauceti3/json")
        .then(({ data }) => {
          const index = tauServers.findIndex(
            (server) => server.name === "Tau Ceti Classic III"
          );
          tauServers[index] = {
            error: data.error,
            name: "Tau Ceti Classic III",
            map: data.map_name,
            mode: data.mode,
            players: data.players,
            duration: data.roundduration,
            url: "byond://game.taucetistation.org:2508",
          };
        });
    } catch ({ response }) {
      console.error(response);
    }
  }

  onMount(() => {
    fetchTauServers();
    setInterval(() => {
      fetchTauServers();
    }, 10 * 60 * 1000); // every 10 minutes
  });
</script>

<div class="stars" />
<main class="container">
  <section class="servers">
    <div class="servers__header">
      <h2>Tau Ceti</h2>
      <a
        class="button"
        href="https://discord.gg/YCWRjkb"
        target="_blank"
        rel="noreferrer">Discord</a>
      <a
        class="button"
        href="https://rules.taucetistation.org/"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a
        class="button"
        href="https://wiki.taucetistation.org"
        target="_blank"
        rel="noreferrer">Вики</a>
      <a
        class="button"
        href="https://map.taucetistation.org"
        target="_blank"
        rel="noreferrer">Карта</a>
      <a
        class="button"
        href="https://wiki.taucetistation.org/Guides"
        target="_blank"
        rel="noreferrer">Гайды</a>
      <a
        class="button"
        href="https://wiki.taucetistation.org/Music"
        target="_blank"
        rel="noreferrer">Музыка</a>
      <button class="button" on:click={fetchTauServers}>🔄</button>
    </div>
    {#each tauServers as server}
      <Server data={server} />
    {/each}
  </section>
  <section class="servers">
    <div class="servers__header">
      <h2>SS220</h2>
      <a
        class="button"
        href="http://rv666.asuscomm.com/wiki/index.php/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a
        class="button"
        href="http://rv666.asuscomm.com/wiki"
        target="_blank"
        rel="noreferrer">Вики</a>
      <a
        class="button"
        href="http://rv666.asuscomm.com/wiki/index.php/%D0%9B%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D0%B8"
        target="_blank"
        rel="noreferrer">Карта</a>
    </div>
    {#each ss220Servers as server}
      <Server data={server} />
    {/each}
  </section>
  <section class="servers">
    <div class="servers__header">
      <h2>Chaotic Onyx</h2>
      <a
        class="button"
        href="https://discord.gg/4JFNdbk"
        target="_blank"
        rel="noreferrer">Discord</a>
      <a
        class="button"
        href="https://wiki.ss13.ru/index.php?title=Onyx_Rules"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a
        class="button"
        href="https://wiki.ss13.ru"
        target="_blank"
        rel="noreferrer">Вики</a>
    </div>
    {#each onyxServers as server}
      <Server data={server} />
    {/each}
  </section>
  <section class="info">
    <a
      class="button"
      href="http://ps.ss13.net"
      target="_blank"
      rel="noreferrer">Paperwork Simulator</a>
    <a
      class="button"
      href="https://tgstation13.org/wiki/"
      target="_blank"
      rel="noreferrer">Вики /tg/ (EN)</a>
  </section>
</main>

<style>
  .servers,
  .info {
    display: flex;
    flex-flow: row wrap;
    margin: 15px 0;
    background-color: #16161ce6;
    border: 1px solid #31313b;
    border-radius: 4px;
  }
  .info {
    padding: 20px;
    justify-content: center;
  }
  .servers__header {
    flex-basis: 100%;
    text-align: center;
  }
</style>
