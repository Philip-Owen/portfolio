<script>
  let error = false;
  let sent = false;
  const contact = {
    name: "",
    email: "",
    message: "",
  };
  function resetError() {
    error = false;
  }
  function msgSent() {
    sent = true;
  }
  async function handleSubmit() {
    try {
      await fetch(
        "https://45z5nk3fmf.execute-api.us-east-1.amazonaws.com/prod/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact),
        }
      );
      resetError();
      msgSent();
    } catch (e) {
      console.log(e);
      error = true;
    }
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
  input,
  textarea {
    width: 100%;
    max-width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px;
  }
  button {
    width: 100%;
    background-color: #526488;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background-color: #526480;
  }
  textarea {
    resize: none;
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
  }
  .form-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .contact-subtitle {
    text-decoration: underline;
    text-align: center;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 5px;
  }
  .error {
    color: red;
    font-size: 18px;
    font-weight: bold;
  }
  .sent {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    form {
      width: 100%;
    }
  }
</style>

<div class="form-container">
  <p class="contact-subtitle">Send me a message</p>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={contact.name} />
    <input
      type="email"
      placeholder="Email address"
      bind:value={contact.email}
      required />
    <textarea
      cols="10"
      rows="5"
      placeholder="Your message"
      bind:value={contact.message} />
    <button>Submit</button>
  </form>
  {#if sent}
    <p class="sent">Message Sent!</p>
  {/if}
  {#if error}
    <p class="error">
      It doesn't appear that the contact form is working at the moment. Please
      try again later or contact me at one of the links below.
    </p>
  {/if}
</div>
