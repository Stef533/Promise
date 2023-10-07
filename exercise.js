const number = 15; 

const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
      if (number > 10) {
        resolve(`${number} è maggiori di 10.`);
      } else {
        reject(`${number} è minore di 10.`);
      }
    });
  };
    
  checkNumber(number)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  
