$(document).ready(function() {
  $("form#wordPlay").submit(function(event) {
    var myStrings = $("#sentenceOne").val();

    var space = ' ';
    var newStrings = [];
    //newStrings = splitString(myStrings, space);//
    newStrings = myStrings.split(space);
    var newArray = [];
    newStrings.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    alert(newArray.reverse().toString());
  });
});
