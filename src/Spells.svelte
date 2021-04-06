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
