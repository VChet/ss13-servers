<script lang="ts">
  import type { ServerModel } from "./types/Server";

  export let data: ServerModel;

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
</script>

<div class="servers__block">
  <h3>{data.name}</h3>
  {#if data.build}
    <div class="servers__build">{data.build}</div>
  {/if}
  {#if data.map && !data.error}
    <div class="servers__data">
      <div class="servers__mode">{data.map} ({data.mode})</div>
      <div class="servers__players">
        {pluralize(data.players, ["игрок", "игрока", "игроков"])}
      </div>
      <div class="servers__roundTime">Продолжительность: {data.duration}</div>
    </div>
  {/if}
  {#if data.error}
    <div class="servers__data">NO DATA</div>
  {/if}
  {#if data.description}
    <p>
      {@html data.description}
    </p>
  {/if}
  <a class="button servers__play" href={data.url}>Играть</a>
  {#if data.buttons && data.buttons.length}
    {#each data.buttons as button}
      <a class="button" href={button.url} target="_blank" rel="noreferrer"
        >{button.text}</a
      >
    {/each}
  {/if}
</div>

<style>
  .servers__block {
    flex: 1 1 15%;
    margin: 20px;
    padding: 20px;
    background-color: #1d1d24e1;
    border-radius: 6px;
    border: 1px solid #31313b;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
  }
  .servers__block h3 {
    width: 100%;
    text-align: center;
    margin: 0 0 10px;
  }
  .servers__block p {
    margin: 5px 0;
    text-align: center;
    color: #cacaca;
    font-size: 16px;
  }
  .servers__block .servers__data {
    width: 100%;
    text-align: center;
    line-height: 28px;
    padding-bottom: 10px;
    color: #cacaca;
  }
  .servers__play {
    margin-top: 15px;
    display: block;
    max-width: 300px;
    border: 1px solid rgb(70, 110, 110);
  }
</style>
