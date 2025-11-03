<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Section from '$lib/components/Section.svelte';
  import Section2 from '$lib/components/Section2.svelte';
</script>

<Header />

<Section
  image="/images/hero.jpg"
  title="Welcome"
  copy="Intro copy about portfolio"
  buttonText="Contact"
  buttonLink="/contact"
/>

<Section
  image="/images/about.jpg"
  title="About Me"
  copy="Short bio here"
  buttonText="Work With Me"
  buttonLink="/contact"
/>

<Section2
  image="/images/about.jpg"
  title="About Me"
  copy="Short bio here"
  buttonText="Work With Me"
  buttonLink="/contact"
/>

<Section
  title="Portfolio"
  copy="Check out my projects"
  buttonText="View Portfolio"
  buttonLink="/group-campaigns"
/>

<Footer />
