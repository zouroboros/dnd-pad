<script>
  export let notes;
  let lines = 1;
  if (notes) {
    let matches = notes.match(/\n/g);
    if (matches) {
        lines = matches.length
    }
  }
</script>

<style>
textarea {
  width: 100%;
}
</style>

<div>
  <h2>Notes</h2>
  <textarea bind:value={notes} style="height: {2.4 * lines}ex;"/>
</div>
