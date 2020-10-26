<script>
  export let properties = [];

  let text = '';

  let add = function(property) {
    properties = [...properties, property]
  };

  let remove = function(property) {
    properties = properties.filter(p => p !== property)
  };
</script>

<style>
textarea {
  font-size: 125%;
}
</style>

<div class="stat-box">
<ul>
  {#each properties as property}
  <li>{@html property} <button type="button" on:click={remove(property)}>Remove</button></li>
  {/each}
</ul>
  <div>
    <textarea rows="2" columns="120" bind:value={text}></textarea><button type="button" on:click={add(text)}>Add</button>
  </div>
</div>
