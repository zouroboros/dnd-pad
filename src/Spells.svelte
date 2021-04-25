<script>
  export let character = {};

  if(character.spellSlots === undefined ) {
    character.spellSlots = [];
  }

  let level = null;
  let available = null;
  let used = null;

  let spellLevel = null;
  let spellName = null;
  let spellLink = null;

  let addSpellSlot = function(level, available, used) {
    character.spellSlots = [...character.spellSlots, {level: level, available: available, used: used}]
    level = '';
    available = '';
    used = '';
  };

  let removeSpellSlot = function(spell) {
    character.spells = character.spells.filter(s => s !== spell)
  };


  let removeSpell = function(spell) {
    character.spells = character.spells.filter(s => s !== spell)
  };

  let addSpell = function(level, name, link) {
    character.spells = [...character.spells, {level: level, name: name, link:link}];
    spellLevel = null;
    spellName = null;
    spellLink = null;
  }
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
    <label for="spellattack-bonus">Spellattack Bonus DC</label>
    <input id="spellattack-bonus" type="number" bind:value={character.spellattackBonus} />
  </div>
</div>
<h3>Spellslots</h3>
  <table class="stat-box">
    <thead>
      <tr><td>Level</td><td>Available</td><td>Used</td><td></td></tr>
    </thead>
    {#each character.spellSlots as spellslot}
    <tr>
      <td>{spellslot.level}</td>
      <td>{spellslot.available}</td>
      <td><input type="text" bind:value="{spellslot.used}"/></td>
      <td><button type="button" on:click={removeSpellSlot(spellslot)}>Remove</td>
    </tr>
    {/each}
    <tr>
      <td><input type="text" bind:value="{level}" placeholder="Level"/></td>
      <td><input type="text" bind:value="{available}" placeholder="Slots"/></td>
      <td><input type="text" bind:value="{used}" placeholder="Used"/></td>
      <td><button type="button" on:click="{addSpellSlot(level, available, used)}">Add</button></td>
    </tr>
  </table>
<h3>Spells</h3>
<table class="stat-box">
  <thead>
    <tr><td>Level</td><td>Spell</td><td></td></tr>
  </thead>
  <tbody>
  {#each character.spells as spell}
  <tr>
    <td>{spell.level}</td>
    <td><a href="{spell.link}" target="_blank">{spell.name}</a></td>
    <td><button type="button" on:click={remove(spell)}>Remove</td>
  </tr>
  {/each}
  <tr>
    <td><input type="text" bind:value="{spellLevel}" placeholder="Level"/></td>
    <td><input type="text" bind:value="{spellName}" placeholder="Spell name"/></td>
    <td><input type="text" bind:value="{spellLink}" placeholder="URL"/></td>
    <td><button type="button" on:click="{addSpell(spellLevel, spellName, spellLink)}">Add</button></td>
  </tr>
  </tbody>
</table>
</div>
