function diasDelMes(mes) {

    // Get the value from the input field with ID "mes"
    mes = document.getElementById("mes").value;
    let resultado2 = document.getElementById("resultado2"); // Element to display the result

    // Check the month input using a switch statement
    switch (mes.toLowerCase()) { // Convert input to lowercase for consistency
        case 'enero': // Cases for January
        case '01':
        case '1':
            resultado2.innerHTML = `Enero tiene 31 días`; // Display days for January
            break;
        case 'febrero': // Cases for February
        case '02':
        case '2':
            resultado2.innerHTML = `Febrero tiene 28 días`; // Display days for February
            break;
        case 'marzo': // Cases for March
        case '03':
        case '3':
            resultado2.innerHTML = `Marzo tiene 31 días`; // Display days for March
            break;
        case 'abril': // Cases for April
        case '04':
        case '4':
            resultado2.innerHTML = `Abril tiene 30 días`; // Display days for April
            break;
        case 'mayo': // Cases for May
        case '05':
        case '5':
            resultado2.innerHTML = `Mayo tiene 31 días`; // Display days for May
            break;
        case 'junio': // Cases for June
        case '06':
        case '6':
            resultado2.innerHTML = `Junio tiene 30 días`; // Display days for June
            break;
        case 'julio': // Cases for July
        case '07':
        case '7':
            resultado2.innerHTML = `Julio tiene 31 días`; // Display days for July
            break;
        case 'agosto': // Cases for August
        case '08':
        case '8':
            resultado2.innerHTML = `Agosto tiene 31 días`; // Display days for August
            break;
        case 'septiembre': // Cases for September
        case '09':
        case '9':
            resultado2.innerHTML = `Septiembre tiene 30 días`; // Display days for September
            break;
        case 'octubre': // Cases for October
        case '10':
            resultado2.innerHTML = `Octubre tiene 31 días`; // Display days for October
            break;
        case 'novimebre': // Cases for November (note typo: should be 'noviembre')
        case '11':
            resultado2.innerHTML = `Noviembre tiene 30 días`; // Display days for November
            break;
        case 'diciembre': // Cases for December
        case '12':
            resultado2.innerHTML = `Diciembre tiene 31 días`; // Display days for December
            break;
        default:
            resultado2.innerHTML = `Mes no valido`; // Handle invalid input
            break;
    }
}
