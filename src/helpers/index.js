export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const diaTexto = diasSemana[nuevaFecha.getDay()];
    const diaNumero = nuevaFecha.getDate();
    const mes = meses[nuevaFecha.getMonth()];
    const anio = nuevaFecha.getFullYear();

    return `${diaTexto} ${diaNumero} de ${mes} ${anio}`;
};
