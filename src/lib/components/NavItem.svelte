<script>
  export let label;
  export let submenu = [];

  let open = false;
</script>

<style>
.nav-item {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  user-select: none;
}

.arrow {
  transition: transform 0.25s ease;
  display: inline-block;
}

.arrow.open {
  transform: rotate(180deg);
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-radius: 0.25rem;
  min-width: 200px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  z-index: 5;
}

.submenu.open {
  opacity: 1;
  transform: translateY(0);
}

.submenu a {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background 0.2s ease;
  color: #CAB1A1;
  background: #000
}

.submenu a:hover {
  background: #111;
}
</style>

<div
  class="nav-item"
  on:mouseenter={() => (open = true)}
  on:mouseleave={() => (open = false)}
  on:click={() => (open = !open)}  
>
  <span>{label}</span>
  {#if submenu.length}
    <span class="arrow {open ? 'open' : ''}">▼</span>
    <div class="submenu {open ? 'open' : ''}">
      {#each submenu as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </div>
  {/if}
</div>
