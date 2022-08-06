const lyrics = "Tumi akasher buke Bishalotar upoma Tumi amar chokhete Sorolotar protima";

const search = "tumi";

const doesExist = lyrics.includes(search); //search  item in string
console.log(doesExist);

const doesExistOneLine = lyrics.toLowerCase().includes(search.toLowerCase()); //search item in string with convert lower case
console.log(doesExistOneLine);

console.log(lyrics.toLowerCase().indexOf(search.toLowerCase())); //search string index

console.log(lyrics.toLowerCase().startsWith(search.toLowerCase())); //search start
console.log(lyrics.toLowerCase().endsWith(search.toLowerCase())); //search end
