var data = [
    {
        img: "./images/Kawasan.png",
        country: "Cebu - PHILIPPINES",
        place: "Kawasan Falls",
        describe: 
                "The Kawasan Falls is a three-stage cascade of clear turquoise water from mountain springs located in the jungles of the Cebu island. The falls are part of the Kawasan River in Badian, Cebu, in the Philippines."

    },
    {
        img: "./images/Osmenapeak.png",
        country: "Cebu - PHILIPPINES",
        place: "Osmeña Peak",
        describe: 
                "Standing at 1,013 meters above sea level, Osmeña Peak is Cebu’s highest. The peak is one of several spire-like formations comprising the Mantalongon Mountain Range in Dalaguete. The town of Dalaguete is known as the “Vegetable Basket of Cebu” because of the crops it supplies to the whole province."
    },
    {
        img: "./images/Sardine.png",
        country: "Cebu - PHILIPPINES",
        place: "Sardine Run",
        describe: 
                "The Sardine Run is a phenomenon where large numbers of sardines swim about in groups big enough to block out the light from the sun. They make their way from the deep into the shallows to feed on planktons."
    },
    {
        img: "./images/Sumilon.png",
        country: "Cebu - PHILIPPINES",
        place: "Sumilon Island",
        describe: 
                "This 24-hectare island is situated on the southern tip of the leading Cebu Island. It is privately owned by a resort, but it is open to the public for a minimal entrance fee."
    },
    {
        img: "./images/Taoist.png",
        country: "Cebu - PHILIPPINES",
        place: "Taoist Temple",
        describe: 
                "The Cebu Taoist Temple one of the famous landmarks in Cebu City. Built-in 1972 by Cebu's Chinese community, the Taoist Temple is a colorful and multi-tiered complex located inside the Beverly Hills Subdivision. "
    },
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx: 0">${data[i].country}
                </h5>
            </span>
            <span>
                <h1 class="place" style="--idx: 1">${data[i].place}
                </h1>
            </span>
            <span>
                <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 3">Discover Now</button>
            </span>
        </div>
    `;

    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(
    ".thumbnail-list .wrapper"
);

thumbnailListWrapper.innerHTML += `
        <div class="thumbnail zoom">
            <img src="${data[0].img}" alt="">
        </div>
        `;
for (let i = 1; i < data.length; i++){
    thumbnailListWrapper.innerHTML += `
            <div class="thumbnail" style="--idx: ${i-1}">
                <img src="${data[i].img}" alt="">
            </div>
            `;
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++){
        thumbnailListWrapper.children[i].style = `--idx: ${i-2}`;
    }
    if (currentIndex < data.length - 1){
        currentIndex++;
    }
    else currentIndex = 0;
    for (let i = 0; i<data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});