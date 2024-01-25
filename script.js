
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };
  
    // Grab text the user typed into the search input, add to the queryParams object
    queryParams.q = $("#search-term")
      .val()
      .trim();
}