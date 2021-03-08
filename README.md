# What is this? 

Tool to create simple card game ui

# Installation

`npm i simple-game-card-ui --save`

And...

```

import { makeCardUi, makeBackCardUi, createCardFlip, flipCard, addBack } from 'simple-game-card-ui'
import 'simple-game-card-ui/style.css';

```

# Create card

First we create a simple element with id or class.

```<div class="card-1">```

Then ...

```

makeCardUi({
    class: 'card-1',
    value: 14,
    suit: 'S'
})

```

## Options

```

makeCardUi({
    value: Number,
    suit: 'Suit',
    id: 'id-name',
    class: 'class-name'
    type: 'value'
    height: Number,
    width: Number,
    borderColor: 'color',
    borderSize: Number,
    radius: Number,
})

```

* *value* - Value of card 1-14, you can pass also letter like k,q,j / K,J,Q for Ace you can pass 14/1/A/a
* *suit* - Suits of card you can pass H,S,C,D / h,s,c,d.  
* *id* - Insert the id of the element. *notice that you not insert class with id*
* *class* -  Insert the class of the element. *notice that you not insert id with class*
* *type* -  You can change the type of the card. *value - show number inside  | suit - show suit inside* 
* *height* - The height of the card. *insert only number*
* *width* - The width of the card. *insert only number*
* *borderColor* - Border color.
* *borderSize* - Border size *you can put 'none'*.
* *radius* - Border raduis.

# Create back side card 


First we create a simple element with id or class.

```<div id="card-1">```

Then ...

```
makeBackCardUi({ 
    id: 'card-1', 
    src: 'img/img.jpg' 
})

```

# Options

```

makeBackCardUi({
    src: 'src image',
    color: 'color'
    id: 'id-name',
    class: 'class-name',
    height:Number,
    width: Number,
    borderColor: 'color'
    borderSize: Number,
    radius: Number, 
})
    
```

* *src* -Insert src image.
* *color* - You can put background color instead of an image *do not put an image with a color* 
* *id* - Insert the id of the element. *do not put a class with id*
* *class* - Insert the class of the element. *do not put a class with id*
* *height* - The height of the card. *insert only number*
* *width* - The width of the card. *insert only number*
* *borderColor* - Border color.
* *borderSize* - * *borderSize* - Border size *you can put 'none'*.
* *radius* - Border raduis.

# Create back and front flip card

First we create a simple element with id or class.

```<div id="card-1">```

Then ...

```

createCardFlip({ 
    id: 'card-1' 
    suit: 'c', 
    value: 'k', 
    src: 'img/img.jpg', 
})

```

To create a flip card just pass the id or class to this function 

`flipCard('card-1')`

Sample to create a flip with click event

```

const card =  document.querySelector('#card-1')

// create event
card.addEventListener('click', e => {
    flipCard('card-1')
})

```

## options

```

createCardFlip({ 
    id: 'card-1' 
    value: Number,
    suit: 'Suit',
    src: 'src image',
    backSideBorder: Number, 
    frontSideBorder: Number, 
    borderSize: Number, 
    radius: Number, 
    borderColor: 'color'
})

```

*important* - All the options its the same like 'makeBackCardUi' and 'makeCardUi' execpt the borderSize. In This time we have front and back so we can choose individualy border size.
*backSideBorder*
*frontSideBorder*

## Extra

If some reason you want to create first a front card and just after logic to add the back card. 
you can do it like this. 

First we create a Flip card but this time we dont put the value and the suit.

```createCardFlip({ id: 'card-1', src: 'img/img.jpg' })```

Then we create event to the card

```

const card =  document.querySelector('#card-1')

// create event
card.addEventListener('click', e => {
    flipCard('card-1')
})

```

Then call this function with the id or class, value , suit. 

```

addBack({ id: 'card-1', value: 12, suit: 'h' })


```


