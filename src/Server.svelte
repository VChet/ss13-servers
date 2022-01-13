<script lang="ts">
  import Button from "./Button.svelte";
  import type { ServerModel } from "./types/Server";

  export let data: ServerModel;

  function pluralize(number: number, titles: Array<string>) {
    const cases = [2, 0, 1, 1, 1, 2];
    const text = titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    return `${number} ${text}`;
  };

  function getBuildEmoji(build: string): string {
    switch (build.toLowerCase()) {
      case 'paradise':
        return '🌴'
      case 'infinity':
        return '♾️'
      case 'beestation':
        return '🐝'
      default:
        return ''
    }
  }
</script>

<li class="servers__block">
  <h3>{data.name}</h3>
  {#if data.build}
    <div class="servers__build" title="Билд">
      {getBuildEmoji(data.build)}
      {data.build}
    </div>
  {/if}
  <div class="servers__data">
    {#if data.error}
      NO DATA
    {:else}
      {#if data.buttons?.length}
        {#each data.buttons as button}
          <Button data={button} />
        {/each}
      {/if}
      {#if data.map || data.mode}
        <div class="servers__mode" title="Карта">
          {#if data.map}{data.map}{/if}
          {#if data.mode}({data.mode}){/if}
        </div>
      {/if}
      {#if data.players && data.players >= 0}
        <div class="servers__players">
          {pluralize(data.players, ["игрок", "игрока", "игроков"])}
        </div>
      {/if}
      {#if data.duration}
        <div class="servers__round-time">
          Продолжительность: {data.duration}
        </div>
      {/if}
    {/if}
  </div>
  {#if data.description}
    <div class="servers__description">
      {data.description}
    </div>
  {/if}
  <a class="button button--play" title="Запустить Byond и подключиться" href={data.url} rel="noopener">Играть</a>
</li>

<style lang="scss">
  .servers__block {
    padding: 20px 30px;
    background-color: #1d1d24e1;
    border-radius: 4px;
    border: 1px solid #31313b;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    h3 {
      margin: 0;
    }
    .servers__data {
      color: #cacaca;
      font-size: 16px;
      line-height: 26px;
    }
    .servers__description {
      color: #cacaca;
      font-size: 16px;
    }
  }
  .button--play {
    margin-top: 15px;
    display: block;
    width: 100%;
    max-width: 150px;
    border: 1px solid rgb(70, 110, 110);
  }
</style>
