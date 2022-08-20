function generateSena(max, quant) {
  var numeroS = [];
  while (numeroS.length < 6) {
    e = Math.ceil(Math.random() * 60);
    if (numeroS.indexOf(e) == -1) {
      numeroS.push(e);
    }
  }
  const newElement = document.createElement('div');
  newElement.className = 'newNumber';

  const selElement = document.querySelector('.containerNewNumberMega');
  selElement.appendChild(newElement);

  newElement.innerHTML = `<button class="close" type="submit">&times;</button>
                          <h3>${numeroS}</h3>`;

  //botão para excluir a task desejada
  const close_btns = document.querySelectorAll('.close'); //criar variavel com a clase informada

  close_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.style.display = 'none'; //crindo uma função de evendo para modificar o display da clase selecionada para none. isso não     exclui o elemento, somente deixa ele oculto.

      console.log(numeroS);
      return;
    });
  });
}

function generateFacil(max, quant) {
  var numeroS = [];
  while (numeroS.length < 15) {
    e = Math.ceil(Math.random() * 25);
    if (numeroS.indexOf(e) == -1) {
      numeroS.push(e);
    }
  }
  const newElement = document.createElement('div');
  newElement.className = 'newNumber';

  const selElement = document.querySelector('.containerNewNumberFacil');
  selElement.appendChild(newElement);

  newElement.innerHTML = `<button class="close" type="submit">&times;</button>
                          <h3>${numeroS}</h3>`;

  //botão para excluir a task desejada
  const close_btns = document.querySelectorAll('.close'); //criar variavel com a clase informada

  close_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.style.display = 'none'; //crindo uma função de evendo para modificar o display da clase selecionada para none. isso não     exclui o elemento, somente deixa ele oculto.

      console.log(numeroS);
      return;
    });
  });
}

function generateQuina(max, quant) {
  var numeroS = [];
  while (numeroS.length < 5) {
    e = Math.ceil(Math.random() * 80);
    if (numeroS.indexOf(e) == -1) {
      numeroS.push(e);
    }
  }
  const newElement = document.createElement('div');
  newElement.className = 'newNumber';

  const selElement = document.querySelector('.containerNewNumberQuina');
  selElement.appendChild(newElement);

  newElement.innerHTML = `<button class="close" type="submit">&times;</button>
                          <h3>${numeroS}</h3>`;

  //botão para excluir a task desejada
  const close_btns = document.querySelectorAll('.close'); //criar variavel com a clase informada

  close_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.style.display = 'none'; //crindo uma função de evendo para modificar o display da clase selecionada para none. isso não     exclui o elemento, somente deixa ele oculto.

      console.log(numeroS);
      return;
    });
  });
}
