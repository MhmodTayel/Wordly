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
  $.ajax({
    method: "GET",
    url:
      "/mashape/words/" +
      word.word +
      "?when=" +
      when +
      "&encrypted=" +
      encrypted,
    success: function (data) {
      drawWord(word);
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
        setTimeout(expand, 500);
      }
    },
  });
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
$(document).ready(function () {
  $("#getWord").click(function (e) {
    e.preventDefault();
    $("#word").parent().removeClass("has-error");
    var word = $("#word").val();
    if (word) {
      if (typeof _gaq !== "undefined") {
        _gaq.push(["_trackEvent", "web", "demo", word]);
      }
      var resultType = $("#resultType").val();
      var request = word;
      var url = apiRoot + word;
      if (resultType) {
        url += "/" + resultType;
        request += "/" + resultType;
      }
      $("#json pre code").html("Getting results...");
      $("#requestUrl").val(url);
      $.ajax({
        url:
          "/mashape/words/" +
          request +
          "?when=" +
          when +
          "&encrypted=" +
          encrypted,
        method: "GET",
        dataType: "json",
        success: function (result) {
          if (!resultType) {
            var definitions = result.results;
            if (definitions) {
              definitions.forEach(function (definition) {
                _.each(definition, function (value, key) {
                  if (_.isArray(definition[key]) && key != "examples") {
                    var arr = value;
                    for (var i = 0, len = arr.length; i < len; i++) {
                      if (_.isString(arr[i])) {
                        arr[i] =
                          "<a class='exampleLink' href='#try'>" +
                          arr[i] +
                          "</a>";
                      }
                    }
                  }
                });
              });
            }
          } else {
            var arr = result[resultType];
            for (var i = 0, len = arr.length; i < len; i++) {
              if (_.isString(arr[i])) {
                arr[i] = "<a class='exampleLink' href='#'>" + arr[i] + "</a>";
              }
            }
          }
          var formatted = JSON.stringify(result, null, "  ");
          $("#json pre code").html(formatted);
          $("pre code").each(function (i, block) {
            hljs.highlightBlock(block);
          });
        },
        error: function (jqXHR, textStatus, errorThrown) {
          if (jqXHR.status === 404) {
            $("#json pre code").html("No results for that word.");
          } else {
            $("#json pre code").html("Please refresh the page.");
          }
        },
      });
    } else {
      $("#word").parent().addClass("has-error");
    }
  });
  $(document).on("click", "a.exampleLink", function (e) {
    var word = $(this).text();
    var type = $(this).data("type") || "";
    $("#word").val(word);
    $("#resultType").val(type);
    $("#getWord").click();
  });
  $("#word").val("example");
  $("#getWord").click();
});
