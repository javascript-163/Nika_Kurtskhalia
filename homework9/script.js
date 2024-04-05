function loadFile() {
  return new Promise((resolve, reject) => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    let textInfo = document.querySelector(".textInfo");

    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function (event) {
        let numOfSymbols = event.target.result.length;

        let wordArray = event.target.result.split(" ");
        let numOfWords = wordArray.length;

        let longestWord = "";
        let shortestWord = "";
        for (let i = 0; i < numOfWords; i++) {
          if (wordArray[i].length < shortestWord.length) {
            shortestWord = wordArray[i];
          }

          if (wordArray[i].length > longestWord.length) {
            longestWord = wordArray[i];
          }

          if (i === 0) {
            shortestWord = wordArray[i];
          }
        }

        textInfo.textContent = `Total symbols: ${numOfSymbols},  
                            Total Words: ${numOfWords}, 
                            Longest Word: ${longestWord}, 
                            Shortest Word: ${shortestWord}, 
                            Average Length: ${(numOfSymbols - numOfWords + 1) / numOfWords}.
                            `;
        textInfo.style.display = "block";
        document.getElementById("textInput").innerHTML = event.target.result;
      };
    }
  });
}

function loadImg() {
  return new Promise((resolve, reject) => {
    const image = document.querySelector(".image");
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function (event) {
        image.src = event.target.result;
        image.style.display = "block";
        image.width = "400";
      };
    }
  });
}

function loadAll() {
  return new Promise((resolve, reject) => {
    const video3 = document.querySelector(".video3");
    const video3Link = document.querySelector(".source");
    const image3 = document.querySelector(".image3");
    const text3 = document.querySelector(".text3");

    const fileInput = document.getElementById("input");
    const file = fileInput.files[0];

    if (
      file &&
      (file["type"] === "image/gif" ||
        file["type"] === "image/jpeg" ||
        file["type"] === "image/png")
    ) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function (event) {
        image3.src = event.target.result;
        image3.style.display = "block";
        image3.width = "400";
      };
    } else if (file["type"] === "video/mp4") {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function (event) {
        let videosrc = event.target.result;
        video3Link.setAttribute("src", videosrc);
        video3.load();
        video3.style.display = "block";
      };
    } else if (file["type"] === "text/plain"){
        const reader = new FileReader();

        reader.readAsText(file);
  
        reader.onload = function (event) {
            text3.textContent = event.target.result;
            text3.style.display = "block";
        }
    }
  });
}
