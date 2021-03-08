
function makeCardUi(option) {

    let cardDiv;
    if (!option.class && !option.id) {
        console.error('You need to insert id element or class')
    } else if (!option.value || !option.suit) {
        console.error('You need to insert value and suit')
    } else {

        if (option.class) {
            cardDiv = document.querySelector(`.${option.class}`);
        } else if (option.id) {
            cardDiv = document.querySelector(`#${option.id}`);
        }

        if (cardDiv) {
            const suits = {
                'H': '♥',
                'C': '♠',
                'D': '♦',
                'S': '♣',
                'h': '♥',
                'c': '♠',
                'd': '♦',
                's': '♣',
                '♥': '♥',
                '♠': '♠',
                '♦': '♦',
                '♣': '♣',
            }

            let simbol = suits[option.suit]
            let value;
            cardDiv.classList.add('card-ui');
            let cardWidth, cardHeight, cardRadius, cardBorderWidth, cardBorderColor;
            if (Number(option.value) === 11 || option.value === 'j' || option.value === 'J') {
                value = 'J';
            } else if (Number(option.value) === 12 || option.value === 'Q' || option.value === 'q') {
                value = 'Q';
            } else if (Number(option.value) === 13 || option.value === 'K' || option.value === 'k') {
                value = 'K';
            } else if (Number(option.value) === 14 || option.value === 'A' || option.value === 'a' || Number(option.value) === 1) {
                value = 'A';
            } else {
                value = option.value;
            }
            if (option.suit === 'H' || option.suit === 'h' || option.suit === '♥' || option.suit === 'D' || option.suit === '♦' || option.suit === 'd') {
                cardDiv.classList.remove('black-card')
                cardDiv.classList.add('red-card')
            } else if (option.suit === 'C' || option.suit === 'c' || option.suit === '♠' || option.suit === 'suit' || option.suit === '♣' || option.suit === 's') {
                cardDiv.classList.remove('red-card')
                cardDiv.classList.add('black-card')
            }

            if (option.width > 0 && option.height == '' || option.width > 0 && option.height == null || option.width > 0 && option.height == undefined) {
                cardWidth = Number(option.width) + 'px';
                cardHeight = Number(option.width * 1.4) + 'px';
            } else if (option.width == '' && option.height > 0 || option.width == null && option.height > 0 || option.width == undefined && option.height > 0) {
                cardWidth = Number(option.height) + 'px';
                cardHeight = Number(option.height * 1.4) + 'px';
            } else if (option.width > 0 && option.height > 0 || option.width > 0 && option.height > 0 || option.width > 0 && option.height > 0) {
                cardHeight = Number(option.height) + 'px';
                cardWidth = Number(option.width) + 'px';
            } else if (option.width == '' && option.height == '' || option.width == null && option.height == null || option.width == undefined && option.height == undefined) {
                cardHeight = '210px';
                cardWidth = '150px';
            }



            if (option.radius == '' || option.radius == null || option.radius == undefined) {
                cardRadius = '5px';
            } else {
                cardRadius = Number(option.radius) + 'px';
            }
            if (option.borderSize > 0) {
                if (option.borderSize == '' || option.borderSize == null || option.borderSize == undefined) {
                    cardBorderWidth = '2px';
                } else if (option.borderSize === 'none') {
                    cardBorderWidth = null
                } else {
                    cardBorderWidth = Number(option.borderSize) + 'px';
                }
            } else {
                if (option.borderFlip == '' || option.borderFlip == null || option.borderFlip == undefined) {
                    cardBorderWidth = '2px';
                } else if (option.borderFlip = 'none') {
                    cardBorderWidth = null
                } else {
                    cardBorderWidth = Number(option.borderFlip) + 'px';
                }
            }

            if (option.borderColor == '' || option.borderColor == null || option.borderColor == undefined) {
                cardBorderColor = 'black';
            } else {
                cardBorderColor = option.borderColor;
            }
            let border;
            if (cardBorderWidth === null) {
                border = 'none'
            } else {
                border = `${cardBorderWidth} solid ${cardBorderColor}`
            }


            if (value == 'J' || value == 'Q' || value == 'K' || value == 'j' || value == 'q' || value == 'k' || value == 'A' || value == 'a') {
                cardDiv.innerText = value;

            } else {
                if (option.type === 'value') {
                    cardDiv.innerText = value;
                } else if (option.type === 'suit') {
                    cardDiv.innerText = simbol
                } else {
                    cardDiv.innerText = value;
                }
            }

            let splitHeight = cardHeight.split("px")[0]
            let sizeRoot = Number(splitHeight) / 2.3;
            let sizeAfterRoot = Number(splitHeight) / 7;
            let leftRightRoot = Number(splitHeight) / 32.81;
            let topLeftRoot = Number(splitHeight) / 32.81;


            cardDiv.style.setProperty("--s-a", `${sizeAfterRoot}px`);
            cardDiv.style.setProperty("--s-c", `${sizeRoot}px`);
            cardDiv.style.setProperty("--l-r", `${leftRightRoot}px`);
            cardDiv.style.setProperty("--t-p", `${topLeftRoot}px`);
            cardDiv.style.setProperty("--h", cardHeight);
            cardDiv.style.setProperty("--w", cardWidth);
            cardDiv.style.setProperty("--b-r", cardRadius);
            cardDiv.style.setProperty("--b", border);
            cardDiv.setAttribute('data-value', `${value}${simbol}`)
        } else {
            console.error('Something wrong with the class or id')
        }
    }

}

