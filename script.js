function generateSena(max,quant) {
  var numeroS = []
  while (numeroS.length < 6) {
    e = Math.ceil(Math.random() * 60);
    if (numeroS.indexOf(e) == -1) {
      numeroS.push(e)
    }
  }
  const newElement = document.createElement('div');
  newElement.className = "newNumber";
  
  const selElement = document.querySelector('.megaSema');
  selElement.appendChild(newElement);


  newElement.innerHTML = `<h1>${numeroS}</h1>`;
  console.log(numeroS)
  return;
};




function generateFacil(max,quant) {
    var numeroS = []
    while (numeroS.length < 15) {
      e = Math.ceil(Math.random() * 25);
      if (numeroS.indexOf(e) == -1) {
        numeroS.push(e)
      }
    }
    const newElement = document.createElement('div');
    newElement.className = "newNumber";
    
    const selElement = document.querySelector('.lotoFacil');
    selElement.appendChild(newElement);


    newElement.innerHTML = `<h1>${numeroS}</h1>`;
    console.log(numeroS)
    return;
};



  function generateQuina(max,quant) {
    var numeroS = []
    while (numeroS.length < 5) {
      e = Math.ceil(Math.random() * 80);
      if (numeroS.indexOf(e) == -1) {
        numeroS.push(e)
      }
    }
    const newElement = document.createElement('div');
    newElement.className = "newNumber";
    
    const selElement = document.querySelector('.quina');
    selElement.appendChild(newElement);


    newElement.innerHTML = `<h1>${numeroS}</h1>`;
    console.log(numeroS)
    return;
};
