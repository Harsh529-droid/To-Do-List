module.exports.getDate = getDate;
exports.getDay = getDay;

//module.exports = exports => js object

function getDate() {
    var day = new Date();
    var options = {
        weekday : "long",
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    };

    return day.toLocaleDateString("en-US",options);
}

function getDay() {
    
    var day = new Date();
    var options = {
        day : 'numeric'
    };

    return day.toLocaleDateString("en-US",options);
}