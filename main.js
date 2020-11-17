const firstRow = 'мама мыла раму'; 
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
	let char1, char2;

	for (let i = 0; i < firstRow.length; i++) {
		if (firstRow[i] === 'a') {
			char1++;
		}
	}
	for(let i = 0; i < secondRow.length; i++) {
		if (secondRow[i] === 'a') {
			char2++;
		}
	}
	if (char1 > char2) {
		return firstRow;
	} else {
		return secondRow;
	}
}

console.log(getRow(firstRow, secondRow));
