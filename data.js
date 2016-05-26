function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     //document.getElementById("contactForm").innerHTML = xhttp.responseText;
      var jsonObj = JSON.parse(xhttp.responseText);
      //jsonObj.wishes = document.getElementById("wish").innerHTML;
      //alert(document.getElementById("zip").value);
      jsonObj.push({ID:document.getElementById("zip").value, wishes: document.getElementById("wish").value});
      var i;
      text = "";
      for (i = 0; i < jsonObj.length; i++ )
        text = text +  "zip: " + jsonObj[i].ID + " wishes: " + jsonObj[i].wishes + "\n";
      alert(text);
  //xhttp.setRequestHeader("Content-type", "http://localhost:8000/");
    //  xhttp.open('POST', "data.py", true);

      // xhttp.responseType = "JSON";
      // xhttp.onload = function(e) {
      //   var arrOfStrings = JSON.parse(xhr.response);
      // }
    //  xhttp.send(text);
  //     var jsonfile = require('jsonfile');
  //     var file = 'items.json';
  //     jsonfile.writeFile(file, jsonObj, function (err) {
  // console.error(err)})
    }

  };
  // xhttp.open('GET', "data.py", true);
  // xhttp.send();
  xhttp.open("GET", "/~pwhitter1/TargetHackathonWebpage/items.json", true);
  xhttp.send();

}
