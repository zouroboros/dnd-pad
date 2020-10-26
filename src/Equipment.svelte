<script>
import PropertyList from './PropertyList.svelte';

export let character = {};
</script>
<div>
<h2>Equipment</h2>
<div class="flex">
  <div class="stat-box">
    <label for="money-cp">CP</label>
    <input id="money-cp" type="number" bind:value={character.cp} size="2" min="0"/>
  </div>
  <div class="stat-box">
    <label for="money-sp">SP</label>
    <input id="money-sp" type="number" bind:value={character.sp} size="2" min="0"/>
  </div>
  <div class="stat-box">
    <label for="money-ep">EP</label>
    <input id="money-ep" type="number" bind:value={character.ep} size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="money-gp">GP</label>
    <input id="money-gp" type="number" bind:value={character.gp} size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="money-pp">PP</label>
    <input id="money-pp" type="number" bind:value={character.pp} size="2" min="0" />
  </div>
</div>
  <PropertyList bind:properties={character.equipment}/>
</div>
