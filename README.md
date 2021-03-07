# What is this? 

Tool to crate simple card game ui

# Installation

`npm i simple-card-game-ui --save`

And...

```

import {makeCardUi} from 'simple-game-card-ui'
import 'simple-game-card-ui/style.css';

```


# Create card

First we create a simple element with id or class.

```<div class="sample-card">```

Then ...

```

makeCardUi({
    class: 'sample-card',
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
* *height* - The height of the card. *insert only number*
* *width* - The width of the card. *insert only number*
* *borderColor* - Border color.
* *borderSize* - Border size.
* *radius* - Border raduis.
