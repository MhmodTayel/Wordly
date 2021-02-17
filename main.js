require("dotenv").config();
async function getData(word, select) {
  const res = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word}/${select}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
      },
    }
  );
  const output = await res.json();
  showData(output, select);
}

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

  const res = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/${word.word}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
      },
    }
  );
  const data = await res.json();

  may(data);
  drawWord(word);

  function may(data) {
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
      setTimeout(expand, 100);
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

const textInput = document.getElementById("text-input");
const select = document.getElementById("select");
const getDataBtn = document.getElementById("get-data");
const outputEl = document.getElementById("output");
const loader = document.getElementById("loader");
const links = document.querySelectorAll(".exampleLink");

getDataBtn.addEventListener("click", () => {
  let input = textInput.value;
  let selectValue = select.value;

  if (input == "") {
    Swal.fire({
      icon: "error",
      title: "Please enter a word!",
    });
  } else {
    loader.classList.add("active");
    getData(input, selectValue);
  }
});

function showData(output, option) {
  loader.classList.remove("active");
  if (output[select.value] == "" || output[select.value] == []) {
    outputEl.innerHTML = `<p class="not-found">The ${option} of "${output["word"]}" word <span>not found</span> </p>`;
  } else if (output["success"] == false) {
    outputEl.innerHTML = `<p class="not-found">The "${textInput.value}" word <span>not found</span> </p>`;
  } else {
    outputEl.innerHTML = "";
    var str = JSON.stringify(output, undefined, 4);
    outputEl.appendChild(
      document.createElement("pre")
    ).innerHTML = syntaxHighlight(str);
  }
}

function syntaxHighlight(json) {
  if (typeof json != "string") {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      let output = '<span class="' + cls + '">' + match + "</span>";

      return output;
    }
  );
}

let pre = `<pre class="faded">{
  <span class="key">"word":</span> <span class="string">"example"</span>,
  <span class="key">"results":</span> [
      {
          <span class="key">"definition":</span> <span class="string">"a representative form or pattern"</span>,
          <span class="key">"partOfSpeech":</span> <span class="string">"noun"</span>,
          ],
          <span class="key">"typeOf":</span> [
              <span class="string">"representation"</span>,
              <span class="string">"internal representation"</span>,
              <span class="string">"mental representation"</span>
          ],

  ],
  <span class="key">"syllables":</span> {
      <span class="key">"count":</span> <span class="number">3</span>,
      <span class="key">"list":</span> [
          <span class="string">"ex"</span>,
      ]
  },
  <span class="key">"pronunciation":</span> {
      <span class="key">"all":</span> <span class="string">"ɪɡ'zæmpəl"</span>
  },
  <span class="key">"frequency":</span> <span class="number">4.67</span>
}</pre>`;

outputEl.innerHTML = pre;

links.forEach((link) => {
  link.addEventListener("click", () => {
    textInput.value = link.innerHTML;
    getDataBtn.click();
  });
});


