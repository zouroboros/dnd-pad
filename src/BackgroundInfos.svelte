<script>
export let character = {};
</script>

<h2>Background Information</h2>
<div class="flex">
  <div class="stat-box">
    <label for="personality-traits">Personality Traits</label>
    <textarea id="personality-traits"></textarea>
  </div>
  <div class="stat-box">
    <label for="ideals">Ideals</label>
    <textarea id="ideals" bind:value={character.ideals}></textarea>
  </div>
  <div class="stat-box">
    <label for="bonds">Bonds</label>
    <textarea id="bonds" bind:value={character.bonds}></textarea>
  </div>
  <div class="stat-box">
    <label for="flaws">Flaws</label>
    <textarea id="flaws" bind:value={character.flaws}></textarea>
  </div>
</div>
