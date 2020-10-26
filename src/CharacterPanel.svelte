<script>
  export let character = {};
</script>

<style>
</style>

<div class="flex">
  <div class="stat-box">
    <label for="class-level">Class & Level</label>
    <input id="class-level" bind:value={character.classLevel} type="text" placeholder="King lv1" />
  </div>
  <div class="stat-box">
    <label for="background">Background</label>
    <input id="background" bind:value={character.background} type="text" placeholder="Hard working" />
  </div>
  <div class="stat-box">
    <label for="player-name">Player Name</label>
    <input id="player-name" bind:value={character.playerName} type="text" placeholder="Pepe Player" />
  </div>
  <div class="stat-box">
    <label for="race">Race</label>
    <input id="race" bind:value={character.race} type="text" placeholder="Human" />
  </div>
  <div class="stat-box">
    <label for="alignment">Alignment</label>
    <input id="alignment" bind:value={character.alignment} type="text" placeholder="Evil-Good" />
  </div>
  <div class="stat-box">
    <label for="experience-points">Experience Points</label>
    <input id="experience-points" bind:value={character.experience} type="text" placeholder="Character name" />
  </div>
</div>
