function validarDataEvento(data, Hoje) {
    let dataEvento = new Date(data)
    let datahoje = new Date(Hoje)
    
    console.log(dataEvento)
    
    if(dataEvento > datahoje) {
        console.log("Cadastro Permitido")
    } else {
        console.log("Cadastro não Permitido");
    }
}

function validarIdade(idade){
    let idadeMinima = idade

    if(idadeMinima >= 18){
        console.log ("Cadastro Permitido")
    } else{
        console.log("Cadastro não Permitido")
    }
}

let Participantes = ["jão","Pedro", "Batista", "Alfeu"];

function CadastrarParticipantes(nomes){
    
    Participantes = Participantes.concat(nomes)
   
    if(Participantes.length <= 100){
        console.log ("Cadastro Permitido")
    } else{
        console.log("Cadastro não Permitido")
    }
    
}

function MostrarParticipantes(){
    //Mostrar os nomes
    for(let contador = 0; contador < Participantes.length; contador++){
        console.log (Participantes[contador])
        
    }
console.log("Participantes até o momento " + Participantes.length)

}



validarDataEvento('02/25/2022','02/03/2022')

validarIdade(28)

CadastrarParticipantes(["Benedita", "Roni", "Aldenia", "Daniel", "Josefa", "Emanuel", "Jeroboão"])
MostrarParticipantes()
