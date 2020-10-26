<script>
  export let name;
  export let stat = '';
</script>
<style>
</style>

<div class="stat-box">
  <label for="{name}">{name}</label>
  <input id="{name}" bind:value={stat} type="text" size="4"/>
</div>
