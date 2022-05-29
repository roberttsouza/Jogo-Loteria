function generate(){
    const numbers = [...Array(6).keys()].map((_) =>  Math.floor(Math.random() * 60 + 1));
    const unicNumbers = new Set(numbers);
    if (unicNumbers.size !== numbers.length) {
      console.log('you have dublicatees', unicNumbers, numbers)
      return;
     }
    console.log('All is cool', unicNumbers, numbers)
    return;
  }
