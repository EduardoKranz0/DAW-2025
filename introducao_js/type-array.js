const arrayValor = [1, 2, 3, 4, 5, 6];
console.log(arrayValor);

const arrayObects = [
    {nome: 'Fulano de Tal' , idade: 23, presidente: false},
    {nome: 'Lula da Silva' , idade: 80, presidente: true}
];
console.log('Antes: ', arrayObects)

arrayObects.push(
    {nome: 'Dilma Rousseff' , idade:63, presidente: false}
)
console.log('Depois: ', arrayObects);