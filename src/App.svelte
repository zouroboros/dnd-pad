<script>
	import equal from 'deep-equal';

	import { afterUpdate } from 'svelte';
    import Character from './Character.svelte';
	import Actions from './Actions.svelte';
	import Settings from './Settings.svelte'

	import scrollSvg from './assets/scroll.svg'
	import diceSvg from './assets/dice.svg'
	import gearSvg from './assets/gear.svg'

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

	let inCharacterSheet = true;
	let inActions = false;

	const openCharacterSheet = () => {
		inCharacterSheet = true;
		inActions = false;
	}

	const openActions = () => {
		inCharacterSheet = false;
		inActions = true;
	}

	const openSettings = () => {
		inActions = false;
		inCharacterSheet = false;
	}
</script>

<style lang="scss">
main {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.app-screen {
	flex-grow: 1;
	flex-shrink: 1;
	width: 100%;
	overflow: scroll;
}
.app-menu {
	margin: 0;
	background-color: white;
	padding: 0;
	height: 5vh;
	flex-shrink: 0;
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	li {
		display: block;
		width: 33.3%;
		text-align: center;
		border: 0.1em solid black;

		&:not(:last-child) {
			border-right: none;
		}

		button {
			height: 100%;
			margin: 0;
			padding: 0;
			width: 100%;
			background: none;
			border: none;
		}

		img {
			height: 100%;
		}
	}
}
</style>

<main>
	<menu class="app-menu hide-on-print">
		<li><button type="button" on:click={openCharacterSheet}><img src="{scrollSvg}" alt="Character sheet"/></button></li>
		<li><button type="button" on:click={openActions}><img src="{diceSvg}" alt="Actions"/></button></li>
		<li><button type="button" on:click={openSettings}><img src="{gearSvg}" alt="Settings"/></button></li>
	</menu>
	<div class="app-screen">
		{#if inCharacterSheet}
			<Character bind:character={character}></Character>
		{:else if inActions}
			<Actions></Actions>
		{:else}
			<Settings onSave={() => save(character)} onOpen={(event) => open(event)} lastChanged={character.lastChanged}></Settings>
		{/if}
	</div>
</main>
