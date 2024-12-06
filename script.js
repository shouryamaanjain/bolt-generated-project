const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentNumber = '';
    let previousNumber = '';
    let operator = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
          currentNumber = '';
          previousNumber = '';
          operator = '';
          display.value = '';
        } else if (value === '=') {
          const result = calculate();
          display.value = result;
          currentNumber = result.toString();
          previousNumber = '';
          operator = '';
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
          operator = value;
          previousNumber = currentNumber;
          currentNumber = '';
        } else {
          currentNumber += value;
          display.value = currentNumber;
        }
      });
    });

    function calculate() {
      let result;

      switch (operator) {
        case '+':
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case '-':
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case '*':
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case '/':
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        default:
          result = 0;
      }

      return result;
    }
