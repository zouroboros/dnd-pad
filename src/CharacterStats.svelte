<script>
  export let character = {};
</script>

<style>
</style>

<div class="flex">
  <section class="stat-box">
    <label for="strength">Strength</label>
    <div class="modifier"><input bind:value={character.strengthModifier} type="number" size="1" /></div>
    <input id="strength" bind:value={character.strength} type="number" size="2" min="0" />
  </section>
  <div class="stat-box">
    <label for="dexterity">Dexterity</label>
    <div class="modifier"><input bind:value={character.dexterityModifier} type="number" size="1" /></div>
    <input id="dexterity" bind:value={character.dexterity} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="constitution">Constitution</label>
    <div class="modifier"><input bind:value={character.constitutionModifier} type="number" size="1" /></div>
    <input id="constitution" bind:value={character.constitution} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="intelligence">Intelligence</label>
    <div class="modifier"><input bind:value={character.intelligenceModifier} type="number" size="1" /></div>
    <input id="intelligence" bind:value={character.intelligence} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="wisdom">Wisdom</label>
    <div class="modifier"><input bind:value={character.wisdomModifier} type="number" size="1" /></div>
    <input id="wisdom" bind:value={character.wisdom} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label for="charisma">Charisma</label>
    <div class="modifier"><input bind:value={character.charismaModifier} type="number" size="1" /></div>
    <input id="charisma" bind:value={character.charisma} type="number" size="2" min="0" />
  </div>
</div>
