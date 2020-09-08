// initialise these values
var ssID = "1J-rID8K6DNt2jeMZ7DWOH5YA7baYKTiWl1pJ3iE"; //change this to id of sheet
var token = "5672193:AAEhKCprHAOc9XfQ4HKilPyU"; //insert your bot token here
var webAppUrl = "https://script.google.com/macros/s/AKfycbzSnIgGodPMOnqE8Az/exec";//change this url once you set up the webhook
var url = "https://api.telegram.org/bot" + token;


function doPost (e){

  var contents = JSON.parse(e.postData.contents);
  var text = contents.message.text;
  var id = contents.message.from.id;
  var name = contents.message.from.first_name + " " + contents.message.from.last_name;
  var first_name = contents.message.from.first_name;var ss = SpreadsheetApp.openById(ssID);
  ss.getSheetByName('Sheet1').appendRow([new Date(),id, first_name,text]);
  
  sendText(id, "Added to sheet");

}

function sendText(id, text) {
  var response = UrlFetchApp.fetch(url + "/sendMessage?chat_id=" + id + "&text=" + text);
  Logger.log(response.getContentText()); 
}

// run this function one time for setting web hook
function setWebhook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText()); 
}
