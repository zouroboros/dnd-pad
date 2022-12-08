<script>
    export let onSave;
    export let onOpen;
    export let lastChanged;
</script>

<style>

</style>

<div class="hide-on-print">
    <button type="button" on:click={onSave}>Save As</button>
    <input type="file" on:change={onOpen} />
    {#if lastChanged}
        <span>Last change: {new Date(lastChanged).toLocaleString()}</span>	
    {/if}
</div>