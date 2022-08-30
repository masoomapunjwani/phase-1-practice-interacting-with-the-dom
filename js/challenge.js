document.addEventListener('DOMCONTENTLOADED', () => {
    //See the timer increment every second once the page has loaded
    const counterIncrease = setInterval(counterIncrement, 1000);
    window. timer = counterIncrease;

    //listen to the minus button
    const minus = document.querySelector('#minus');
    minus.addEventListener('click', decrementCounter);

    const plus = document.querySelector('#plus');
    plus.addEventListener('click', incrementCounter);

    const heart = document.querySelector('#heart');
    heart.addEventListener('click', likeMessage);

    const pause = document.querySelector('#pause');
    pause.addEventListener('click', pauseResume);

    const form = document.querySelector('form');
    form.addEventListener('submit', postComment);

})

function counterIncrement(){
    const counter = document.querySelector('#counter');
    counter.textContent = parseInt(counter.textContent, 10) + 1;
}
function decrementCounter(){
    const counter = document.querySelector('#counter');
    counter.textContent = parseInt(counter.textContent, 10) - 1;
}

function incrementCounter(){
    const counter = document.querySelector('#counter');
    counter.textContext = parseInt(counter.textContent) + 1;
}

//declare an object to hold liked numbers
const likedNumbers = {};

function likeMessage(){
    const likes = document.querySelector('.likes');
    //grab counter
    const counter = document.querySelector('#counter');
    if (likedNumbers[counter.textContent]){
        likeMessage[counter.textContent] +=1;

        //grab FileList
        const li = document.querySelector(`.number${counter.textContent}`)
        li.innerText = `${counter.textContent} has been liked ${likedNumbers[counter.textContent]} times.`
    } else {
        likedNumbers[content.textContent] = 1;


        const li = document.createElement('li');
        li.className = `number${counter.textContent}`//gave it a class name
        li.textContent = `${counter.textContent} has been liked ${likedNumbers[counter.textContent]} times`;
        likes.append(li);
    }
}
//pause and resume counter
function pauseResume(event){
    //create an object with button labels
    const labels = {
        'pause': 'resume',
        'resume': 'pause'
    }
    event.target.innerText = labels[event.target.innerText]//switch the label
    //disable all the button
    if(event.target.innerText === 'resume'){
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        clearInterval(timer)
    }else{
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        timer = setInterval(counterIncrement, 1000);
    }
}

function postComment(event){
    event.preventDefault();

    const comment = event.target['comment-input'].value;

    const p = document.createElement('p');
    p.textContent = comment;

    const commentsDiv = document.querySelector('.comments');
    commentsDiv.appendChild(p);

    //reset the form
    event.target.reset();
}
