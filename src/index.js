module.exports = function toReadable (number) {
	let one = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ];
	let two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
	let tens = ['twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety']
	if(number == 0){ return 'zero'}
	if(number <= 9) {
		return one[number-1];
	}
	if(number > 9 &&  number <= 19){
		return two[('' + number).split('')[1]];
	}
	if (number > 19 && number < 100) {
        if(('' + number).split('')[1] == 0){ return tens[('' + number).split('')[0] - 2]}
		return tens[('' + number).split('')[0] - 2] + ' ' + one[('' + number).split('')[1] - 1]
	}
	if ( number > 99 &&  number <= 999) {
		if(('' + number).split('')[1] == 0 && ('' + number).split('')[2] == 0){return one[('' + number).split('')[0] - 1] + ' ' + 'hundred'};
		if(+('' + number).slice(1,3) == 10){return one[('' + number).split('')[0] - 1] + ' ' + 'hundred' + ' ' + 'ten'};
		if(+(('' + number).slice(1,3)) <= 19 && +(('' + number).slice(1,3)) > 10) {return one[('' + number).split('')[0] - 1] + ' ' + 'hundred' + ' '  + two[('' + number).split('')[2]]}
		if(('' + number).split('')[1] == 0){ return one[('' + number).split('')[0] - 1] + ' ' + 'hundred' + ' '  + one[('' + number).split('')[2] - 1]};
		if(('' + number).split('')[2] == 0){ return one[('' + number).split('')[0] - 1] + ' ' + 'hundred' + ' ' + tens[('' + number).split('')[1] - 2]};
		if(('' + number).split('')[2] == 0 && ('' + number).split('')[1] == 0){ return one[('' + number).split('')[0] - 1] + ' ' + 'hundred'};
		return one[('' + number).split('')[0] - 1] + ' ' + 'hundred' + ' ' + tens[('' + number).split('')[1] - 2] + ' ' + one[('' + number).split('')[2] - 1]
	}

}
 
















