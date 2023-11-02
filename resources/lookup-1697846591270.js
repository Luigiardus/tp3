(function(window, undefined) {
  var dictionary = {
    "05e9a3ee-7bcd-4235-af45-d07b943e72b8": "Casa Hufflepuff",
    "733fcb74-8438-484b-834d-96ca03a32f3a": "Casa Griffindor",
    "776af279-0ed6-40b9-bdca-c1b8d80dc267": "Hogwarts",
    "3555d0ac-9ec1-4cdd-bd11-8ee4eca22887": "Casa Revenclaw",
    "4529068f-de12-4e92-9244-1f4f857554da": "Casa Slytherin",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "dda41d2d-55c9-426c-b700-db55614b973d": "a",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);