<script lang="ts">
  import { onMount } from "svelte";
  import { IconRefresh } from "@tabler/icons-svelte";
  import ExternalLink from "@/components/ExternalLink.svelte";
  import { fetchServer as fetchTauServer } from "@/servers/tauCeti";
  import { getBuildEmoji, pluralize } from "@/utils";
  import type { ServerInfo } from "@/types/server";

  export let data: ServerInfo;
  function getFetchFn(url: ServerInfo["url"]) {
    if (url.includes("tauceti")) return fetchTauData;
    return null;
  }
  $: fetchFn = getFetchFn(data.url);

  async function fetchTauData() {
    const response = await fetchTauServer(data.name);
    if (response) data = { ...data, ...response };
  }

  onMount(() => {
    if (fetchFn) fetchFn();
  });
</script>

<li class="server">
  <h3 class="server__name">{data.name}</h3>
  {#if fetchFn}
    <button class="button server__update" on:click={fetchTauData}>
      <IconRefresh />
    </button>
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
        {#each data.buttons as { url, icon, text }}
          <ExternalLink href={url} {icon}>{text}</ExternalLink>
        {/each}
      {/if}
      {#if data.map || data.mode}
        <div class="server__data-mode" title="Карта">
          {#if data.map}
            {#if data.mapUrl}
              <a href={data.mapUrl} target="_blank" rel="noopener noreferrer">
                {data.map}
              </a>
            {:else}
              {data.map}
            {/if}
          {/if}
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
  <a class="button server__play" title={data.url} href={data.url} rel="noopener">Играть</a>
</li>

<style lang="scss">
  .server {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    text-align: center;
    background-color: #1d1d24e1;
    border: 1px solid #31313b;
    border-radius: 4px;
    &__name {
      margin: 0;
    }
    &__update {
      position: absolute;
      top: 0;
      right: 0;
    }
    &__data {
      font-size: 16px;
      line-height: 26px;
      color: #cacaca;
    }
    &__description {
      font-size: 16px;
      color: #cacaca;
    }
    &__play {
      display: block;
      width: 100%;
      max-width: 150px;
      margin-top: 15px;
      border: 1px solid #466e6e;
    }
  }
</style>
