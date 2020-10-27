<script>
	import { afterUpdate } from 'svelte';
	import CharacterName from './CharacterName.svelte';
	import CharacterPanel from './CharacterPanel.svelte';
	import CharacterStats from './CharacterStats.svelte';
	import SingleState from './SingleStat.svelte';
	import SavingThrows from './SavingThrows.svelte';
	import Skills from './Skills.svelte';
	import HitPoints from './HitPoints.svelte';
	import BackgroundInfos from './BackgroundInfos.svelte';
	import AttacksSpellcasting from './AttacksSpellcasting.svelte';
	import PropertyList from './PropertyList.svelte';
	import Equipment from './Equipment.svelte';

	export let character = JSON.parse(window.localStorage.getItem('dnd-pad-character'));

	if(!character) {
		character = {
			saving: {},
			otherProficiencies: [],
			featuresAndTraits: [],
			attacks: []
		};
	}

	afterUpdate(() => {
		window.localStorage.setItem('dnd-pad-character', JSON.stringify(character));
	});

</script>

<style>
.character-sheet > div {
	margin-bottom: 2rem;
}
</style>

<main>
	<form class="character-sheet">
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
				<SingleState name={'Inspiration'} stat={character.inspiration} bind:value={character.inspiration} />
			</div>
			<div>
				<SingleState name={'Proficiency Bonus'} stat={character.proficiency} bind:value={character.proficiency} />
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
				<AttacksSpellcasting bind:character={character} />
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
