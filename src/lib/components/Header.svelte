<script>
  import NavItem from '$lib/components/NavItem.svelte';

  const navItems = [
    {
      label: 'Portfolio',
      submenu: [
        { label: 'Home', href: '/' },
        { label: 'Group Campaigns', href: '/portfolio/group-campaigns' },
        { label: 'Concept Campaigns', href: '/portfolio/concept-campaigns' },
        { label: 'Branding Campaigns', href: '/portfolio/branding-campaigns' },
        { label: 'Social Media', href: '/portfolio/social' },
        { label: 'Email Marketing', href: '/portfolio/email' },
        { label: 'Print Media', href: '/portfolio/print' },
        { label: 'Landing', href: '/portfolio/landing' },
        { label: 'Publications', href: '/portfolio/publications' }
      ]
    },
    { label: 'Contact', href: '/contact' }
  ];

  let mobileMenuOpen = false;
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
  border-bottom: 1px solid #eee;
  color: #CAB1A1
}

.left-group h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

header a,
header a:link,
header a:visited,
header a:hover,
header a:active {
  color: inherit;
  text-decoration: none;
}

/* Hamburger for small screens */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background: black;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    right: 0;
    width: 70%;
    background: white;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    padding: 1rem;
    z-index: 10;
    box-shadow: -2px 2px 6px rgba(0,0,0,0.1);
  }

  .mobile-menu a {
    display: block;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f0f0f0;
    text-align: right;
  }
}
</style>

<header>
  <div class="left-group">
    <h1>Hobbit Copywriting</h1>
  </div>

  <nav>
    {#each navItems as item}
      {#if item.submenu}
        <NavItem label={item.label} submenu={item.submenu} />
      {:else}
        <a href={item.href}>{item.label}</a>
      {/if}
    {/each}
  </nav>

  <div class="hamburger" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
    <div></div>
    <div></div>
    <div></div>
  </div>

  {#if mobileMenuOpen}
    <div class="mobile-menu">
      {#each navItems as item}
        <a href={item.href}>{item.label}</a>
        {#if item.submenu}
          {#each item.submenu as sub}
            <a href={sub.href} style="padding-right: 1.5rem;">— {sub.label}</a>
          {/each}
        {/if}
      {/each}
    </div>
  {/if}
</header>
