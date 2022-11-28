<script>
  export let notes;
</script>

<style>
textarea {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
</style>

<div>
  <h2>Notes</h2>
  <div class=stat-box>
    <textarea bind:value={notes} />
  </div>
</div>
