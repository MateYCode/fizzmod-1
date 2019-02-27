let members = { pedro: 35, ana: 18, carlos: 43, juan: 21, maria: 29, angela: 31, jose: 23, mariana: 41, eugenio: 19 };
let firstGroup = [];
let secondGroup = [];
Object.keys(members).sort()
  .forEach((key, i)=> {
      members[key]>40||members[key]<25?firstGroup = [...firstGroup, key]:secondGroup = [...secondGroup, key];
   });  
console.log(firstGroup);
console.log(secondGroup);
