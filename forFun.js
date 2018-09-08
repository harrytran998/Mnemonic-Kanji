'use strict';

const fs = require('fs');

fs.readFile('Mnemonic.txt', (err, data) => {
    if (err) throw err;
    let listKanji = JSON.parse(data);
    console.log(listKanji);
});


console.log('This is after the read call'); 
/// Cann't running ! ^_^ 