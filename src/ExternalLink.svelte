<script lang="ts">
  export let href: string;
  export let icon: string | undefined = undefined;
</script>

<a
  class="button"
  class:wiki={icon === "wiki"}
  class:discord={icon === "discord"}
  href={href}
  target="_blank"
  rel="noopener"
>
  {#if icon === 'rules'}📃
  {:else if icon === 'map'}🗺️
  {:else if icon === 'music'}🎵
  {/if}
  <slot/>
</a>

<style lang="scss">
  .button {
    @mixin button-icon {
      padding-left: 32px;
      background-position: 8px center;
      background-repeat: no-repeat;
      background-size: 16px;
    }
    &.wiki {
      @include button-icon;
      background-image: url("/assets/wikipedia.svg");
    }
    &.discord {
      @include button-icon;
      background-image: url("/assets/discord.svg");
    }
  }
</style>