function makeBackCardUi(option) {

    let cardDiv;
    if (!option.class && !option.id) {
        console.error('You need to insert id element or class')

    } else if (!option.src && !option.color) {

        console.error('You need to insert img or background color')
    } else {

        if (option.class) {
            cardDiv = document.querySelector(`.${option.class}`);
        } else if (option.id) {
            cardDiv = document.querySelector(`#${option.id}`);
        }

        if (cardDiv) {

            cardDiv.classList.add('card-back', 'card-ui');
            if (option.width > 0 && option.height == '' || option.width > 0 && option.height == null || option.width > 0 && option.height == undefined) {
                cardWidth = Number(option.width) + 'px';
                cardHeight = Number(option.width * 1.4) + 'px';
            } else if (option.width == '' && option.height > 0 || option.width == null && option.height > 0 || option.width == undefined && option.height > 0) {
                cardWidth = Number(option.height) + 'px';
                cardHeight = Number(option.height * 1.4) + 'px';
            } else if (option.width > 0 && option.height > 0 || option.width > 0 && option.height > 0 || option.width > 0 && option.height > 0) {
                cardHeight = Number(option.height) + 'px';
                cardWidth = Number(option.width) + 'px';
            } else if (option.width == '' && option.height == '' || option.width == null && option.height == null || option.width == undefined && option.height == undefined) {
                cardHeight = '210px';
                cardWidth = '150px';
            }

            if (option.radius == '' || option.radius == null || option.radius == undefined) {
                cardRadius = '5px';
            } else {
                cardRadius = Number(option.radius) + 'px';
            }

            if (option.borderSize > 0) {
                if (option.borderSize == '' || option.borderSize == null || option.borderSize == undefined) {
                    cardBorderWidth = '2px';
                } else if (option.borderSize === 'none') {
                    cardBorderWidth = null
                } else {
                    cardBorderWidth = Number(option.borderSize) + 'px';
                }
            } else {
                if (option.borderFlipFront == '' || option.borderFlipFront == null || option.borderFlipFront == undefined) {
                    cardBorderWidth = '2px';
                } else if (option.borderFlipFront = 'none') {
                    cardBorderWidth = null
                } else {
                    cardBorderWidth = Number(option.borderFlipFront) + 'px';
                }
            }

            if (option.borderColor == '' || option.borderColor == null || option.borderColor == undefined) {
                cardBorderColor = 'black';
            } else {
                cardBorderColor = option.borderColor;
            }
            let border;
            if (cardBorderWidth === null) {
                border = 'none'
            } else {
                border = `${cardBorderWidth} solid ${cardBorderColor}`
            }

            let splitHeight = cardHeight.split("px")[0]
            let sizeRoot = Number(splitHeight) / 2.3;
            let sizeAfterRoot = Number(splitHeight) / 7;
            let leftRightRoot = Number(splitHeight) / 32.81;
            let topLeftRoot = Number(splitHeight) / 32.81;

            cardDiv.style.setProperty("--s-a", `${sizeAfterRoot}px`);
            cardDiv.style.setProperty("--s-c", `${sizeRoot}px`);
            cardDiv.style.setProperty("--l-r", `${leftRightRoot}px`);
            cardDiv.style.setProperty("--t-p", `${topLeftRoot}px`);
            cardDiv.style.setProperty("--h", cardHeight);
            cardDiv.style.setProperty("--w", cardWidth);
            cardDiv.style.setProperty("--b-r", cardRadius);
            cardDiv.style.setProperty("--b", border);
            if (option.src) {
                cardDiv.style.background = `url(${option.src})`;
                cardDiv.style.backgroundSize = `100% 100%`
            } else if (option.color) {
                cardDiv.style.background = option.color;
            }

        } else {
            console.error('Something wrong with the class or id')
        }
    }
}

