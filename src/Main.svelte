<style>
  img {
    max-height: 30vh;
    border-radius: 50%;
    border: 2px solid #35495e;
  }
  h1 {
    display: block;
    font-weight: 500;
    font-size: 8.5vmax;
    color: #35495e;
    letter-spacing: 1px;
    margin: 0;
  }
  h2 {
    font-weight: 300;
    font-size: 2.5vmax;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  #main {
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  #main > div {
    padding: 30px;
  }

  @media (max-width: 768px) {
    #main {
      flex-direction: column;
    }
    #main > div {
      padding: 0;
    }
  }
</style>

<div id="main">
  <div><img src="images/headshot.jpg" alt="" /></div>
  <div>
    <h1>Philip Owen</h1>
    <h2>Software Developer | IT Professional</h2>
  </div>
</div>
