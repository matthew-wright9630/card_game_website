// const gameDescriptionElement = document.querySelector(".game__collection_hidden");

const cardDeckList = document.querySelector(".deck__card-list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".deck__card");;

function createCard(number) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".deck__card-image");

    cardImage.src = `/images/Card-image-updated-names/Card-${number}.svg`;
    cardImage.value = number;
    return cardElement
}

function createDeckOfCards() {
    let cardElement = {}
    for (let i=1; i<=52; i++) {
        cardElement = createCard(i);
        cardDeckList.append(cardElement);
    }
    
}

createDeckOfCards();