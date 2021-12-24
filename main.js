
const increaseNumberButtons = document.querySelectorAll ('.increaseNumber');
const decreaseNumberButtons = document.querySelectorAll ('.decreaseNumber');
let numbers = [0, 0, 0];

increaseNumberFunction = () => {

    increaseNumberButtons[0].addEventListener ('click', function () {
        let object = increaseNumberButtons[0].parentElement.previousElementSibling;
        numbers[0] = numbers[0] + 2;
        object.innerHTML = `${numbers[0]}`;

    });

    increaseNumberButtons[1].addEventListener ('click', function () {
        let object = increaseNumberButtons[1].parentElement.previousElementSibling;
        numbers[1] = numbers[1] + 5;
        object.innerHTML = `${numbers[1]}`;

    });

    increaseNumberButtons[2].addEventListener ('click', function () {
        let object = increaseNumberButtons[2].parentElement.previousElementSibling;
        numbers[2] = numbers[2] + 10;
        object.innerHTML = `${numbers[2]}`;

    });

}

decreaseNumberFunction = () => {

    decreaseNumberButtons[0].addEventListener ('click', function () {
        let object = decreaseNumberButtons[0].parentElement.previousElementSibling;
        numbers[0] = numbers[0] - 2;
        object.innerHTML = `${numbers[0]}`;

    });

    decreaseNumberButtons[1].addEventListener ('click', function () {
        let object = decreaseNumberButtons[1].parentElement.previousElementSibling;
        numbers[1] = numbers[1] - 5;
        object.innerHTML = `${numbers[1]}`;

    });

    decreaseNumberButtons[2].addEventListener ('click', function () {
        let object = decreaseNumberButtons[2].parentElement.previousElementSibling;
        numbers[2] = numbers[2] - 10;
        object.innerHTML = `${numbers[2]}`;

    });
} 

increaseNumberFunction();
decreaseNumberFunction();





const firstSection = document.querySelector ('.firstSection');
const countersSection = document.querySelector ('.counters');

const showMoreButton = document.querySelector ('.buttonShowMore');
const goToCounters = document.querySelector ('.goToCounters');


showMoreFunction = () => {

    showMoreButton.addEventListener ('click', function () {
        
        window.scrollTo ({
            top: firstSection.offsetTop,
            left: 0,
        });

    });
};

goToCountersFunction = () => {

    goToCounters.addEventListener ('click', function () {
        
        window.scrollTo ({
            top: countersSection.offsetTop,
            left: 0,
        });

    });

}

goToCountersFunction();
showMoreFunction();



const firstPart = document.querySelector ('.firstPart');

window.addEventListener ('scroll', function () {


    let scrollCounterSectionValue = countersSection.offsetTop;
    let scrollValue = window.pageYOffset;

    scrollValue = parseInt (scrollValue);

    if (scrollValue >= 1153){
        countersSection.classList.add ('countersAnimation');
    }

    if (scrollValue >= 70) {
        firstPart.classList.add ('firstPartScroll');
    }

    else if (scrollValue < 70) {
        firstPart.classList.remove ('firstPartScroll');
    }

});
