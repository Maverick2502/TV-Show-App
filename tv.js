const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)

    console.log(res.data[0].show.image.original);
    form.query.value = "";

    //Execution of the function
    makeImages(res.data);    
    
});


function makeImages(shows) {
    for (let result of shows) {

        const img = document.createElement("img");
        img.src = result.show.image.medium;
        document.body.append(img);
        img.classList.add("img");

        // To remove the img
         img.addEventListener("click", function(e) {
            e.target.remove();
        });
    }
}