  

function getLabels() {
  
  var labels = GmailApp.getUserLabels();
  for (var i = 0; i < labels.length; i++) {
  Logger.log(labels[i].getName());
  }
  
}
