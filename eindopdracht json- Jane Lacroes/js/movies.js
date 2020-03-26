//
//Maak event listener voor loading







var header = document.querySelector('header');
var section = document.querySelector('section');

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
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj[0].title;
    header.appendChild(myH1);

    const myRelease = document.createElement('p');
    myRelease.textContent = jsonObj[0].release_date;
    header.appendChild(myRelease);

    const MyCover = document.createElement('img');
    MyCover.src = jsonObj[0].cover;

    //create a event listener for preloader when page is requested
    MyCover.addEventListener('load', function () {
        //pakt loader class en
        var loader = document.querySelector('.loader');
        loader.classList.add('loader-finish');


    });


    header.appendChild(MyCover);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);


};


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
