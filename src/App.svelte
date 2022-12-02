<script>
	import equal from 'deep-equal';

	import { afterUpdate } from 'svelte';
    import Character from './Character.svelte';

	let upgradeCharacter = function(characterObject) {
		if(!characterObject) {
			return null;
		}
		// Upgrade missing fields
		if(!characterObject.spellSlots) {
			characterObject.spellSlots = [];
		}
		if(!characterObject.spellcastingAbility) {
			characterObject.spellcastingAbility = null;
			characterObject.spellsaveDc = null;
			characterObject.spellattackBonus = null;
		}
		if(!characterObject.spells) {
			characterObject.spells = [];
		}
		if(!characterObject.notes) {
			characterObject.notes = null;
		}
		if(!characterObject.inspiration) {
			characterObject.inspiration = 0;
		}
		return characterObject
	};

	let loadCharacter = () => upgradeCharacter(JSON.parse(window.localStorage.getItem('dnd-pad-character')));
	let saveCharacter = (characterToSave) => window.localStorage.setItem('dnd-pad-character', JSON.stringify(characterToSave));
	export let character = loadCharacter();

	if(!character) {
		character = {
			saving: {},
			otherProficiencies: [],
			featuresAndTraits: [],
			attacks: [],
			spellSlots: [],
			passiveWisdom: 0,
			spells: [],
			spellcastingAbility: null,
			spellsaveDc: null,
			spellattackBonus: null,
			proficiency: 0,
			inspiration: 0,
			lastChanged: null
		};
	}

	afterUpdate(() => {
		let originalCharacter = loadCharacter();
		if (character && !equal(originalCharacter, character)) {
			character.lastChanged = new Date().getTime();
			saveCharacter(character)
		}
	});

	let save = function(characterToSave) {
		var blob = new Blob([JSON.stringify(characterToSave)], {type: 'text/json'});
		var url = URL.createObjectURL(blob);
		var link = document.createElement('a');
		link.download = (character.name ?? 'dnd-pad') + '.json'
		link.href = url;
		link.dispatchEvent(new MouseEvent('click'));
	};

	let open = function(event) {
		if(event.srcElement.files.length > 0) {
			var file = event.target.files[0];
			const reader = new FileReader();
			reader.onload = function(event) {
				const json = JSON.parse(event.target.result);
				if(json) {
					upgradeCharacter(json);
					saveCharacter(json);
					character = json;
				}
			};
			reader.readAsText(file);
		}
	}
</script>

<style>
.app-menu {
	position: fixed;
	bottom: 100;
}
</style>

<header class="hide-on-print">
	<button type="button" on:click={() => save(character)}>Save As</button>
	<input type="file" on:change={open} />
	{#if character.lastChanged}
		<span>Last change: {new Date(character.lastChanged).toLocaleString()}</span>
	{/if}
</header>
<main>
	<Character character={character}></Character>
	<menu class="app-menu">
		<li>Character sheet</li>
		<li>Actions</li>
	</menu>
</main>
