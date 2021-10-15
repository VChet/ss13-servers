<script lang="ts">
  import type { LinkButton } from "./types/LinkButtons";

  export let data: LinkButton;
</script>

<a
  class="button"
  class:wiki={data.type === "wiki"}
  class:discord={data.type === "discord"}
  href={data.url}
  target="_blank"
  rel="noopener"
>
  {data.text}
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
