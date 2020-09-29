<script>
  export let name;
  export let url;
  export let language;
</script>

<style>
  div {
    background-color: #35495e;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border: 2px solid #526488;
    word-wrap: normal;
    width: 20%;
    height: 120px;
  }
  a {
    color: white;
    text-decoration: underline;
    font-weight: bold;
    margin: 10px 0 0 0;
  }
  p {
    margin-top: 5px;
  }
  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
</style>

<div>
  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
  <p>Language: {language}</p>
</div>
