<script>
  import ContactForm from "./ContactForm.svelte";
  import Icon from "svelte-awesome";
  import { linkedin, envelope } from "svelte-awesome/icons";
</script>

<style>
  #contact {
    background-color: #35495e;
    color: white;
    width: 100%;
    padding: 90px 50px;
  }
  .section-title {
    font-size: 40px;
    text-align: center;
  }
  .section-title > h2 {
    margin-top: 0;
  }
  .subtitle {
    text-decoration: underline;
    text-align: center;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 5px;
  }
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-container > a {
    margin: 10px;
  }
</style>

<div id="contact">
  <div class="section-title">
    <h2>Contact</h2>
    <ContactForm />
    <p class="subtitle">Reach me at the links below</p>
    <div class="icon-container">
      <a
        href="https://www.linkedin.com/in/phil-owen"
        target="_blank"
        rel="noopener noreferrer"><Icon
          data={linkedin}
          scale="3"
          style="color: white" /></a>
      <a href="mailto:owen.philipb@gmail.com"><Icon
          data={envelope}
          scale="3"
          style="color: white" /></a>
    </div>
  </div>
</div>
