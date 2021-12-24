

// ------------------------------------------------------------------- PROJECT 4. COUNTER. -------------------------------------------------------------

// ING. Jorge Ortiz Mata.
// ortiz.mata.jorge@gmail.com
// San Luis Potosí S.L.P. México.
// (444) 576 3034.

// Hello! I'm Jorge. Today, I'm gonna show you this project that I built.
// In this project, you will be able to increase the value of several numbers shown in the sections below. Each of them have an specific value of increase.
// Come on, and have fun with this project.

// -------------------------------------------------------------------  COUNTERS SECTION ----------------------------------------------------------

// ---------------  CREATE VARIABLES ------------------

let numbers = [0, 0, 0];

// ---------------  SELECTING OBJECTS ------------------

const increaseNumberButtons = document.querySelectorAll ('.increaseNumber');
const decreaseNumberButtons = document.querySelectorAll ('.decreaseNumber');

// ---------------  CREATING FUNCTIONS. ------------------

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

// ---------------  CALLING FUNCTIONS ------------------

increaseNumberFunction();
decreaseNumberFunction();

// -------------------------------------------------------------------  SHOW MORE BUTTONS ----------------------------------------------------------

// ---------------  SELECTING OBJECTS ------------------

const firstSection = document.querySelector ('.firstSection');
const countersSection = document.querySelector ('.counters');

const showMoreButton = document.querySelector ('.buttonShowMore');
const goToCounters = document.querySelector ('.goToCounters');

// ---------------  CREATING FUNCTIONS ------------------

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

// ---------------  CALLING FUNCTIONS ------------------

goToCountersFunction();
showMoreFunction();

// -------------------------------------------------------------------  FIX NAV MENU ----------------------------------------------------------

// ---------------  SELECTING OBJECTS ------------------

const firstPart = document.querySelector ('.firstPart');

// ---------------  WINDOWS FUNCTION ------------------

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
