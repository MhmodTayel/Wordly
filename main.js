// async function getData() {
//   const res = await fetch("https://wordsapiv1.p.rapidapi.com/words/test", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "125613095emsh816db156e931e2fp1d8034jsnc427110ba6fa",
//       "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
//     },
//   });
//   const output = await res.json();
//   console.log(output);
// }

// getData();

// let test = {
//   "word": "test",
//   "results": [
//       {
//           "definition": "trying something to find out about it",
//           "partOfSpeech": "noun",
//           "synonyms": [
//               "trial",
//               "trial run",
//               "tryout"
//           ],
//           "typeOf": [
//               "experimentation",
//               "experiment"
//           ],
//           "hasTypes": [
//               "trial balloon",
//               "road test",
//               "alpha test",
//               "field test",
//               "field trial",
//               "beta test"
//           ]
//       },
//       {
//           "definition": "any standardized procedure for measuring sensitivity or memory or intelligence or aptitude or personality etc",
//           "partOfSpeech": "noun",
//           "synonyms": [
//               "mental test",
//               "mental testing",
//               "psychometric test"
//           ],
//           "typeOf": [
//               "mental measurement"
//           ],
//           "hasTypes": [
//               "sub-test",
//               "personality test",
//               "intelligence test",
//               "iq test"
//           ],
//           "examples": [
//               "the test was standardized on a large sample of students"
//           ]
//       },
//       {
//           "definition": "a set of questions or exercises evaluating skill or knowledge",
//           "partOfSpeech": "noun",
//           "synonyms": [
//               "exam",
//               "examination"
//           ],
//           "typeOf": [
//               "communicating",
//               "communication"
//           ],
//           "hasTypes": [
//               "entrance exam",
//               "bar exam",
//               "bar examination",
//               "comp",
//               "comprehensive",
//               "comprehensive examination",
//               "entrance examination",
//               "exam paper",
//               "examination paper",
//               "final",
//               "final exam",
//               "final examination",
//               "litmus test",
//               "midterm",
//               "midterm exam",
//               "midterm examination",
//               "oral",
//               "oral exam",
//               "oral examination",
//               "prelim",
//               "preliminary exam",
//               "preliminary examination",
//               "question sheet",
//               "quiz",
//               "test paper",
//               "tripos",
//               "viva",
//               "viva voce"
//           ],
//           "examples": [
//               "when the test was stolen the professor had to make a new set of questions"
//           ]
//       },
//       {
//           "definition": "test or examine for the presence of disease or infection",
//           "partOfSpeech": "verb",
//           "synonyms": [
//               "screen"
//           ],
//           "typeOf": [
//               "check"
//           ]
//       },
//       {
//           "definition": "examine someone's knowledge of something",
//           "partOfSpeech": "verb",
//           "synonyms": [
//               "quiz"
//           ],
//           "typeOf": [
//               "examine"
//           ],
//           "derivation": [
//               "testee",
//               "testing",
//               "tester"
//           ],
//           "examples": [
//               "The teacher tests us every week"
//           ]
//       },
//       {
//           "definition": "put to the test, as for its quality, or give experimental use to",
//           "partOfSpeech": "verb",
//           "synonyms": [
//               "essay",
//               "examine",
//               "prove",
//               "try",
//               "try out"
//           ],
//           "typeOf": [
//               "judge",
//               "pass judgment",
//               "evaluate"
//           ],
//           "hasTypes": [
//               "float",
//               "control",
//               "verify",
//               "field-test"
//           ],
//           "derivation": [
//               "testing"
//           ]
//       },
//       {
//           "definition": "the act of testing something",
//           "partOfSpeech": "noun",
//           "synonyms": [
//               "run",
//               "trial"
//           ],
//           "typeOf": [
//               "effort",
//               "attempt",
//               "endeavor",
//               "endeavour",
//               "try"
//           ],
//           "hasTypes": [
//               "try-on",
//               "ministry of transportation test",
//               "mot",
//               "mot test",
//               "audition",
//               "pilot program",
//               "pilot project",
//               "preclinical phase",
//               "preclinical test",
//               "preclinical trial",
//               "snellen test",
//               "assay",
//               "clinical test",
//               "trying on",
//               "tryout",
//               "field trial",
//               "fitting",
//               "double blind",
//               "clinical trial"
//           ]
//       },
//       {
//           "definition": "the act of undergoing testing",
//           "partOfSpeech": "noun",
//           "synonyms": [
//               "trial"
//           ],
//           "typeOf": [
//               "try",
//               "endeavour",
//               "endeavor",
//               "effort",
//               "attempt"
//           ],
//           "examples": [
//               "he survived the great test of battle"
//           ]
//       },
//       {
//           "definition": "achieve a certain score or rating on a test",
//           "partOfSpeech": "verb",
//           "typeOf": [
//               "score"
//           ],
//           "examples": [
//               "She tested high on the LSAT and was admitted to all the good law schools"
//           ]
//       },
//       {
//           "definition": "a hard outer covering as of some amoebas and sea urchins",
//           "partOfSpeech": "noun",
//           "typeOf": [
//               "natural covering",
//               "cover",
//               "covering"
//           ]
//       },
//       {
//           "definition": "determine the presence or properties of (a substance)",
//           "partOfSpeech": "verb",
//           "typeOf": [
//               "learn",
//               "check",
//               "determine",
//               "see",
//               "ascertain",
//               "watch",
//               "find out"
//           ],
//           "derivation": [
//               "testing"
//           ]
//       },
//       {
//           "definition": "show a certain characteristic when tested",
//           "partOfSpeech": "verb",
//           "typeOf": [
//               "be"
//           ],
//           "derivation": [
//               "testing"
//           ],
//           "examples": [
//               "He tested positive for HIV"
//           ]
//       },
//       {
//           "definition": "undergo a test",
//           "partOfSpeech": "verb",
//           "typeOf": [
//               "submit",
//               "take"
//           ],
//           "verbGroup": [
//               "quiz"
//           ],
//           "derivation": [
//               "testee"
//           ],
//           "examples": [
//               "She doesn't test well"
//           ]
//       }
//   ],
//   "syllables": {
//       "count": 1,
//       "list": [
//           "test"
//       ]
//   },
//   "pronunciation": {
//       "all": "tɛst"
//   },
//   "frequency": 4.9
// }
// console.log(test.results[1]);

