//
//Maak event listener voor loading

//var header = document.querySelector('section');
var section1 = document.querySelector('.one');
var section2 = document.querySelector('.two');
var section3 = document.querySelector('.tree');
var section4 = document.querySelector('.four');
var section5 = document.querySelector('.five');
var section6 = document.querySelector('.six');

let requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const Movies = request.response;
    console.log(request.response);
    populateHeader(Movies);
    //    showMovies(Movies);
};


function populateHeader(jsonObj) {
    //    const myH1 = document.createElement('h1');
    //    myH1.textContent = jsonObj[0].title;
    //    header.appendChild(myH1);
    //

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








    //create a event listener for preloader when page is requested
    MyCover1.addEventListener('load', function () {
        //pakt loader class en
        var loader = document.querySelector('.loader');
        loader.classList.add('loader-finish');


    });


    header.appendChild(MyCover);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    section.appendChild(myPara);


};



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
        drop.textContent = "DROP HERE";
        expanded = false;
    }
};

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




//function showMovies(jsonObj) {
//    const movies = jsonObj['members'];
//
//    for (let i = 0; i < movies.length; i++) {
//        const myArticle = document.createElement('article');
//        const myH2 = document.createElement('h2');
//        const myPara1 = document.createElement('p');
//        const myPara2 = document.createElement('p');
//        const myPara3 = document.createElement('p');
//        const myList = document.createElement('ul');
//
//        myH2.textContent = movies[i].name;
//        myPara1.textContent = 'Secret identity: ' + movies[i].secretIdentity;
//        myPara2.textContent = 'Age: ' + movies[i].age;
//        myPara3.textContent = 'Superpowers:';
//
//        const superPowers = movies[i].powers;
//        for (let j = 0; j < superPowers.length; j++) {
//            const listItem = document.createElement('li');
//            listItem.textContent = superPowers[j];
//            myList.appendChild(listItem);
//        }
//
//        myArticle.appendChild(myH2);
//        myArticle.appendChild(myPara1);
//        myArticle.appendChild(myPara2);
//        myArticle.appendChild(myPara3);
//        myArticle.appendChild(myList);
//
//        section.appendChild(myArticle);
//    }
//}
