<script>
    import { afterUpdate } from "svelte";


  export let notes;
  let textarea;

  afterUpdate(() => {
    if (textarea.clientHeight < textarea.scrollHeight) {
      textarea.style.height = `calc(${textarea.scrollHeight}px + 2.4ex)`;
    }
  })
</script>

<style>
textarea {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>

<div>
  <h2>Notes</h2>
  <div class=stat-box>
    <textarea bind:this={textarea} bind:value={notes} />
  </div>
</div>
