function generateSena(){

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
  };




  function generateFacil(){

    const numbers = [...Array(15).keys()].map((_) =>  Math.floor(Math.random() * 25 + 1));
    const unicNumbers = new Set(numbers);

    const newElement = document.createElement('div');
    newElement.className = "newNumber";
    
    const selElement = document.querySelector('.lotoFacil');
    selElement.appendChild(newElement)

    if (unicNumbers.size !== numbers.length) {
      console.log('you have dublicatees', unicNumbers, numbers);
      return;
     }
    newElement.innerHTML = `<h1>${numbers}</h1>`;
    console.log('All is cool', unicNumbers, numbers)
    return;
  };



  function generateQuina(){

    const numbers = [...Array(5).keys()].map((_) =>  Math.floor(Math.random() * 80 + 1));
    const unicNumbers = new Set(numbers);

    const newElement = document.createElement('div');
    newElement.className = "newNumber";
    
    const selElement = document.querySelector('.quina');
    selElement.appendChild(newElement)

    if (unicNumbers.size !== numbers.length) {
      console.log('you have dublicatees', unicNumbers, numbers);
      return;
     }
    newElement.innerHTML = `<h1>${numbers}</h1>`;
    console.log('All is cool', unicNumbers, numbers)
    return;
  }