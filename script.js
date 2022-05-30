function generate(){

    const numbers = [...Array(6).keys()].map((_) =>  Math.floor(Math.random() * 60 + 1));
    const unicNumbers = new Set(numbers);

    const newElement = document.createElement('div');
    newElement.className = "newNumber";
    
    const selElement = document.querySelector('.megaSema');
    selElement.appendChild(newElement)

    if (unicNumbers.size !== numbers.length) {
      console.log('you have dublicatees', unicNumbers, numbers);
      return;
     }
    newElement.innerHTML = `<h1>${numbers}</h1>`;
    console.log('All is cool', unicNumbers, numbers)
    return;
  }
