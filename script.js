function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };


}

//-----------------------------------------------------------------//




// CLICK HANDLERS
// ==========================================================

$("#run-search").on("click", function (event) {
  event.preventDefault();
  clear();
  var queryURL = buildQueryURL();

  
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
