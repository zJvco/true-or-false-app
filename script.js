const btnVal = document.getElementById('btnVal');

btnVal.addEventListener('click', () => {
    const txt1 = document.getElementById('txt1');
    const operator = document.getElementById('operator');
    const txt2 = document.getElementById('txt2');

    const txt1Value = txt1.value;
    const txt2Value = txt2.value;
    const operatorValue = operator.value;

    if (txt1Value.length > 0 && operatorValue.length > 0 && txt2Value.length > 0) {
        const resultMessage = document.getElementById('resultMessage');
        const result = calcBool(txt1Value, operatorValue, txt2Value);

        resultMessage.innerText = result;
        resultMessage.style.color = '#17A589';
    }
    else {
        const warningContainer = document.querySelector('.warning-container');

        warningContainer.firstElementChild.innerText = 'Preencha os campos!';

        warningContainer.style.transform = 'translateY(-50%)';

        setTimeout(() => {
            warningContainer.style.transform = 'translateY(100%)';
        }, 5000);
    }
})

function calcBool(val1, op, val2) {
    if (op === '===') return val1 === val2;
    else if (op === '==') return val1 == val2;
    else if (op === '!==') return val1 !== val2;
    else if (op === '!=') return val1 != val2;
    else if (op === '>') return val1.length > val2.length;
    else if (op === '>=') return val1.length >= val2.length;
    else if (op === '<') return val1.length < val2.length;
    else if (op === '<=') return val1.length <= val2.length;
    else return 'OPERADOR INVÁLIDO!';
};