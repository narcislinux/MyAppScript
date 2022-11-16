function deleteRow() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet(); 
  var data = sheet.getDataRange().getValues();
  var howManyToDelete = sheet.getLastRow() - 1; 

  if (howManyToDelete > 0){
     sheet.deleteRows(2, howManyToDelete );
  } else {
     Browser.msgBox('The sheet is empty anyway!');  
  }
  
}
