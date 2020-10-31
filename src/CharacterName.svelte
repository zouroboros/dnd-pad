<script>
  export let character;
</script>
<style>
#character-name {
  font-size: 200%;
  width: 100%;
}
</style>

<div class="stat-box">
  <label for="character-name">Character name</label>
  <input id="character-name" bind:value={character.name} type="text" placeholder="Character name" />
</div>
