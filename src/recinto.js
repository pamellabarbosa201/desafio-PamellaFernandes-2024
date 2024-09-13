import Animal from './animal.js'
class Recinto{
    animais = []
    constructor(id, bioma, tamanho){
        this.id = id
        this.bioma = bioma
        this.tamanho = tamanho    
        this.tamanhoFinal = tamanho
       }
    
       teste(){
        console.log(id, bioma)
       }

       adicionaAnimal(animalArray) {
        if (Array.isArray(animalArray) && animalArray.every(item => item instanceof Animal)) {
            animalArray.forEach(element => {
                this.tamanhoFinal = this.tamanhoFinal - element.tamanho          
         });
         this.animais = animalArray
        } else {
            console.log('Não é um array de Animal');
        }
    }

    //    adicionaAnimal(Animal){
    //     console.log(typeof Animal)
    //     Animal.array.forEach(element => {
    //         this.tamanho - element.tamanho
    //     });
    //         this.animais = Animal
    //    }
}


export default Recinto