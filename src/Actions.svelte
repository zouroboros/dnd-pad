<script>
    let diceValues = ['', '', '', '', '', '', '', '', '']

    const randomInteger = (max) => Math.floor(Math.random() * max + 1)

    const rollDice = (event) => {
        const max = event.target.dataset.diceMax;
        const diceIndex = event.target.dataset.diceIndex;
        diceValues[diceIndex] = randomInteger(max);
        // to trigger ui update
        diceValues = diceValues;
    }
</script>

<style>

</style>

<div class="actions gothic">
    <h1>Actions</h1>
    <section>
        <h2>Dice rolls</h2>
        <p>
            <button data-dice-index="0" data-dice-max="2" on:click={rollDice}>Roll D2</button> <span>{diceValues[0]}</span>
        </p>
        <p>
            <button data-dice-index="1" data-dice-max="3" on:click={rollDice}>Roll D3</button> <span>{diceValues[1]}</span>
        </p>
        <p>
            <button data-dice-index="2" data-dice-max="4" on:click={rollDice}>Roll D4</button> <span>{diceValues[2]}</span>
        </p>
        <p>
            <button data-dice-index="3" data-dice-max="6" on:click={rollDice}>Roll D6</button> <span>{diceValues[3]}</span>
        </p>
        <p>
            <button data-dice-index="4"data-dice-max="8" on:click={rollDice}>Roll D8</button> <span>{diceValues[4]}</span>
        </p>
        <p>
            <button data-dice-index="5" data-dice-max="10" on:click={rollDice}>Roll D10</button> <span>{diceValues[5]}</span>
        </p>
        <p>
            <button data-dice-index="6" data-dice-max="12" on:click={rollDice}>Roll D12</button> <span>{diceValues[6]}</span>
        </p>
        <p>
            <button data-dice-index="7" data-dice-max="20" on:click={rollDice}>Roll D20</button> <span>{diceValues[7]}</span>
        </p>
        <p>
            <button data-dice-index="8" data-dice-max="100" on:click={rollDice}>Roll D100</button> <span>{diceValues[8]}</span>
        </p>
    </section>
    <section>
        <h2>Saving throws</h2>
    </section>
</div>