/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//create variable that can be used trought the code
var header = document.querySelector('section');
var section1 = document.querySelector('.one');
var section2 = document.querySelector('.two');
var section3 = document.querySelector('.tree');
var section4 = document.querySelector('.four');
var section5 = document.querySelector('.five');
var section6 = document.querySelector('.six');
var section7 = document.querySelector('.plot1');

var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"; //request json url file with the link
var request = new XMLHttpRequest(); // sends request to get information from json
request.open('GET', requestURL);
request.responseType = 'json'; // set filetype to json
request.send(); // send request to servers
request.onload = function () {
    const Movies = request.response;
    console.log(request.response);
    populateHeader(Movies);
};

//function to generate the content from the json file. create new element in section and add content selected from array
function populateHeader(jsonObj) {

    const MyCover1 = document.createElement('img');
    MyCover1.src = jsonObj[0].cover;
    section1.appendChild(MyCover1);

    const MyCover2 = document.createElement('img');
    MyCover2.src = jsonObj[1].cover;
    section2.appendChild(MyCover2);

    const MyCover3 = document.createElement('img');
    MyCover3.src = jsonObj[2].cover;
    section3.appendChild(MyCover3);

    const MyCover4 = document.createElement('img');
    MyCover4.src = jsonObj[3].cover;
    section4.appendChild(MyCover4);

    const MyCover5 = document.createElement('img');
    MyCover5.src = jsonObj[4].cover;
    section5.appendChild(MyCover5);

    const MyCover6 = document.createElement('img');
    MyCover6.src = jsonObj[5].cover;
    section6.appendChild(MyCover6);

    const myRelease1 = document.createElement('p');
    myRelease1.textContent = jsonObj[0].title;
    section1.appendChild(myRelease1);

    const myRelease2 = document.createElement('p');
    myRelease2.textContent = jsonObj[1].title;
    section2.appendChild(myRelease2);

    const myRelease3 = document.createElement('p');
    myRelease3.textContent = jsonObj[2].title;
    section3.appendChild(myRelease3);

    const myRelease4 = document.createElement('p');
    myRelease4.textContent = jsonObj[3].title;
    section4.appendChild(myRelease4);

    const myRelease5 = document.createElement('p');
    myRelease5.textContent = jsonObj[4].title;
    section5.appendChild(myRelease5);

    const myRelease6 = document.createElement('p');
    myRelease6.textContent = jsonObj[5].title;
    section6.appendChild(myRelease6);

    const MyPlot1 = document.createElement('p');
    MyPlot1.textContent = jsonObj[0].plot;
    section1.appendChild(MyPlot1);

    const MyPlot2 = document.createElement('p');
    MyPlot2.textContent = jsonObj[1].plot;
    section2.appendChild(MyPlot2);

    const MyPlot3 = document.createElement('p');
    MyPlot3.textContent = jsonObj[2].plot;
    section3.appendChild(MyPlot3);

    const MyPlot4 = document.createElement('p');
    MyPlot4.textContent = jsonObj[3].plot;
    section4.appendChild(MyPlot4);

    const MyPlot5 = document.createElement('p');
    MyPlot5.textContent = jsonObj[4].plot;
    section5.appendChild(MyPlot5);

    const MyPlot6 = document.createElement('p');
    MyPlot6.textContent = jsonObj[5].plot;
    section6.appendChild(MyPlot6);

    //create a event listener for preloader when page is requested
    MyCover1.addEventListener('load', function () {
        //grabs .loader classlist and display aniamtion when the imges are loaded.
        var loader = document.querySelector('.loader');
        loader.classList.add('loader-finish');
    });

    header.appendChild(MyCover);
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    section.appendChild(myPara);


}

//create variables for drag event
//code src https://codepen.io/knyttneve/pen/XWrVYQB and edited
const projects = document.querySelectorAll(".project");
const drop = document.querySelector(".drop");
const showcase = document.querySelector(".projecttop");

let start,
    offsetY,
    offsetX,
    targetRect,
    target,
    dropped = false,
    expanded = false;

//create event hadelers staes if and els for difrent steps in interation by using css class list to change the ui states,

const stopped = () => {
    start = false;
    if (target) {
        showcase.classList.remove("is-dragging");
        target.classList.remove("is-selected");
        drop.classList.remove("is-active");
        drop.classList.remove("is-ready");
    }
    if (dropped) {
        showcase.classList.add("is-preview");
        target.classList.add("is-expanded");
        drop.classList.add("is-dropped");
        drop.textContent = "CLOSE";
        expanded = true;
    } else {
        drop.classList.remove("is-dropped");
        showcase.classList.remove("is-preview");
        target.classList.remove("is-expanded");
        drop.textContent = "CLICK, HOLD AND DROP HERE TO SEE INFO";
        expanded = false;
    }
};

//if element is selected and is dragging grab classlist on mouse ui interaction drag and touch.

const started = (e, type) => {
  start = true;
  target = e.target;
  if (type === "touch") {
    console.log(e.touches[0]);
    offsetY = target.offsetWidth / 2 + target.offsetTop;
    offsetX = target.offsetWidth / 2 + target.offsetLeft;
  } else {
    offsetY = e.offsetY + target.offsetTop;
    offsetX = e.offsetX + target.offsetLeft;
  }
  targetRect = target.getBoundingClientRect();
  target.classList.add("is-selected");
  showcase.classList.add("is-dragging");
};

//event listeners for mouse and touch selections

projects.forEach(project => {
    project.addEventListener("mousedown", e => {
        started(e, "mouse");
    });
    project.addEventListener("touchstart", e => {
        started(e, "touch");
    });
});

const docUp = () => {
    if (!expanded && target) {
        stopped();
    }
};

document.addEventListener("mouseup", () => {
    docUp();
});
document.addEventListener("touchend", () => {
    docUp();
});

const docMove = (e, type) => {
    let clientX = 0,
        clientY = 0;

    if (type === "touch") {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    if (
        clientY > drop.offsetTop &&
        clientY < drop.offsetTop + drop.offsetHeight &&
        clientX > drop.offsetLeft &&
        clientX < drop.offsetLeft + drop.offsetWidth &&
        start &&
        !expanded
    ) {
        drop.classList.add("is-ready");
        dropped = true;
    } else {
        drop.classList.remove("is-ready");
        dropped = false;
    }

    if (start && !expanded) {
        target.style.transform = `translateY(${clientY -
      offsetY}px) translateX(${clientX - offsetX}px)`;
    }
};

document.addEventListener("mousemove", e => {
    docMove(e, "mouse");
});
document.addEventListener("touchmove", e => {
    docMove(e, "touch");
});

drop.addEventListener("click", () => {
    if (expanded) {
        dropped = false;
        target.style.transform = "none";
        stopped();
    }
});


