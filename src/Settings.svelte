<script>
    export let onSave;
    export let onOpen;
    export let lastChanged;
</script>

<style>

</style>

<div class="hide-on-print">
    <h1>Settings</h1>
    <button type="button" on:click={onSave}>Save As</button>
    <input type="file" on:change={onOpen} />
    {#if lastChanged}
        <div>Last change: {new Date(lastChanged).toLocaleString()}</div>	
    {/if}
</div>