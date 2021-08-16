const mostrarReloj = _ =>{
    let fecha = new Date();
    let hour = formatoHora(fecha.getHours());
    let minutes = formatoHora(fecha.getMinutes());
    let seconds = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hour}:${minutes}:${seconds}`;

    const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    const meses = ['Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${dia}, ${diaSemana} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora = hora =>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
};

setInterval(mostrarReloj, 1000);