function flipCard(Card) {
    let card = document.querySelector(`.${Card} .card-flip-inner`);
    if (!card) {
        card = document.querySelector(`#${Card} .card-flip-inner`);
    }
    if (card.querySelector('.card-face .card-sample-back .card-ui')) {
        card.classList.toggle('is-flipped');
    }
}

function createCardFlip(option) {
    if (!option.class && !option.id) {
        console.error('You need to insert id element or class')

    } else {

        let temp = `<div class="card-flip-inner">
                        <div class="card-face card-face-front">
                            <div class="card-sample">
                            <div class="front"></div>
                            </div>
                        </div>
                        <div class="card-face card-face-back">
                            <div class="card-sample-back">
                            <div class="back"></div>
                            </div>
                        </div>
                    </div>`;
        let CARD;
        if (option.class) {

            CARD = document.querySelector(`.${option.class}`);
        } else if (option.id) {

            CARD = document.getElementById(option.id);
        }

        let newCard = document.createElement('div')
        newCard.className = 'card-flip';
        CARD.appendChild(newCard);
        newCard.innerHTML = temp;
        if (option.id) {


            makeBackCardUi({
                src: option.src,
                id: `${option.id} .card-flip .card-flip-inner .card-face .card-sample .front`,
                width: option.width,
                height: option.height,
                borderColor: option.borderColor,
                borderSize: option.frontSideBorder,
                borderFlipFront: option.frontSideBorder,
                radius: option.radius,
                color: option.color
            })
        } else if (option.class) {

            makeBackCardUi({
                src: option.src,
                class: `${option.class} .card-flip .card-flip-inner .card-face .card-sample .front`,
                width: option.width,
                height: option.height,
                borderColor: option.borderColor,
                borderSize: option.frontSideBorder,
                borderFlipFront: option.frontSideBorder,
                radius: option.radius,
                color: option.color
            })
        }

        if (option.suit || option.value) {

            if (option.class) {


                makeCardUi({
                    value: option.value,
                    suit: option.suit,
                    class: `${option.class} .card-flip .card-flip-inner .card-face .card-sample-back .back`,
                    width: option.width, height: option.height,
                    borderColor: option.borderColor,
                    borderSize: option.backSideBorder,
                    borderFlip: option.backSideBorder,
                    radius: option.radius
                })
            } else if (option.id) {

                makeCardUi({
                    value: option.value,
                    suit: option.suit,
                    id: `${option.id} .card-flip .card-flip-inner .card-face .card-sample-back .back`,
                    width: option.width,
                    height: option.height,
                    borderColor: option.borderColor,
                    borderSize: option.backSideBorder,
                    borderFlip: option.backSideBorder,
                    radius: option.radius
                })
            }
        }
        let cardUi;
        if (option.class) {
            cardUi = document.querySelector(`.${option.class} .card-flip .card-flip-inner .card-face .card-sample .front`);
        } else if (option.id) {
            cardUi = document.querySelector(`#${option.id} .card-flip .card-flip-inner .card-face .card-sample .front`);
        }

        newCard.style.width = getComputedStyle(cardUi).getPropertyValue("--w")
        newCard.style.height = getComputedStyle(cardUi).getPropertyValue("--h")
        newCard.style.borderRadius = getComputedStyle(cardUi).getPropertyValue("--b-r")

    }


}

function addBack(option) {
    let cardUi;
    if (option.id) {
        cardUi = document.querySelector(`#${option.id} .card-flip .card-flip-inner .card-face .card-sample .front`);
    } else if (option.class) {
        cardUi = document.querySelector(`.${option.class} .card-flip .card-flip-inner .card-face .card-sample .front`);
    }
    let width = getComputedStyle(cardUi).getPropertyValue("--w").split("px")[0]
    let borderRadius = getComputedStyle(cardUi).getPropertyValue("--b-r").split("px")[0];
    if (option.id) {
        makeCardUi({ value: option.value, suit: option.suit, id: `${option.id} .card-flip .card-flip-inner .card-face .card-sample-back .back`, width: width, radius: borderRadius })
    } else if (option.class) {
        makeCardUi({ value: option.value, suit: option.suit, class: `${option.class} .card-flip .card-flip-inner .card-face .card-sample-back .back`, width: width, radius: borderRadius })
    }
}

module.exports = { makeCardUi, makeBackCardUi, createCardFlip, flipCard, addBack };
