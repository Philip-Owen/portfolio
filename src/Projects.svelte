<script>
  import { onMount } from "svelte";
  import Repo from "./Repo.svelte";
  import Icon from "svelte-awesome";
  import { github } from "svelte-awesome/icons";
  let repos = [];

  onMount(async () => {
    const res = await fetch(
      "https://api.github.com/users/philip-owen/repos?sort=updated&per_page=5"
    );
    repos = await res.json();
  });
</script>

<style>
  #projects {
    padding: 90px 50px;
  }
  .repo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-title {
    font-size: 40px;
    text-align: center;
  }
  .section-title > h2 {
    margin-top: 0;
  }
  .section-subtitle {
    text-decoration: underline;
    text-align: center;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 5px;
  }
  .more-text {
    text-align: center;
  }
  @media (max-width: 768px) {
    .repo-container {
      flex-direction: column;
    }
  }
</style>

<div id="projects">
  <div class="section-title">
    <h2>Projects</h2>
  </div>

  <p class="section-subtitle">The last 5 projects I've worked on:</p>
  <div class="repo-container">
    {#each repos as repo}
      <Repo name={repo.name} url={repo.html_url} language={repo.language} />
    {/each}
  </div>
  <p class="more-text">
    Find more on my Github
    <a
      href="https://www.github.com/philip-owen"
      target="_blank"
      rel="noopener noreferrer"><Icon
        data={github}
        scale="2"
        style="color: #35495e; vertical-align: -0.225em;" /></a>
  </p>
</div>
