Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

var cardsArray = ['JS', 'PHP', 'Mongo', 'Ember', 'Grunt', 'Gulp', 'HTML', 'CSS', 'Basic', 'C++', 'VIM', 'Unix'],
    cardsFlipped = 0,
    cardId = [],
    app = new Object();

cardsArray = cardsArray.concat(cardsArray);

app.init = function() {
    var domElement = ''
    cardsArray.shuffle();
    for (let i = 0; i < cardsArray.length; i++) {
        domElement += '<div class="card" id="' + i + '"></div>'
    }
    document.querySelector('#game-board').innerHTML = domElement;
}

app.init();
