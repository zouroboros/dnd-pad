<script>
  export let character = {};
</script>

<style>
</style>

<div>
  <div class="flex">
    <div class="stat-box">
      <label for="armor-class">Armor class</label>
      <input id="armor-class" type="text" bind:value={character.armorClass} size="5"/>
    </div>
    <div class="stat-box">
      <label for="initiative">Initiative</label>
      <input id="initiative" type="number" bind:value={character.initiative} size="2"/>
    </div>
    <div class="stat-box">
      <label for="speed">Speed</label>
      <input id="speed" type="number" bind:value={character.speed} size="5"/>
    </div>
    <div class="stat-box">
      <label for="max-hit-points">Max Hit Points</label>
      <input id="max-hit-points" type="number" bind:value={character.maxHitPoints} size="5"/>
    </div>
    <div class="stat-box">
      <label for="current-hit-points">Current Hit Points</label>
      <input id="current-hit-points" type="text" bind:value={character.currentHitPoints} size="5"/>
    </div>
    <div class="stat-box">
      <label for="temporary-hit-points">Temporary Hit Points</label>
      <input id="temporary-hit-points" type="text" bind:value={character.temporaryHitPoints} size="4"/>
    </div>
  </div>
  <div>
    <h3>Hit Dice</h3>
    <div class="flex">
      <div class="stat-box">
        <label for="hit-dice-total">Total</label>
        <input id="hit-dice-total" type="text" bind:value={character.hitDiceTotal}/>
      </div>
      <div class="stat-box">
        <label for="hit-dice">Hit Dice</label>
        <input id="hit-dice" type="text" bind:value={character.hitDice}/>
      </div>
    </div>
  </div>

  <div>
    <h3>Death Saves</h3>
    <table class="stat-box">
      <tbody>
        <tr>
          <td>Sucesses</td>
          <td><input type="checkbox" bind:value={character.deathSaveSucess1}/></td>
          <td><input type="checkbox" bind:value={character.deathSaveSucess2}/></td>
          <td><input type="checkbox" bind:value={character.deathSaveSucess3}/></td>
        </tr>
        <tr>
          <td>Failures</td>
          <td><input type="checkbox" bind:value={character.deathSaveFail1}/></td>
          <td><input type="checkbox" bind:value={character.deathSaveFail2}/></td>
          <td><input type="checkbox" bind:value={character.deathSaveFail3}/></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
