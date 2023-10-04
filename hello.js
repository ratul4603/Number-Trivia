
const form = document.querySelector("form");
const input = document.querySelector("input");
const radomFactBtn = document.getElementById("random-fact-btn");
const resultBox = document.querySelector(".result-box");
const url = 'http://numbersapi.com/';


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputValue = input.value;

     if(inputValue == ""){
        resultBox.innerHTML = `
            <h1 class="error">The input field cannot be empty</h1>
          `;
    }else if(inputValue >= 0 && inputValue <= 300){
        fetch(url + inputValue)
        .then((res)=>res.text())
        .then((data)=>{
            resultBox.innerHTML = `
                <h1>${inputValue}</h1>
                <p>${data}</p>
            `;
        })
    }else{
            resultBox.innerHTML = `
                <h1 class="error">Please Enter a Number between Zero to 300.</h1>
            `;
    }

    input.value = "";
});


const getRandomFactPage = ()=>{

    let randomNumber = Math.ceil(Math.random() * 301) - 1;

    fetch(url + randomNumber)
    .then((res)=>res.text())
    .then((data)=>{

        resultBox.innerHTML = `
            <h1>${randomNumber}</h1>
            <p>${data}</p>
        `;
    });
};

radomFactBtn.addEventListener("click", getRandomFactPage);

window.addEventListener("load", getRandomFactPage);

