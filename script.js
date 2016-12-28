Array.prototype.shuffle = function(){
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

var cardArray = ['JS', 'PHP', 'Mongo', 'Ember', 'Grunt', 'Gulp', 'HTML', 'CSS', 'Basic', 'C++', 'VIM', 'Unix']
    app = {};
    cardArray = cardArray.concat(cardArray);
