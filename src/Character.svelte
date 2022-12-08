<script>
    import CharacterName from './CharacterName.svelte';
    import GeneralInfos from './GeneralInfos.svelte';
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
    import Notes from './Notes.svelte';

    export let character;
</script>

<style lang="scss">
.character-sheet {
    > div {
	    margin-bottom: 2rem;
    }
}
</style>

<form class="character-sheet gothic">
    <h1>Character</h1>
    <div>
        <CharacterName bind:character={character} />
    </div>
    <div>
        <GeneralInfos bind:character={character} />
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
    <div>
        <Notes bind:notes={character.notes} />
    </div>
</form>