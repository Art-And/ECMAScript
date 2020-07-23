function newFuction(name, age, country){
    var name = name || 'oscar'
    var age = age || '25'
    var country = country || 'MX'
    console.log(name, age, country)
}
newFuction()

//Ecmascropt6
const newFuction2 = (name = 'oscar', age = '25', country = 'MX') =>{
    console.log(name,age,country)
}

newFuction2('Andres', '26', 'col')

//la concatenacion era era simple con + '' + cuando  no estaba ES6
let hello = 'Hello'
let world = 'World'
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase)

//para texto antes se requeria /n para el salto ahora se puede aplicar asi
let lorem = `Hola como estas
espero que muy bien`
console.log(lorem)

//




