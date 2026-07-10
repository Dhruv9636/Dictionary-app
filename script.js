const resultCard = document.querySelector(".result-card")
const searchCard = document.querySelector(".search-card")

const searchBar = document.querySelector("input")
const btn = document.querySelector(".search-btn")
const backBtn = document.querySelector(".backBtn")


const word = document.querySelector(".word")
const audio = document.querySelector("audio")
const pos = document.querySelector(".pos")
const syn = document.querySelector(".syn")
const ant = document.querySelector(".ant")

const getData = async () => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchBar.value}`)
    const data = await response.json()
    // data[0]
    word.innerHTML = data[0].word
    audio.setAttribute("src", data[0].phonetics[0].audio)
    pos.innerHTML = data[0].meanings[0].partOfSpeech
    syn.innerHTML = data[0].meanings[0].synonyms.join(", ")
    ant.innerHTML = data[0].meanings[0].antonyms
    searchBar.value = ""
}

function searchWord() {
    getData();
    resultCard.classList.remove("hide");
    searchCard.classList.add("hide");
}

btn.addEventListener("click", searchWord);

searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchWord();
    }
});



backBtn.addEventListener("click", () => {
    resultCard.classList.add("hide")
    searchCard.classList.remove("hide")
})