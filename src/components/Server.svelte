<script lang="ts">
  import { onMount } from "svelte";
  import { IconRefresh } from "@tabler/icons-svelte";
  import { fetchServer as fetchTauServer } from "@/servers/tauCeti";
  import { getBuildEmoji, pluralize } from "@/utils";
  import type { ServerInfo } from "@/types/server";
  import ExternalLink from "@/components/ExternalLink.svelte";

  interface Props {
    data: ServerInfo
  }
  let { data = $bindable() }: Props = $props();

  const fetchFn = $derived(data.url.includes("tauceti") ? fetchTauData : null);

  async function fetchTauData() {
    const response = await fetchTauServer(data.name);
    if (response) data = { ...data, ...response };
  }

  onMount(() => {
    if (fetchFn) fetchFn();
  });
</script>

<li class="server">
  <h3 class="name">{data.name}</h3>
  {#if fetchFn}
    <button class="button update" onclick={fetchTauData}>
      <IconRefresh />
    </button>
  {/if}
  {#if data.build}
    <div class="build" title="Билд">
      {getBuildEmoji(data.build)}
      {data.build}
    </div>
  {/if}
  <div class="data">
    {#if !data.error}
      {#if data.buttons?.length}
        <ul class="buttons">
          {#each data.buttons as { url, icon, text } (url)}
            <li>
              <ExternalLink href={url} {icon}>{text}</ExternalLink>
            </li>
          {/each}
        </ul>
      {/if}
      {#if data.map || data.mode}
        <div class="mode" title="Карта">
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
    <div class="description">
      {data.description}
    </div>
  {/if}
  <a class="button play" title={data.url} href={data.url} rel="noopener">Играть</a>
</li>

<style>
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
  .name {
    margin: 0;
  }
  .update {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 4px;
  }
  .data {
    font-size: 16px;
    line-height: 26px;
    color: #cacaca;
    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }
    .mode {
      white-space: pre-line;
    }
  }
  .description {
    font-size: 16px;
    color: #cacaca;
  }
  .play {
    display: block;
    width: 100%;
    max-width: 150px;
    margin-top: 15px;
    border: 1px solid #466e6e;
  }
}
</style>
