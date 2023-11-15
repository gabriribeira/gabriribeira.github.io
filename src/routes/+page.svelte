<script>
  import Logo from "./etc-logo.png";
  import ComingSoon from "./coming-soon.png";
  import Instagram from "./instagram.png";

  import { fly, slide } from "svelte/transition";
  import { enhance } from "$app/forms";

  export let data;
  export let form;

  let creating = false;
  let deleting = [];
</script>

<div class="instagram-container">
  <a
    href="https://www.instagram.com/app.etc/"
    alt="Instagram Link"
    target="_blank"
  >
    <img src={Instagram} alt="Instagram Logo" class="instagram" />
  </a>
</div>
<div class="container">
  <div class="centered">
    <img src={ComingSoon} alt="Et Cetera Logo" class="coming-soon" />

    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}

    <form
      method="POST"
      action="?/create"
      use:enhance={() => {
        creating = true;
        return async ({ update }) => {
          await update();
          creating = false;
        };
      }}
    >
      <label>
        add a produtct:
        <input
          name="description"
          autocomplete="off"
          required
          value={form?.description ?? ""}
          disabled={creating}
        />
      </label>
    </form>

    <ul class="todos">
      {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
        <li in:fly={{ y: 20 }} out:slide>
          <form
            method="POST"
            action="?/delete"
            use:enhance={() => {
              deleting = [...deleting, todo.id];
              return async ({ update }) => {
                await update();
                deleting = deleting.filter((id) => id !== todo.id);
              };
            }}
          >
            <input type="hidden" name="id" value={todo.id} />
            <span>{todo.description}</span>
            <button aria-label="Mark as complete" />
          </form>
        </li>
      {/each}
    </ul>
  </div>
</div>
<img src={Logo} alt="Et Cetera Logo" class="logo" />

<style>
  .logo {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
  }
  .instagram-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
  }
  .instagram {
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: auto;
  }
  .coming-soon {
    height: 100px;
  }
  .centered {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 20em;
    margin: 0 auto;
    color: #fff;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  label {
    width: 100%;
  }

  form{
    margin-top: 20px;
  }

  input {
    flex: 1;
    color: black;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
  }

  input:focus {
    outline: none;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    background: url(./remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }

  .saving {
    opacity: 0.5;
  }
</style>
