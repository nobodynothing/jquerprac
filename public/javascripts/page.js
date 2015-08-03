function call(name) {
  $.ajax("https://teamtreehouse.com/" + name + ".json", {
    dataType: 'json',
    success: function(objUser){
      var resultDiv = $('<div>');
      resultDiv.attr('class', 'resultDeath')
      $(document.body).append(resultDiv);
    resultDiv.append("This is the treehouse page of " + objUser['name'] + ".");
    $(resultDiv).addClass('result');

    console.log(objUser['name']);
  }
})};


var input = $('input')[0];
var button = $('input')[1];
var form = $('form')[0];
var dButt = $('input')[2];


  $(form).on('submit', function(event){
    event.preventDefault();

  })

  $(button).on('click', function(event) {
      $('div.resultDeath').remove();
      call(input.value);
});

var div;
  $(dButt).on('click', function(){
    if (div) {
      $(document.body).append(div);
      div = null;
    } else {
    div = $('div.resultDeath').detach();
  }
  })




  //http://teamtreehouse.com/jwg.json
  //box grabs matching user input form source
