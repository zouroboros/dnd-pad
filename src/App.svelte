<script>
	import equal from 'deep-equal';

	import { afterUpdate } from 'svelte';
	import CharacterName from './CharacterName.svelte';
	import CharacterPanel from './CharacterPanel.svelte';
	import CharacterStats from './CharacterStats.svelte';
	import SingleState from './SingleStat.svelte';
	import SavingThrows from './SavingThrows.svelte';
	import Skills from './Skills.svelte';
	import HitPoints from './HitPoints.svelte';
	import BackgroundInfos from './BackgroundInfos.svelte';
	import Attacks from './Attacks.svelte';
	import Spells from './Spells.svelte';
	import PropertyList from './PropertyList.svelte';
	import Equipment from './Equipment.svelte';

	let loadCharacter = () => JSON.parse(window.localStorage.getItem('dnd-pad-character'));
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
					// Upgrade missing fields
					if(!json.spellSlots) {
						json.spellSlots = [];
					}
					if(!json.spellcastingAbility) {
						json.spellcastingAbility = null;
						json.spellsaveDc = null;
						json.spellattackBonus = null;
					}
					// end upgrade
					saveCharacter(json);
					character = json;
				}
			};
			reader.readAsText(file);
		}
	}
</script>

<style>
.character-sheet > div {
	margin-bottom: 2rem;
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
	<form class="character-sheet gothic">
			<h1>Character</h1>
			<div>
				<CharacterName bind:character={character} />
			</div>
			<div>
				<CharacterPanel bind:character={character} />
			</div>
			<div>
				<CharacterStats bind:character={character} />
			</div>
			<div>
				<SingleState name={'Inspiration'} bind:stat={character.inspiration} />
			</div>
			<div>
				<SingleState name={'Proficiency Bonus'} bind:stat={character.proficiency} />
			</div>
			<div>
				<SavingThrows bind:saving={character.saving}/>
			</div>
			<div>
				<Skills bind:character={character}/>
			</div>
			<div>
				<SingleState name={'Passive Wisdom (Perception)'} bind:stat={character.passiveWisdom} />
			</div>
			<div>
				<HitPoints bind:character={character}/>
			</div>
			<div>
				<BackgroundInfos bind:character={character}/>
			</div>
			<div>
				<Attacks bind:character={character} />
			</div>
			<div>
				<Spells bind:character={character} />
			</div>
			<div>
				<h2>Other Proficiencies &amp; Languages</h2>
				<PropertyList bind:properties={character.otherProficiencies}/>
			</div>
			<div>
				<Equipment bind:character={character}/>
			</div>
			<div>
				<h2>Features & Traits</h2>
				<PropertyList bind:properties={character.featuresAndTraits}/>
			</div>
	</form>
</main>
