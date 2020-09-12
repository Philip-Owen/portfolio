<script>
  import * as animateScroll from "svelte-scrollto";
  let menuToggled = false;
  function menuToggle() {
    menuToggled = !menuToggled;
  }
  function resetToggle() {
    menuToggled = false;
  }
  function windowResetToggle() {
    if (window.innerWidth > 768) {
      menuToggled = false;
    }
  }
</script>

<style>
  nav {
    width: 100%;
    background-color: white;
    position: fixed;
    margin-bottom: 10px;
  }
  #navbar {
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
  #logo {
    padding: 10px 0;
    font-size: 25px;
    font-weight: bold;
  }
  #logo > a {
    color: #35495e;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-right: 20px;
  }
  li > a {
    color: #35495e;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
  }
  #menu-toggle {
    display: none;
  }
  @media (max-width: 768px) {
    #navbar {
      flex-direction: column;
      align-items: stretch;
    }
    #navbar > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #menu-toggle {
      padding: 4px;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid black;
      display: inline;
      text-decoration: none;
    }
    #menu-toggle:hover {
      border-color: gray;
    }
    .toggled {
      display: none;
    }
    ul {
      padding-inline-start: 0;
      flex-direction: column;
    }
    li {
      padding-top: 5px;
    }
  }
</style>

<svelte:window on:resize={windowResetToggle} />

<nav>
  <div id="navbar">
    <div>
      <span id="logo" on:click={resetToggle}>
        <a
          href="#main"
          on:click={() => animateScroll.scrollTo({ element: '#main' })}>Philip
          Owen</a>
      </span>
      <div id="menu-toggle" on:click={menuToggle}><span>Menu</span></div>
    </div>
    <ul class:toggled={!menuToggled}>
      <li on:click={resetToggle}>
        <a
          href="#about"
          on:click={() => animateScroll.scrollTo({
              element: '#about',
            })}>About</a>
      </li>
      <li on:click={resetToggle}>
        <a
          href="#projects"
          on:click={() => animateScroll.scrollTo({
              element: '#projects',
            })}>Projects</a>
      </li>
      <li on:click={resetToggle}>
        <a
          href="#contact"
          on:click={() => animateScroll.scrollTo({
              element: '#contact',
            })}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
