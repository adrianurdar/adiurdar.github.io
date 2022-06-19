var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 2).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + ', ' + mm + ', ' + dd;

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function test(d1, d2) {
    var diff = monthDiff(d1, d2);
//    console.log(
//        d1.toISOString().substring(0, 10),
//        "to",
//        d2.toISOString().substring(0, 10),
//        ":",
//        diff
//    );
    return diff;
}

function getWords(monthCount) {
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }

    var months = { one: 'mo', other: 'mos' },
        years = { one: 'yr', other: 'yrs' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];

    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    document.write(result.join(' '));
}