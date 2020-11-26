class Selectors {
	constructor(name) {
		this.elHP = document.getElementById(`health-${name}`);
		this.elProgressbar = document.getElementById(`progressbar-${name}`);
	}
}

class Pokemon extends Selectors {
	constructor({ name, hp, type, selectors }) {
		super(selectors);

		this.name = name;
		this.hp = {
			current: hp,
			total: hp,
		}
		this.type = type;

		this.renderHP();
	}

	changeHP = (count, cb) => {
		this.hp.current -= count;
	
		if (this.hp.current <= 0) {
			this.hp.current = 0;
			$btn.disabled = true;
		}	
	
		this.renderHP();
		cb && cb(count);
	}

	renderHP = () => {
		this.renderHPLife();
		this.renderProgressbarHP();
	}
	
	
	renderHPLife = () => {
		const { elHp, hp: { current, total } } = this;
	
		this.innerText = current + ' / '+ total;
	}
	
	renderProgressbarHP = () => {
		const { hp: { current, total }, elProgressbar } = this;
		const procent = current / (total / 100);
		elProgressbar.style.width = procent + '%';
	}
}

export default Pokemon;