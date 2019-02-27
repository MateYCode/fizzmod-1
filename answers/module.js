module.exports = {
    base: 2,
    multiply: function(number){
        if (isNaN(Number(number))) {
            throw ('Input is Nan');
        }
        else {
            return (number * this.base);
        }
    },
    getBase: function() {
        return this.base;
    },
    updateBase: function(newBase){
        if (isNaN(Number(newBase))) {
            throw ('Input is Nan');
        }
        else {
            this.base = newBase;
        }
    },
};
