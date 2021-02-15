var container = document.getElementById("wordNetwork");
var nodes = new vis.DataSet([]);
var edges = new vis.DataSet([]);
var data = { nodes: nodes, edges: edges };
var options = { interaction: { zoomView: false } };
var network = new vis.Network(container, data, options);
let words = [];
let currentNode = 0;
let maxWords = 60;
function canAddMore() {
  return nodes.get().length < maxWords;
}
function drawWord(word) {
  nodes.add({ id: word.id, label: word.word, color: "#767B8B" });
  if (word.parentId) {
    edges.add({ from: word.id, to: word.parentId });
  }
  if (word.data) {
    var toGet = [];
    word.data.results.forEach((result, i) => {
      if (result.synonyms) toGet = toGet.concat(result.synonyms);
      if (result.antonyms) toGet = toGet.concat(result.antonyms);
      if (result.pertainsTo) toGet = toGet.concat(result.pertainsTo);
      if (result.typeOf) toGet = toGet.concat(result.typeOf);
      if (result.hasTypes) toGet = toGet.concat(result.hasTypes);
      if (result.cause) toGet = toGet.concat(result.cause);
      if (result.derivation) toGet = toGet.concat(result.derivation);
      if (result.similarTo) toGet = toGet.concat(result.similarTo);
    });
    _.uniq(toGet).forEach(function (related) {
      let id = related.replace(/ /g, "_");
      var link = nodes.get().find(function (node) {
        return node.id == id && node.label != word.word;
      });
      if (link && Math.random() > 0.75) {
        edges.add({ from: word.id, to: link.id });
      }
    });
  }
}
function enqueue(word, parentId, data) {
  words.push({
    id: word.replace(/ /g, "_"),
    word: word,
    parentId: parentId,
    data: data,
    shown: false,
  });
  words = _.uniqBy(words, "id");
}
function randomWord() {
  var notShown = words.filter(function (word) {
    return word.shown == false;
  });
  var word = notShown[Math.floor(Math.random() * notShown.length)];
  word.shown = true;
  return word;
}
function expand() {
  let word = randomWord();
  // $.ajax({
  //   method: "GET",
  //   url:
  //     "/mashape/words/" +
  //     word.word +
  //     "?when=" +
  //     when +
  //     "&encrypted=" +
  //     encrypted,
    // success: function (data) {
      drawWord(word);
      // if (data.results) {
      //   var toGet = [];
      //   data.results.forEach((result, i) => {
      //     if (result.synonyms) toGet = toGet.concat(result.synonyms);
      //     if (result.antonyms) toGet = toGet.concat(result.antonyms);
      //     if (result.pertainsTo) toGet = toGet.concat(result.pertainsTo);
      //     if (result.typeOf) toGet = toGet.concat(result.typeOf);
      //     if (result.hasTypes) toGet = toGet.concat(result.hasTypes);
      //     if (result.cause) toGet = toGet.concat(result.cause);
      //     if (result.derivation) toGet = toGet.concat(result.derivation);
      //     if (result.similarTo) toGet = toGet.concat(result.similarTo);
      //   });
      //   toGet = _.uniq(toGet).slice(0, 10);
      //   toGet.forEach(function (newWord) {
      //     enqueue(newWord, word.id, data);
      //   });
      // }
      if (nodes.get().length < maxWords) {
        setTimeout(expand, 500);
      }
  //   },
  // });
}
var startWords = [
  "happy",
  "game",
  "river",
  "geometry",
  "language",
  "courage",
  "life",
  "home",
  "map",
  "beautiful",
  "intelligent",
  "beach",
  "inevitable",
  "ascendancy",
  "warm",
  "fast",
  "eternal",
  "philosophy",
  "incredible",
  "smart",
];
var word = startWords[Math.floor(Math.random() * startWords.length)];
enqueue(word);
expand();
var apiRoot = "https://wordsapiv1.p.mashape.com/words/";
