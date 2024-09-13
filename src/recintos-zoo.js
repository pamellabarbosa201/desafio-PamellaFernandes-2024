import Recinto from './recinto.js'
import Animal from './animal.js'

const animaisEnum = {
    LEAO: {
        type: "leao",
        size: 3,
        habitat: ['savana'],
        food: 'carnivoro'
      },
      LEOPARDO: {
        type: "leopardo",
        size: 2,
        habitat: ['savana'],
        food: 'carnivoro'
      },
      CROCODILO: {
        type: "crocodilo",
        size: 3,
        habitat: ['rio'],
        food: 'carnivoro'
      },
      MACACO: {
        type: "macaco",
        size: 1,
        habitat: ['savana', 'floresta'],
        food: 'onivoro'
      },
      GAZELA: {
        type: "gazela",
        size: 2,
        habitat: ['savana'],
        food: 'herbivoro'
      },
      HIPOPOTAMO: {
        type: "hipopotamo",
        size: 4,
        habitat: ['savana', 'rio'],
        food: 'herbivoro'
      }

}

class RecintosZoo {
    recintos = []

    construa(){
        var animaisRecinto1 = [
            new Animal(animaisEnum.MACACO.type, animaisEnum.MACACO.size, animaisEnum.MACACO.food),
            new Animal(animaisEnum.MACACO.type, animaisEnum.MACACO.size, animaisEnum.MACACO.food),
            new Animal(animaisEnum.MACACO.type, animaisEnum.MACACO.size, animaisEnum.MACACO.food)
        ];
        const recinto1 = new Recinto(1, "savana", 10, animaisRecinto1)
        
        recinto1.adicionaAnimal(animaisRecinto1)
        this.recintos.push(recinto1)


        const recinto2 = new Recinto(2, "floresta", 5)
        this.recintos.push(recinto2)


        var animaisRecinto3 = [
            new Animal(animaisEnum.GAZELA.type, animaisEnum.GAZELA.size, animaisEnum.GAZELA.food) ,
        ];

        const recinto3 = new Recinto(3, "savana e rio", 7, animaisRecinto3)
        recinto3.adicionaAnimal(animaisRecinto3)
        this.recintos.push(recinto3)



         const recinto4 = new Recinto(4, "rio", 8);
         this.recintos.push(recinto4);



         var animaisRecinto5 = [
             new Animal(animaisEnum.LEAO.type, animaisEnum.LEAO.size, animaisEnum.LEAO.food)
           ];
           const recinto5 = new Recinto(5, "savana", 9);
           recinto5.adicionaAnimal(animaisRecinto5);
            this.recintos.push(recinto5);


       // console.log(this.recintos)
    }

    analisaRecintos(animal, quantidade) {
        let recintosViaveis = {
            recintosViaveis: []
        }
        this.construa()
        if(quantidade <= 0){
            let error = {
                erro: "Quantidade inválida"
            }

            return error
        }
        if(animal == animaisEnum.MACACO.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.MACACO.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.MACACO.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.MACACO.type.toUpperCase()){
                                maisDeUmaEspecie = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        }   
                        if(quantidade * animaisEnum.MACACO.size <= element.tamanhoFinal){
                                                
                        if(temCarnivoroEspecieDiferente == false){
                            recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.MACACO.size) ) + " total: " + element.tamanho + ")")
                        }
                            
                        }                       
                    }      
                })
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else if(animal == animaisEnum.LEAO.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.LEAO.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.nome.toUpperCase() == animaisEnum.LEAO.type.toUpperCase()){
                                temCarnivoroEspecieDiferente = false
                            }else if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.LEAO.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.LEAO.type.toUpperCase()){
                                maisDeUmaEspecie = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        }
                        if(quantidade * animaisEnum.LEAO.size <= element.tamanhoFinal){
                               
                            if(temCarnivoroEspecieDiferente == false){
                                recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.LEAO.size) ) + " total: " + element.tamanho + ")")
                            }
                    }
                    }      
                })                         
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else if(animal == animaisEnum.LEOPARDO.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.LEOPARDO.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.LEOPARDO.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.LEOPARDO.type.toUpperCase()){
                                temCarnivoroEspecieDiferente = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        }  
                        if(quantidade * animaisEnum.LEOPARDO.size <= element.tamanhoFinal){
                            
                            if(temCarnivoroEspecieDiferente == false){
                                recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.LEOPARDO.size) ) + " total: " + element.tamanho + ")")
                            }
                    }
                    }      
                })
                         
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else if(animal == animaisEnum.CROCODILO.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.CROCODILO.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.CROCODILO.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.CROCODILO.type.toUpperCase()){
                                maisDeUmaEspecie = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        } 
                        if(quantidade * animaisEnum.CROCODILO.size <= element.tamanhoFinal){
                              
                            if(temCarnivoroEspecieDiferente == false){
                                recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.CROCODILO.size) ) + " total: " + element.tamanho + ")")
                            }
                    }
                    }      
                })                         
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else if(animal == animaisEnum.GAZELA.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.GAZELA.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.GAZELA.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.GAZELA.type.toUpperCase()){
                                maisDeUmaEspecie = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        }  
                        if(quantidade * animaisEnum.GAZELA.size <= element.tamanhoFinal){                            
                            if(temCarnivoroEspecieDiferente == false){
                                recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.GAZELA.size) ) + " total: " + element.tamanho + ")")
                            }
                    }
                    }      
                })                         
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else if(animal == animaisEnum.HIPOPOTAMO.type.toUpperCase()){
            this.recintos.forEach(element => {
                animaisEnum.HIPOPOTAMO.habitat.forEach(x => {
                    if(element.bioma.includes(x)){
                        let temCarnivoroEspecieDiferente = false
                        let maisDeUmaEspecie = false
                        element.animais.forEach(y => {
                            if(y.tipoDeAlimentacao == "carnivoro" || animaisEnum.HIPOPOTAMO.food == "carnivoro"){
                                temCarnivoroEspecieDiferente = true
                            }
                            if(y.nome.toUpperCase() != animaisEnum.HIPOPOTAMO.type.toUpperCase()){
                                maisDeUmaEspecie = true
                            }
                        })
                        if(maisDeUmaEspecie == true){                            
                            element.tamanhoFinal = element.tamanhoFinal  - 1
                        }   
                        if(quantidade * animaisEnum.HIPOPOTAMO.size <= element.tamanhoFinal){
                            
                            if(temCarnivoroEspecieDiferente == false){
                                recintosViaveis.recintosViaveis.push("Recinto " + element.id + " (espaço livre: " + (element.tamanhoFinal - (quantidade * animaisEnum.HIPOPOTAMO.size) ) + " total: " + element.tamanho + ")")
                            }
                        }
                    }      
                })                         
            });
            if(recintosViaveis.recintosViaveis.length > 0){
                return recintosViaveis;
            }else{
                let error = {
                    erro: "Não há recinto viável"
                }
                return error
            }
        }else{
            let error = {
                erro: "Animal inválido"
            }
            return error;
        }
        
        console.log(recintosViaveis)
    }

}
console.log(new RecintosZoo().analisaRecintos('LEAO', 2)) 

export { RecintosZoo as RecintosZoo };
