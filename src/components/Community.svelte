<script lang="ts">
  import ExternalLink from "@/components/ExternalLink.svelte";
  import Server from "@/components/Server.svelte";
  import type { Link } from "@/types/link";
  import type { ServerInfo } from "@/types/server";

  export let name: string;
  export let description: string | null = null;
  export let links: Link[] = [];
  export let servers: ServerInfo[] = [];
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
