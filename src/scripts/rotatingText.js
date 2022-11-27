export function rotatingText() {
  let words = ["tasty.", "cheap.", "good.", "fancy."];
  let newWordArr = [];
  let oldWordArr = [];
  let oldWord = "Nicholas";
  let newWord = "Edward Voelker";

  function split(newWord, oldWord) {
    for (let i = 0; i < newWord.length; i++) {
      newWordArr.push(newWord.charAt(i));
    }
    for (let i = 0; i < oldWord.length; i++) {
      oldWordArr.push(oldWord.charAt(i));
    }
  }

  // function wordChange(newWordArr, oldWordArr) {
  //   let numOfRotations = 0;
  //   newWordArr.length > oldWordArr.length
  //     ? (numOfRotations = newWordArr.length)
  //     : (numOfRotations = oldWordArr.length);
  //   for (let i = 0; i < numOfRotations; i++) {
  //     if (newWordArr[i] != undefined) {
  //       let newLetter = document.createElement("span");
  //       newLetter.setAttribute("id", "letter" + [i]);
  //       newLetter.innerText = newWordArr[i];
  //       document.getElementById("word").appendChild(newLetter);
  //     }
  //   }
  // }

  let n = 0;
  let speed = 500;
  function typeWriter() {
    if (n > newWordArr.length) {
      if (newWordArr[n] != undefined) {
        let newLetter = document.createElement("span");
        newLetter.setAttribute("id", "letter" + [n]);
        newLetter.innerText = newWordArr[n];
        document.getElementById("word").appendChild(newLetter);
      }
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
  function removeWord(arr) {
    for (let i = 0; i < arr.length; i++) {
      let oldLetter = document.getElementById("letter" + [i]);
    }
  }

  split(oldWord, newWord);
  // wordChange(newWordArr, oldWordArr);
}