var container = document.getElementById("mynetwork");
var nodes = new vis.DataSet([]);
var edges = new vis.DataSet([]);
var data = { nodes: nodes, edges: edges };
var options = { interaction: { zoomView: false } };
var network = new vis.Network(container, data, options);
let words = [];
let currentNode = 0;
var maxWords = 60;
function canAddMore() {
  return nodes.get().length < maxWords;
}
function drawWord(word) {
  nodes.add({
    id: word.id,
    label: word.word,
    color: "#eee",
    font: {
      color: "#000",
    },
  });
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

async function expand() {
  let word = randomWord();
  console.log(word);
  const res = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word.word}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "125613095emsh816db156e931e2fp1d8034jsnc427110ba6fa",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();

  may(data);
  drawWord(word);

  function may(data) {
    console.log(data);
    if (data.results) {
      var toGet = [];
      data.results.forEach((result, i) => {
        if (result.synonyms) toGet = toGet.concat(result.synonyms);
        if (result.antonyms) toGet = toGet.concat(result.antonyms);
        if (result.pertainsTo) toGet = toGet.concat(result.pertainsTo);
        if (result.typeOf) toGet = toGet.concat(result.typeOf);
        if (result.hasTypes) toGet = toGet.concat(result.hasTypes);
        if (result.cause) toGet = toGet.concat(result.cause);
        if (result.derivation) toGet = toGet.concat(result.derivation);
        if (result.similarTo) toGet = toGet.concat(result.similarTo);
      });
      toGet = _.uniq(toGet).slice(0, 10);
      toGet.forEach(function (newWord) {
        enqueue(newWord, word.id, data);
      });
    }
    if (nodes.get().length < maxWords) {
      setTimeout(expand, 400);
    }
  }
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
word = startWords[Math.floor(Math.random() * startWords.length)];

enqueue(word);
expand();
