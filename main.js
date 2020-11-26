import Pokemon from './pokemon.js';
import { useCounter, changeHP, random, generateLog, innerLogs } from './utilits.js';

const player1 = new Pokemon ({
	name: 'Pikachu',
	type: 'electric',
	hp: 500,
	selectors: 'character',
});

const player2 = new Pokemon ({
	name: 'Charmander',
	type: 'fire',
	hp: 450,
	selectors: 'enemy',
});


const $btn = document.getElementById('btn-kick');
const $btnShield = document.getElementById('btn-shield'); 

const btnCountJolt = useCounter(6, $btn);
$btn.addEventListener('click', function() {
	btnCountJolt();
	player1.changeHP(random(20), function (count) {
		console.log('Some change after change HP', count);
		console.log(generateLog(player1, player2, count));
	});
	player2.changeHP(random(20), function (count) {
		console.log('Some change after change HP', count);
	});
});

const btnCountShield = useCounter(10, $btnShield);
$btnShield.addEventListener('click', function () {
	btnCountShield();
	player2.changeHP(random(20));	
});


