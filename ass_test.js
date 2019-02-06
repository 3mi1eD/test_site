'use strict';

// const testElement = 
// const testElement2 = document.getElementById('2')
// const testElement3 = document.getElementById('3')
// const testElement4 = document.getElementById('4')
// const testElement5 = document.getElementById('5')
// const testElement6 = document.getElementById('6')
// const testElement7 = document.getElementById('7')
const actionButton = document.getElementById('button')



const randomNr = () => Math.floor(Math.random() * 100 + 1)
let counter = 0;

let score = '';


const changeScore = () => {
    if (counter <= 6) {
        counter = counter + 1;
    } else {
        counter = 1;
    }
    // for (let i = 1; i < 8; i++) {
    // document.getElementById(counter).style.backgroundColor = `(${randomNr()})`;
    // }     
    const elementToChange = document.getElementById(counter)
    const randomValue = randomNr()
    elementToChange.innerHTML = `${randomValue}`;

    if (randomValue <= 50) {
        document.getElementById(counter).style.color = `rgb(0,255,0)`;
    }
    else if (randomValue >= 51 && randomValue < 76) {
        document.getElementById(counter).style.color = `rgb(255,255,0)`;
    }
    else if (randomValue >= 76 && randomValue <= 90) {
        document.getElementById(counter).style.color = `rgb(255,141,0)`;
    }
    else if (randomValue >= 91 && randomValue <= 100) {
        document.getElementById(counter).style.color = `rgb(255,0,0)`;
    }
}


actionButton.onclick = changeScore;
// actionButton.onclick = colorScore;
//  const colorScore = () => {
//      if (score <= 50) {
//          document.getElementById(score).style.color = `rgb(0,255,0)`;
//      } else if (score >= 51 <= 75) {
//          document.getElementById(score).style.color = `rgb(255,255,0)`;
//      } else if (score >= 76 <= 90) {
//          document.getElementById(score).style.color = `rgb(255,141,0)`;
//      } else {
//          document.getElementById(score).style.color = `rgb(255,0,0)`;
//      }
//  }
// }
// }


        // }

        // testElement1.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement2.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement3.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement4.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement5.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement6.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // testElement7.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
        // }


