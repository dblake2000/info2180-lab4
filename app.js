/* wait for the page to load - script is in the head so the form doesn't exist yet */
window.addEventListener("DOMContentLoaded", function () {

    /* the search form */
    const form = document.getElementById("search-form");

    /* the text field the user types in */
    const searchField = document.getElementById("search");

    /* the div where the results go */
    const resultDiv = document.getElementById("result");

    /* search - runs when the button is clicked (or enter is pressed) */
    form.addEventListener("submit", function (event) {

        /* stop the form from reloading the page */
        event.preventDefault();

        /* get what the user typed - trim takes off extra spaces */
        const query = searchField.value.trim();

        /* encodeURIComponent makes the text safe to put in the url */
        const url = "superheroes.php?query=" + encodeURIComponent(query);

        /* ajax request to superheroes.php */
        fetch(url)
            .then(function (response) {

                /* something went wrong on the server */
                if (!response.ok) {
                    throw new Error("Request failed");
                }

                /* php sends back html so read it as text */
                return response.text();
            })
            .then(function (data) {

                /* put the html from php inside the result div */
                resultDiv.innerHTML = data;
            })
            .catch(function (error) {

                /* show a message if the request didn't work */
                resultDiv.textContent = "There was a problem getting the superheroes.";
                console.log(error);
            });
    });

});
