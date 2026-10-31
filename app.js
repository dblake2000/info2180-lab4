/* lab 4 - superhero search (exercise 2) */

/* wait for the page to load - script is in the head so the button doesn't exist yet */
window.addEventListener("DOMContentLoaded", function () {

    /* the search button */
    const searchBtn = document.querySelector(".btn");

    /* click - get the list of superheroes */
    searchBtn.addEventListener("click", function () {

        /* ajax request to superheroes.php */
        fetch("superheroes.php")
            .then(function (response) {

                /* something went wrong on the server */
                if (!response.ok) {
                    throw new Error("Request failed");
                }

                /* php sends back html so read it as text */
                return response.text();
            })
            .then(function (data) {

                /* show the list in an alert */
                alert(data);
            })
            .catch(function (error) {

                /* let the user know it didn't work */
                alert("There was a problem getting the superheroes.");
                console.log(error);
            });
    });

});
