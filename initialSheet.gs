function initialSheet() {

  // Name of the Sheet to look for
  var sheetName = 'Sheet1';
  var sheets = SpreadsheetApp.getActiveSpreadsheet()

  // See if the Sheet already exists
  var getSheet = sheets.getSheetByName(sheetName);

  if (  getSheet === null ) {
    
    // If sheet does not exist, so create it
    var sheet = sheets.insertSheet(sheetName);
    Logger.log(sheet)
    
  }
