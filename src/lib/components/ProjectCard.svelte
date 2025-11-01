<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projects from '$lib/data/group-campaigns.js';
</script>

<Header />

<Section
  title="Group Campaigns"
  copy="Client info and years"
/>

<div class="projects-grid">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>

<Section
  copy="Client testimonial here"
/>

<Footer />
