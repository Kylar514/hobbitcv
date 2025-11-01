<script>
  export let image = "";
  export let title = "";
  export let copy = "";
  export let buttonText = "";
  export let buttonLink = "";
</script>

<div class="section">
  {#if image}<img src={image} alt={title} />{/if}
  {#if title}<h2>{title}</h2>{/if}
  <p>{copy}</p>
  {#if buttonText && buttonLink}
    <a href={buttonLink} class="button">{buttonText}</a>
  {/if}
</div>

<style>
.section { padding: 4rem; text-align: center; }
.section img { max-width: 100%; margin-bottom: 1rem; }
.button { background: black; color: white; padding: 0.5rem 1rem; border-radius: 9px; text-decoration: none; }
</style>
