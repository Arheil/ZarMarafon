const $btn = document.getElementById('btn-kick');
const character = {
	name: 'Pikachu',
	defaultHP: 100,
	damageHP: 100,
	elHp: document.getElementById('health-character'),
	elProgressbar: document.getElementById('progressbar-character'),
	renderHP: renderHP,
	changeHP: changeHP,
	renderHPLife: renderHPLife,
	renderProgressbarHP: renderProgressbarHP
}

const enemy = {
	name: 'Charmander',
	defaultHP: 100,
	damageHP: 100,
	elHp: document.getElementById('health-enemy'),
	elProgressbar: document.getElementById('progressbar-enemy'),
	renderHP: renderHP,
	changeHP: changeHP,
	renderHPLife: renderHPLife,
	renderProgressbarHP: renderProgressbarHP
}

$btn.addEventListener('click', function() {
	console.log('Kick');
	character.changeHP(random(20));
	enemy.changeHP(random(20));
});

function init() {
	console.log('Start Game!');
	character.renderHP();
	enemy.renderHP();
	innerLogs();
	
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

function generateLog(firstPerson, secondPerson) {
	const logs = [
		`${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${this.damageHP}, ${this.elHp}`,
		`${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага.${damageHP}`,
		`${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${damageHP}`,
		`${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
		`${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${damageHP}`,
		`${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.${damageHP}`,
		`${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.${damageHP}`,
		`${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника${damageHP}`,
		`${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.${damageHP}`,
		`${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.${damageHP}`
	];

	return logs[random(logs.length) - 1];
}

function innerLogs() {
	const $logs = document.querySelector(#logs);

	for (let i = 0; i < 10; i++) {
		const $p = document.createElement('p');

		$p.innerText = `${i} ${logs}`;
		$logs.insertBefore($p, $logs.children[0]);
	}
}

init();
