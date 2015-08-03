function call(name) {
  var request = new XMLHttpRequest();
  request.onload = function() {
    var objectImport = JSON.parse(this.responseText);
    alert(objectImport['name']);
    console.log(objectImport);
  };
  request.open("get", "https://teamtreehouse.com/" + name + ".json");
  request.send();
}

  var input = document.getElementsByTagName('input')[0];
  var sButton = document.getElementsByTagName('input')[1];
  var theForm = document.getElementsByTagName('form')[0];

  theForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
  })

  sButton.onclick = function() {
    if (!input.value) {
      alert('Please enter a name');
    }else{
      call(input.value);
      }
    }
