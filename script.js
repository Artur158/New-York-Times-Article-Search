<<<<<<< HEAD
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
=======


@returns {string} URL for NYT API based on form inputs

function buildQueryURL() {

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";



  var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };


  queryParams.q = $("#search-term")
    .val()
    .trim();


  var startYear = $("#start-year")
    .val()
    .trim();

  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }


  var endYear = $("#end-year")
    .val()
    .trim();

  if (parseInt(endYear)) {
    queryParams.end_date = endYear + "0101";
  }


  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}



@param {object} NYTData - object containing NYT API data

function updatePage(NYTData) {

  var numArticles = $("#article-count").val();


  console.log(NYTData);
  console.log("------------------------------------");
}
>>>>>>> origin/main
