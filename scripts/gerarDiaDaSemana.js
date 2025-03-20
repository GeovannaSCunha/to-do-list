function gerarDiaDaSemana() {
    let dateOfWeek = ""; 
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })

    if (diaDaSemana == "segunda-feira") {
        dateOfWeek = "monday"
    } else if (diaDaSemana == "terça-feira") {
        dateOfWeek = "tuesday"
    } else if (diaDaSemana == "quarta-feira") {
        dateOfWeek = "wednesday"
    } else if (diaDaSemana == "quinta-feira") {
        dateOfWeek = "thursday"
    } else if (diaDaSemana == "sexta-feira") {
        dateOfWeek = "friday"
    } else if (diaDaSemana == "sábado") { 
        dateOfWeek = "saturday"
    } else {
        dateOfWeek = "sunday"
    }

    const dataCompleta = `${dateOfWeek} (${data}) at ${hora}`

    return dataCompleta
}

export default gerarDiaDaSemana;