chrome.devtools.panels.create("Rebound", "rebound.png", "panel.html", function(panel){
  return 1;
});

var $ = function(f){
  return '(' + f.toString() + ')()';
}

// var permissionObj = {permissions: ['documentScan']};
// chrome.permissions.request( permissionObj, function(result) {
//   if (result) {
//     chrome.devtools.inspectedWindow.eval("console.log('App was granted the documentScan permission!');");
//     // gotPermission();
//   } else {
//     chrome.devtools.inspectedWindow.eval("console.log('App was not granted the documentScan permission.');");
//   }
// });

// The function below is executed in the context of the inspected page.

var selectedComponent = $(function() {
  if(!$0.data) return 'Not a component';
  var data = $0.data.toJSON();
      data.__proto__ = $0.data;
  return data;
});




chrome.devtools.panels.elements.createSidebarPane(
  "Rebound Component",
  function(sidebar) {
    function updateElementProperties() {
      chrome.devtools.inspectedWindow.eval('$0.tagName', function(tagName){
        sidebar.setExpression(selectedComponent, tagName.toLowerCase());
      });
    }
    // chrome.alarms.onAlarm.addListener(function(alarm){
    //   updateElementProperties();
    // });
    // chrome.alarms.create("Update", {periodInMinutes:(1/60)});

    updateElementProperties();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});