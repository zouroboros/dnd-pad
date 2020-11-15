<script>
  export let saving;
  if(!saving.proficiencies) {
    saving.proficiencies = {}
  }
</script>

<style>
</style>

<div>
<h2>Saving throws</h2>
  <div class="flex">
    <div class="stat-box">
      <label for="saving-strength">Strength</label>
      <div class="modifier-checkbox">
        <input type="checkbox" bind:checked={saving.proficiencies.strength}/>
        <div class="modifier"><input id="saving-strength" type="number" bind:value={saving.strength} size="3"/></div>
      </div>
    </div>
    <div class="stat-box">
      <label for="saving-dexterity">Dexterity</label>
      <div class="modifier-checkbox">
        <input type="checkbox" bind:checked={saving.proficiencies.dexterity}/>
        <div class="modifier">
          <input id="saving-dexterity" type="number" bind:value={saving.dexterity} size="3"/>
        </div>
      </div>
    </div>
    <div class="stat-box">
      <label for="saving-constitution">Constitution</label>
      <div class="modifier-checkbox">
        <input type="checkbox" bind:checked={saving.proficiencies.constitution}/>
        <div class="modifier">
          <input id="saving-constitution" type="number" bind:value={saving.constitution} size="3"/>
        </div>
      </div>
    </div>
    <div class="stat-box">
      <label for="saving-intelligence">Intelligence</label>
      <div class="modifier-checkbox">
        <input type="checkbox" bind:checked={saving.proficiencies.intelligence}/>
        <div class="modifier">
          <input id="saving-intelligence" type="number" bind:value={saving.intelligence} size="3" />
        </div>
      </div>
    </div>
    <div class="stat-box">
       <label for="saving-wisdom">Wisdom</label>
        <div class="modifier-checkbox">
          <input type="checkbox" bind:checked={saving.proficiencies.wisdom}/>
          <div class="modifier">
            <input id="saving-wisdom" type="number" bind:value={saving.wisdom} size="3" />
          </div>
        </div>
    </div>
    <div class="stat-box">
      <label for="saving.charisma">Charisma</label>
      <div class="modifier-checkbox">
        <input type="checkbox" bind:checked={saving.proficiencies.charisma}/>
        <div class="modifier">
          <input id="saving-charisma" type="number" bind:value={saving.charisma} size="3" />
        </div>
      </div>
    </div>
  </div>
</div>
