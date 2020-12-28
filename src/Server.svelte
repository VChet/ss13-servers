<script lang="ts">
  export let data: any;

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
  {#if data.map && !data.error}
    <div class="servers__data">
      <div class="servers__mode">{data.map} ({data.mode})</div>
      <div class="servers__players">
        {pluralize(data.players, ['игрок', 'игрока', 'игроков'])}
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
  <a class="servers__play" href={data.url}>Играть</a>
  {#if data.buttons && data.buttons.length}
    {#each data.buttons as button}
      <a href={button.url} target="_blank" rel="noreferrer">{button.text}</a>
    {/each}
  {/if}
</div>
