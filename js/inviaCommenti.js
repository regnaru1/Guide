const inviaCommenti=()=>{
    let nome=document.querySelector("#nome")
    console.log(nome.value)
    let cognome=document.querySelector("#cognome")
    console.log(cognome.value)
    let oggetto=document.querySelector("#oggetto")
    console.log(cognome.value)

    alert(
        "Grazie " + nome.value + " " + cognome.value + "," + "\n" + 
        "Abbiamo ricevuto la tua segnalazione che ha come oggetto " + oggetto.value
    )
}