import numeral from 'numeral'

function simpleFormat(number) {
    return numeral(number).format('0,0');
};

module.exports = {simpleFormat: simpleFormat}