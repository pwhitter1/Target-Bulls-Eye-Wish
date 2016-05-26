function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var jsonObj = JSON.parse(xhttp.responseText);
      jsonObj.push({ID:document.getElementById("zip").value, wishes: document.getElementById("wish").value});
      var i;
      text = "";
      for (i = 0; i < jsonObj.length; i++ )
        text = text +  "zip: " + jsonObj[i].ID + " wishes: " + jsonObj[i].wishes + "\n";
      alert(text);
    }

  };
  xhttp.open("GET", "/~pwhitter1/TargetHackathonWebpage/items.json", true);
  xhttp.send();

}
