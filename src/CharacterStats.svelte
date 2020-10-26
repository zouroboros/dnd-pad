<script>
  export let character = {};
</script>

<style>
</style>

<div class="flex">
  <div class="stat-box">
    <label>Strength</label>
    <div class="modifier"><input bind:value={character.strengthModifier} type="number" size="1" /></div>
    <input bind:value={character.strength} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label>Dexterity</label>
    <div class="modifier"><input bind:value={character.dexterityModifier} type="number" size="1" /></div>
    <input bind:value={character.dexterity} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label>Constitution</label>
    <div class="modifier"><input bind:value={character.constitutionModifier} type="number" size="1" /></div>
    <input bind:value={character.constitution} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label>Intelligence</label>
    <div class="modifier"><input bind:value={character.intelligenceModifier} type="number" size="1" /></div>
    <input bind:value={character.intelligence} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label>Wisdom</label>
    <div class="modifier"><input bind:value={character.wisdomModifier} type="number" size="1" /></div>
    <input bind:value={character.wisdom} type="number" size="2" min="0" />
  </div>
  <div class="stat-box">
    <label>Charisma</label>
    <div class="modifier"><input bind:value={character.charismaModifier} type="number" size="1" /></div>
    <input bind:value={character.charisma} type="number" size="2" min="0" />
  </div>
</div>
