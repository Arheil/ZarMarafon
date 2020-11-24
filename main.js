const $btn = document.getElementById('btn-kick');
const $btnShield = document.getElementById('btn-shield'); 

const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHp: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character'),
	renderHP,
	changeHP,
	renderHPLife,
	renderProgressbarHP,
	generateLog,

}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHp: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy'),
	renderHP,
	changeHP,
	renderHPLife,
	renderProgressbarHP,
	generateLog,
}

$btn.addEventListener('click', function() {
	console.log('Kick');
	character.changeHP(random(20));
	enemy.changeHP(random(20));
	character.generateLog();
	enemy.generateLog();
	return clickCounter();
});

$btnShield.addEventListener('click', function () {
	
	return clickCounter();
	
})

function useCounter() {
	let clicks = 1;
	console.log(clicks);
	return function () {
		(clicks === 6) ? $btnShield.disabled = true : false;
		return clicks++;
	}	
}

const clickCounter = useCounter();

function init() {
	console.log('Start Game!');
	character.renderHP();
	enemy.renderHP();
	
}

function renderHP() {
	character.renderHPLife();
	character.renderProgressbarHP();
	enemy.renderHPLife();
	enemy.renderProgressbarHP();
}


function renderHPLife() {
	this.elHp.innerText = this.damageHP + ' / '+ this.defaultHP;
	
}

function renderProgressbarHP() {
	this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count, person) {
	this.damageHP -= count;
	
	const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
	console.log(log);

	if (this.damageHP < count) {
		this.damageHP = 0;
		alert(this.name + 'Проиграл');
		$btn.disabled = true;
	}	

	this.renderHP();
}

function random(num) {
	return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson = character, secondPerson = enemy) {
	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.${this.damageHP}, ${this.elHp}`
	];

	return logs[random(logs.length) - 1];
}

function innerLogs() {
	const $logs = document.querySelector('#logs');

	for (let i = 0; i < 10; i++) {
		const $p = document.createElement('p');

		$p.innerText = `${i} ${$logs}`;
		$logs.insertBefore($p, $logs.children[0]);
	}
}

init();
