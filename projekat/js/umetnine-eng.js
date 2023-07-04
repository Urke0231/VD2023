
let currentArt = [];
let allArtists = [];
function displayArt(art) {

    $('#card-container').html("");
    for (let i = 0; i < art.length; i++) {
        let artist = allArtists.filter(artist => artist.id == art[i].artistId)[0];

        $('#card-container').append(
            "<article>" +
            "<a href='" + art[i].link + "' class='image'><img src='" + art[i].image
            + "' alt='" + art[i].name + "' /></a>" +
            "<header>" +
            "    <h2><a href='" + art[i].link + "'>" + art[i].name + "</a></h2>" +
            "</header>" +
            "<p>" + art[i].description + " </p>" +
            "<p>" + artist.name + " (" + art[i].year + ") </p>" +
            " <footer class='text-center'>" +
            "    <ul class='actions'>" +
            "         <li><a href='" + art[i].link + "' class='button'>See artwork</a></li>" +
            "    </ul>" +
            "</footer>" +
            " </article>  "
        );

    }
}

function sortByName(filtered) {
    let name = parseInt($("#name").val());

    switch (name) {
        case 1:
            filtered.sort((a, b) => (a.name > b.name) ? 1 : -1);
            break;
        case 2:
            filtered.sort((a, b) => (a.name > b.name) ? -1 : 1);
            break;
        default: break;
    }

    currentArt = filtered;
    displayArt(currentArt);
}

function sortByArtist(filtered) {
    let artist = parseInt($("#artist").val());
    switch (artist) {
        case 1:
            filtered.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
            break;
        case 2:
            filtered.sort((a, b) => (a.artist > b.artist) ? -1 : 1);
            break;
        default: break;
    }

    currentArt = filtered;
    displayArt(currentArt);
}

function sortingAge(filtered) {
    let sort = parseInt($("#sorting").val());
    let artist = parseInt($("#artist").val());

    switch (sort) {
        case 1:
            filtered.sort((a, b) => (a.name > b.name) ? 1 : -1);
            break;
        case 2:
            filtered.sort((a, b) => (a.name > b.name) ? -1 : 1);
            break;
        default: break;
    }

    switch (artist) {
        case 1:
            filtered.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
            break;
        case 2:
            filtered.sort((a, b) => (a.artist > b.artist) ? -1 : 1);
            break;
        default: break;
    }

    displayArt(filtered);
}


function handleSearch() {
    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("artType");
    let allArt = JSON.parse(localStorage.getItem("paintings1"));




    let filteredArt = allArt.filter(art => art.type == type);
    let keyword = $("#searchInput").val();

    filteredArt = filteredArt.filter(
        art => art.name.toUpperCase().includes(keyword.toUpperCase()) ||
            art.artist.toUpperCase().includes(keyword.toUpperCase())
    );

    currentArt = filteredArt;
    displayArt(currentArt);
}


function typeToSrType(typeName) {
    switch (typeName) {
        case "other artworks": return "Ostale umetnine";
            break;
        case "paintings": return "Slike";
            break;
        case "sculptures": return "Skulpture";
            break;
        default: return "Slike";
    }
}

$(document).ready(function () {

    localStorage.setItem('jezik', 'en');

    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("artType");
    let allArt = JSON.parse(localStorage.getItem("paintings1"));

    $("#breadcrumbs").append(type);


    $("#jezik").attr("href", $("#jezik").attr("href") + "?artType=" + typeToSrType(type));
    $("#breadcrumbs").append(type);

    let currentArt = allArt.filter(art => art.type == type);

    allArtists = JSON.parse(localStorage.getItem("artists1"));

    displayArt(currentArt);

    let headingDescElement = $('#heading-desc');
    let existingText = headingDescElement.text();
    let linkText = this.textContent;
    headingDescElement.text(existingText + ' ' + type);


    // Event handleri za pretragu & sort
    $("#name").change(function () {

        sortByName(currentArt);
    });

    $("#artist").change(function () {

        sortByArtist(currentArt);
    });

    $("#searchBtn").click(function () {

        handleSearch();
    });

    $('#searchInput').keypress(function (e) {
        if (e.which == 13) {
            handleSearch();
            return false;
        }

    });

    $('#searchInput').keyup(function (e) {
        if ($('#searchInput').val().length === 0) {
            handleSearch();
        }
    });



});

