<script>
  export let character = {};
  let name = '';
  let bonus = '';
  let damage = '';
  let type = '';

  let add = function() {
    character.attacks = [...character.attacks, {name: name, bonus: bonus, damage: damage, type: type}];
  }

  let remove = function(nameToRemove) {
    character.attacks = character.attacks.filter(a => a.name !== nameToRemove);
  }
</script>

<style>
table.stat-box input {
  width: 100%;
}
</style>

<div>
  <h2>Attacks</h2>
  <table class="stat-box">
    <thead>
      <td>Name</td>
      <td>Attack Bonus</td>
      <td>Damage</td>
      <td>Type</td>
    </thead>
    <tbody>
      {#each character.attacks as attack}
      <tr>
        <td>
          {attack.name}
        </td>
        <td>
          {attack.bonus}
        </td>
        <td>
          {attack.damage}
        </td>
        <td>
          {attack.type}
        </td>
        <td>
          <button type="button" on:click={remove(attack.name)}>Remove</button>
        </td>
      </tr>
      {/each}
      <tr>
        <td>
          <input id="attack-name" type="text" bind:value={name}/>
        </td>
        <td>
          <input Id="attack-bonus" type="number" bind:value={bonus} min="0"/>
        </td>
        <td>
          <input id="attack-damage" type="text" bind:value={damage}/>
        </td>
        <td>
          <input id="attack-type" type="text" bind:value={type}/>
        </td>
        <td>
          <button type="button" on:click={add}>Add</button>
        </td>
      </tr>
    </tbody>
  </table>


</div>
