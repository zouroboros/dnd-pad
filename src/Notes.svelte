<script>
  export let notes;
</script>

<style>
textarea {
  width: 100%;
}
</style>

<div>
  <h2>Notes</h2>
  <textarea bind:value={notes} />
</div>
