(function(){
	'use strict';
	let x = 1 , arr = [], y = 2;
	arr.push(x,y);
	let res = arr.map((n,indice)=>{
		console.log(`El numero en el indice ${indice} es : ${n}`);
		return n + 1;
	});
	console.log(res); // [2,3]
})();	