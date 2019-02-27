let numbers = [1, 2, 3, 4];

Array.prototype.customMap=function(callback) {
	let auxArray= []; 
	this.forEach((item,index)=>{
		auxArray.push(callback(item,index));
	});
	return auxArray;
};
console.log(`Numbers+1: ${numbers.customMap(number=>number+1)}`);
console.log(`Numbers + index: ${numbers.customMap((number,indice)=>number+indice)}`);
console.log('Undefined:',numbers.customMap(number=>{}));
console.log(`HasOwnProperty: ${numbers.hasOwnProperty('customMap')}`);
console.log(`in: ${'customMap' in numbers}`);





