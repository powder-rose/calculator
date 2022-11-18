let action;
        let result;

        let getResult = () => {
            let number1 = Number(document.getElementById('num1').value);
            let number2 = Number(document.getElementById('num2').value);
            switch (action) {
                case '+': result = number1 + number2; break;
                case '-': result = number1 - number2; break;
                case '*': result = number1 * number2; break;
                case '/': result = number1 / number2; break;
            }

            if (number1 / number2 && number2 == 0) {
                result = 'Вы не можете делить на ноль!'
            }

            document.getElementById('result').innerHTML = result;
        }