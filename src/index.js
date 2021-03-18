import './styles.css';

const inputRef = document.querySelector('.js-form');
inputRef.addEventListener('submit', onCheck)

const arrFam = ['Іванов', 'Петров','Карпинський'];
const arrNme = ['Іван', 'Петро','Сергій']
const arrPn = ['Іванович', 'Петрович']

function onCheck(e) {
    
    e.preventDefault();
    
    const surValue = e.currentTarget.checksur.value;
    const nameValue = e.currentTarget.checkname.value;
    const pnValue = e.currentTarget.checkpn.value;
    console.log(surValue);
    console.log(nameValue);
    console.log(pnValue);
    arrFam.forEach(name => {
        if (surValue.toLowerCase().includes(name.toLowerCase())||nameValue.toLowerCase().includes(name.toLowerCase())) {
            console.log('есть совпадения фамилии или имени');
        }
    });
    arrNme.forEach(name => {
        if (nameValue.toLowerCase().includes(name.toLowerCase())||surValue.toLowerCase().includes(name.toLowerCase())) {
            console.log('есть совпадения имени или фамилии');
        }
    });
    arrPn.forEach(name => {
        if (pnValue.toLowerCase().includes(name.toLowerCase())) {
            console.log('есть совпадения отчества');
        }
    });

    // if (value.includes('Іванов')) {
    //     console.log('Содержит фамилию');
    // } if (value.includes('Іван')) {
    //     console.log('Содержит имя');
    // }
    
    
    // else {
    //     console.log(' Не содержит имя');
    // }

}