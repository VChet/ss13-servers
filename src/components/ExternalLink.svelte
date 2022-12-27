<script lang="ts">
  export let href: string;
  export let icon: string | undefined = undefined;

  $: classList = () => {
    const classNames = ["button"];
    if (icon) {
      classNames.push(`button--${icon}`);
    }
    return classNames.join(" ");
  };
</script>

<a class={classList()} {href} target="_blank" rel="noopener">
  {#if icon === "rules"}📃
  {:else if icon === "map"}🗺️
  {:else if icon === "music"}🎵
  {/if}
  <slot />
</a>

<style lang="scss">
  .button {
    @mixin icon {
      padding-left: 32px;
      background-position: 8px center;
      background-repeat: no-repeat;
      background-size: 16px;
    }
    &--wiki {
      @include icon;
      background-image: url("/assets/wikipedia.svg");
    }
    &--discord {
      @include icon;
      background-image: url("/assets/discord.svg");
    }
  }
</style>
