<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";

  let tauServers: Array<any> = [];

  async function fetchTauServers() {
    tauServers = [];
    try {
      await axios
        .get("https://taucetistation.org/server/tauceti/json")
        .then(({ data }) => {
          tauServers = [
            ...tauServers,
            {
              name: "Tau Ceti Classic",
              map: data.map_name,
              mode: data.mode,
              players: data.players,
              duration: data.roundduration,
              url: "byond://game.taucetistation.org:2506",
            },
          ];
        });
      await axios
        .get("https://taucetistation.org/server/tauceti2/json")
        .then(({ data }) => {
          tauServers = [
            ...tauServers,
            {
              name: "Tau Ceti Classic II",
              map: data.map_name,
              mode: data.mode,
              players: data.players,
              duration: data.roundduration,
              url: "byond://game.taucetistation.org:2507",
            },
          ];
        });
      await axios
        .get("https://taucetistation.org/server/tauceti3/json")
        .then(({ data }) => {
          tauServers = [
            ...tauServers,
            {
              name: "Tau Ceti Classic III",
              map: data.map_name,
              mode: data.mode,
              players: data.players,
              duration: data.roundduration,
              url: "byond://game.taucetistation.org:2508",
            },
          ];
        });
    } catch ({ response }) {
      console.error(response);
    }
  }

  const pluralize = function (number: number, titles: Array<string>) {
    const cases = [2, 0, 1, 1, 1, 2];
    const text =
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    return `${number} ${text}`;
  };

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
        href="https://discord.gg/YCWRjkb"
        target="_blank"
        rel="noreferrer">Discord</a>
      <a
        href="https://rules.taucetistation.org/"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a
        href="https://wiki.taucetistation.org"
        target="_blank"
        rel="noreferrer">Вики</a>
      <a
        href="https://map.taucetistation.org"
        target="_blank"
        rel="noreferrer">Карта</a>
      <a
        href="https://wiki.taucetistation.org/Guides"
        target="_blank"
        rel="noreferrer">Гайды</a>
      <a
        href="https://wiki.taucetistation.org/Music"
        target="_blank"
        rel="noreferrer">Музыка</a>
      <a on:click={fetchTauServers}>🔄</a>
    </div>
    {#each tauServers as server}
      <div class="servers__block">
        <h3>{server.name}</h3>
        <div class="servers__data">
          <div class="servers__mode">
            {#if server.map && server.mode}
              {server.map}
              ({server.mode})
            {:else}ERROR{/if}
          </div>
          <div class="servers__players">
            {server.players ? pluralize(server.players, [
                  'игрок',
                  'игрока',
                  'игроков',
                ]) : '--'}
          </div>
          <div class="servers__roundTime">
            Продолжительность:
            {server.duration || '--:--'}
          </div>
        </div>
        <a class="servers__play" href={server.url}>Играть</a>
      </div>
    {/each}
  </section>
  <section class="servers">
    <div class="servers__header">
      <h2>SS220</h2>
      <a
        href="http://rv666.asuscomm.com/wiki/index.php/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a
        href="http://rv666.asuscomm.com/wiki"
        target="_blank"
        rel="noreferrer">Вики</a>
      <a
        href="http://rv666.asuscomm.com/wiki/index.php/%D0%9B%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D0%B8"
        target="_blank"
        rel="noreferrer">Карта</a>
    </div>
    <div class="servers__block">
      <h3>Paradise</h3>
      <a class="servers__play" href="byond://rv666.asuscomm.com:7721">Играть</a>
    </div>
    <div class="servers__block">
      <h3>Whitelist</h3>
      <a class="servers__play" href="byond://rv666.asuscomm.com:7722">Играть</a>
    </div>
  </section>
  <section class="servers">
    <div class="servers__header">
      <h2>Chaotic Onyx</h2>
      <a
        href="https://discord.gg/5BRMMFg"
        target="_blank"
        rel="noreferrer">Discord</a>
      <a
        href="https://wiki.ss13.ru/index.php?title=Onyx_Rules"
        target="_blank"
        rel="noreferrer">Правила</a>
      <a href="https://wiki.ss13.ru" target="_blank" rel="noreferrer">Вики</a>
    </div>
    <div class="servers__block">
      <h3>Chaotic Onyx</h3>
      <p>
        Классический дух оторванной от&nbsp;остального человечества станции,
        на&nbsp;которой вечно что-то идет не&nbsp;так и&nbsp;никто
        не&nbsp;знает, что с&nbsp;этим делать.
      </p>
      <a class="servers__play" href="byond://ss13.ru:2506">Играть</a>
    </div>
    <div class="servers__block">
      <h3>Lawful Onyx</h3>
      <p>
        Чрезвычайные ситуации с&nbsp;упором в&nbsp;отыгрыш интересных
        и&nbsp;запоминающихся персонажей.
      </p>
      <a class="servers__play" href="byond://ss13.ru:2507">Играть</a>
      <a
        href="https://wiki.ss13.ru/images/7/7c/Onyx_Exodus.png"
        target="_blank"
        rel="noreferrer">Карта</a>
    </div>
    <div class="servers__block">
      <h3>Experimental Onyx</h3>
      <p>
        Происходящее на&nbsp;этом сервере такая&nbsp;же загадка, как
        и&nbsp;расписание его запусков.
      </p>
      <a class="servers__play" href="byond://ss13.ru:2508">Играть</a>
    </div>
  </section>
  <section class="info">
    <a href="http://ps.ss13.net" target="_blank" rel="noreferrer">Paperwork
      Simulator</a>
    <a
      href="https://tgstation13.org/wiki/"
      target="_blank"
      rel="noreferrer">Вики /tg/ (EN)</a>
  </section>
</main>
