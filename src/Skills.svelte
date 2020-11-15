<script>
export let character;
if(!character.proficiencies) {
  character.proficiencies = {}
}

let fields = [{name: 'Acrobatics (Dex)', field: 'acrobatics'},
  {name: 'Animal Handling (Wis)', field: 'animalHandling'},
  {name: 'Arcana (Int)', field: 'arcana'},
  {name: 'Athletics (Str)', field: 'athletics'},
  {name: 'Deception (Cha)', field: 'deception'},
  {name: 'History (Int)', field: 'history'},
  {name: 'Insight (Wisdom)', field: 'insight'},
  {name: 'Intimidation (Str)', field: 'intimidation'},
  {name: 'Investigation (Int)', field: 'investigation'},
  {name: 'Medicine (Wis)', field: 'medicine'},
  {name: 'Nature (Int)', field: 'nature'},
  {name: 'Perception (Wis)', field: 'perception'},
  {name: 'Performance (Cha)', field: 'performance'},
  {name: 'Persuasion (Cha)', field: 'persuasion'},
  {name: 'Religion (Int)', field: 'religion'},
  {name: 'Sleight of Hand (Dex)', field: 'sleightOfHand'},
  {name: 'Stealth (Dex)', field: 'stealth'},
  {name: 'Survival (Wis)', field: 'survival'}];
</script>

<div>
  <h2>Skills</h2>
  <div class="flex">
    {#each fields as field}
      <div class="stat-box">
        <label for="{field.field}-checkbox"> {field.name}</label>
        <div class="modifier-checkbox">
          <input type="checkbox" id="{field.field}-checkbox" bind:checked={character.proficiencies[field.field]}/>
          <div class="modifier">
            <input type="number" bind:value={character[field.field]} size="4" min="0"/>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
