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
            cardDiv = document.getElementById(`${option.id}`);
        }

        if (cardDiv) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = './style.css';
            document.getElementsByTagName('HEAD')[0].appendChild(link);

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

            if (option.borderSize == '' || option.borderSize == null || option.borderSize == undefined) {
                cardBorderWidth = '2px';
            } else {
                cardBorderWidth = Number(option.borderSize) + 'px';
            }

            if (option.borderColor == '' || option.borderColor == null || option.borderColor == undefined) {
                cardBorderColor = 'black';
            } else {
                cardBorderColor = option.borderColor;
            }

            if (value == 'J' || value == 'Q' || value == 'K' || value == 'j' || value == 'q' || value == 'k' || value == 'A' || value == 'a') {
                cardDiv.innerText = value;

            } else {
                cardDiv.innerText = simbol;

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
            cardDiv.style.setProperty("--b", `${cardBorderWidth} solid ${cardBorderColor}`);
            cardDiv.setAttribute('data-value', `${value}${simbol}`)
        } else {
            console.error('Something wrong with the class or id')
        }
    }

}

module.exports.makeCardUi = makeCardUi;
