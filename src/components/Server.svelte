<script lang="ts">
  import { onMount } from "svelte";
  import ExternalLink from "@/components/ExternalLink.svelte";
  import { fetchTauServer } from "@/servers/tauCeti";
  import { getBuildEmoji, pluralize } from "@/utils";
  import type { ServerModel } from "@/types/Server";

  export let data: ServerModel;
  $: isTauServer = data.url.includes("tauceti");

  async function fetchTauData() {
    const response = await fetchTauServer(data.byond_id);
    if (response) data = { ...data, ...response };
  }

  onMount(async () => {
    if (isTauServer) await fetchTauData();
  });
</script>

<li class="server">
  <h3 class="server__name">{data.name}</h3>
  {#if isTauServer}
    <button class="button server__update" on:click={fetchTauData}>🔄</button>
  {/if}
  {#if data.build}
    <div class="server__build" title="Билд">
      {getBuildEmoji(data.build)}
      {data.build}
    </div>
  {/if}
  <div class="server__data">
    {#if data.error}
      NO DATA
    {:else}
      {#if data.buttons?.length}
        {#each data.buttons as button}
          <ExternalLink href={button.url} icon={button.icon}>{button.text}</ExternalLink>
        {/each}
      {/if}
      {#if data.map || data.mode}
        <div class="server__data-mode" title="Карта">
          {#if data.map}{data.map}{/if}
          {#if data.mode}({data.mode}){/if}
        </div>
      {/if}
      {#if data.players && data.players >= 0}
        <div class="servers__data-players">
          {pluralize(data.players, ["игрок", "игрока", "игроков"])}
        </div>
      {/if}
      {#if data.duration}
        <div class="servers__data-round-time">
          Продолжительность: {data.duration}
        </div>
      {/if}
    {/if}
  </div>
  {#if data.description}
    <div class="server__description">
      {data.description}
    </div>
  {/if}
  <a class="button server__play" title="Запустить Byond и подключиться" href={data.url} rel="noopener">Играть</a>
</li>

<style lang="scss">
  .server {
    position: relative;
    padding: 16px 20px;
    background-color: #1d1d24e1;
    border-radius: 4px;
    border: 1px solid #31313b;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    &__name {
      margin: 0;
    }
    &__update {
      position: absolute;
      top: 0;
      right: 0;
    }
    &__data {
      color: #cacaca;
      font-size: 16px;
      line-height: 26px;
    }
    &__description {
      color: #cacaca;
      font-size: 16px;
    }
    &__play {
      margin-top: 15px;
      display: block;
      width: 100%;
      max-width: 150px;
      border: 1px solid rgb(70, 110, 110);
    }
  }
</style>
