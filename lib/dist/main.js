"use strict";

function reader(data) {
  var f = new FileReader();
  f.addEventListener('loadend', function (e) {
    console.log(e);
  });
  f.readAsText(data);
}

fetch("http://intern.localhost/intern_fern/style/intern.css").then(function (res) {
  return res.blob();
}).then(function (blob) {
  return reader(Blob);
});