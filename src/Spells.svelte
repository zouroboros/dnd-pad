<script>
  export let character = {};

  if(character.spellSlots === undefined ) {
    character.spellSlots = [];
  }

  let level = null;
  let available = null;
  let used = null;

  let add = function(level, available, used) {
    character.spellSlots = [...character.spellSlots, {level: level, available: available, used: used}]
    level = '';
    available = '';
    used = '';
  };

  let remove = function(slot) {
      character.spellSlots = character.spellSlots.filter(s => s !== slot)
  };
</script>

<style>
</style>

<div>
<h2>Spells</h2>
<div class="flex">
  <div class="stat-box">
    <label for="spellcasting-ability">Spellcasting Ability</label>
    <input id="spellcasting-ability" type="number" bind:value={character.spellcastingAbility} />
  </div>
  <div class="stat-box">
    <label for="spellsave-dc">Spellsave DC</label>
    <input id="spellsave-dc" type="number" bind:value={character.spellsaveDc} />
  </div>
  <div class="stat-box">
    <label for="spellattack-bonus">Spellsave DC</label>
    <input id="spellattack-bonus" type="number" bind:value={character.spellattackBonus} />
  </div>
</div>
<h3>Spellslots</h3>
  <table>
    <thead>
      <td>Level</td><td>Available</td><td>Used</td><td></td>
    </thead>
    {#each character.spellSlots as spellslot}
    <tr>
      <td>{spellslot.level}</td>
      <td>{spellslot.available}</td>
      <td><input type="text" bind:value="{spellslot.used}"/></td>
      <td><button type="button" on:click={remove(spellslot)}>Remove</td>
    </tr>
    {/each}
    <tr>
      <td><input type="text" bind:value="{level}" placeholder="Level"/></td>
      <td><input type="text" bind:value="{available}" placeholder="Slots"/></td>
      <td><input type="text" bind:value="{used}" placeholder="Used"/></td>
      <td><button type="button" on:click="{add(level, available, used)}">Add</button></td>
    </tr>
  </table>
</div>
