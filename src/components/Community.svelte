<script lang="ts">
  import type { Link } from "@/types/link";
  import type { ServerInfo } from "@/types/server";
  import ExternalLink from "@/components/ExternalLink.svelte";
  import Server from "@/components/Server.svelte";

  interface Props {
    name: string
    description?: string | null
    links?: Link[]
    servers?: ServerInfo[]
  }

  const {
    name,
    description = null,
    links = [],
    servers = []
  }: Props = $props();
</script>

<section class="card community">
  <h2>{name}</h2>
  {#if description}
    <p>{description}</p>
  {/if}
  <ul class="community__buttons">
    {#each links as { url, icon, text }}
      <li>
        <ExternalLink href={url} {icon}>{text}</ExternalLink>
      </li>
    {/each}
  </ul>
  <ul class="community__servers">
    {#each servers as data}
      <Server {data} />
    {/each}
  </ul>
</section>

<style lang="scss">
  .community {
    text-align: center;
    @media (width <= 425px) {
      padding: 10px;
    }
    h2 {
      margin-top: 0;
    }
    &__buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }
    &__servers {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      margin: 20px 0;
    }
  }
</style>
