const display = document.querySelector('#loadedContent');
const person1 = document.querySelectorAll('#person1');
const person2 = document.querySelector('#person2');
const person3 = document.querySelector('#person3');
const person4 = document.querySelector('#person4');
const person5 = document.querySelector('#person5');
const person6 = document.querySelector('#person6');


function downloadData(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/01")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'Donate now'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });
   
    // prograss bar
    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,    
    progressEndValue = 29,    
    speed = 100;
    
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `M${progressStartValue}00,00`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);



}
person1.addEventListener("click", downloadData);


function loadData(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/02")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'Donate now'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });
}
person2.addEventListener("click", loadData);

function displayInfo(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/03")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'Donate now'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,    
    progressEndValue = 45,    
    speed = 100;
    
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `M${progressStartValue}00,00`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

}
person3.addEventListener("click", displayInfo);

function showMore(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/04")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'Donate now'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,    
    progressEndValue = 15,    
    speed = 100;
    
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `M${progressStartValue}00,00`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

}
person4.addEventListener("click", showMore);

function seePerson5(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/05")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'like'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,    
    progressEndValue = 99,    
    speed = 100;
    
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `M${progressStartValue}00,00`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

}
person5.addEventListener("click", seePerson5);

function seePerson6(){
    display.textContent = "please wait...";
    fetch("https://lesotho-orphanages.vercel.app/06")
    .then((response) => response.json())
    .then((data) => {
        //clear all content inside display div
      display.textContent = "";
  
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const location = document.createElement('h3');
        const like = document.createElement('button');
  
        
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        name.innerText = `Name: ${data.name}`
        location.innerText =`location: ${data.location}`
       like.textContent = 'Donate now'
  
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(location)
        div.appendChild(like)
        display.appendChild(div)
    });


    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,    
    progressEndValue = 79,    
    speed = 100;
    
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `M${progressStartValue}00,00`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);
}
person6.addEventListener("click", seePerson6);