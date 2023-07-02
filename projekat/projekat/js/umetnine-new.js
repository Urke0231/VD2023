
let currentArt = [];

function displayArt(art){
    $('#card-container').html("");
    for(let i = 0; i < art.length; i++){ 
            $('#card-container').append(
            "<article>"+
            "<a href='"+ art[i].link +"' class='image'><img src='" + art[i].image
            +"' alt='"+ art[i].name+"' /></a>"+
            "<header>"+
            "    <h2><a href='"+ art[i].link+"'>"+  art[i].name +"</a></h2>"+ 
            "</header>"+ 
            "<p>" + art[i].description +" </p>"+ 
            "<p>"+ art[i].artist  +" (" + art[i].year +") </p>"+ 
            " <footer>"+
            "    <ul class='actions'>"+
            "         <li><a href='"+ art[i].link +"' class='button'>See article</a></li>"+
            "    </ul>"+
            "</footer>"+
            " </article>  "
            );
        
    }
}

function sortByName(filtered){
    let name = parseInt($("#name").val()); 

    switch(name){ 
        case 1:
            filtered.sort((a,b) => (a.name > b.name)?1: -1);
            break;
        case 2:
            filtered.sort((a,b) => (a.name > b.name)?-1: 1);
            break;
        default: break;
    }

    currentArt = filtered;
    displayArt(currentArt);
}

function sortByArtist(filtered){ 
    let artist = parseInt($("#artist").val()); 
    switch(artist){
        case 1:
            filtered.sort((a,b) => (a.artist > b.artist)?1: -1);
            break;
        case 2:
            filtered.sort((a,b) => (a.artist > b.artist)?-1: 1);
            break;
        default: break;
    }

    currentArt = filtered;
    displayArt(currentArt);
}

function sortingAge(filtered){
    let sort = parseInt($("#sorting").val());
    let artist = parseInt($("#artist").val()); 

    switch(sort){ 
        case 1:
            filtered.sort((a,b) => (a.name > b.name)?1: -1);
            break;
        case 2:
            filtered.sort((a,b) => (a.name > b.name)?-1: 1);
            break;
        default: break;
    }

    switch(artist){
        case 1:
            filtered.sort((a,b) => (a.artist > b.artist)?1: -1);
            break;
        case 2:
            filtered.sort((a,b) => (a.artist > b.artist)?-1: 1);
            break;
        default: break;
    }

    displayArt(filtered);
}


function handleSearch(){
    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("artType");  
    let allArt = JSON.parse(localStorage.getItem("paintings"));

    let filteredArt = allArt.filter(art => art.type == type);
    let keyword = $("#searchInput").val();

    filteredArt = filteredArt.filter(
                art => art.name.toUpperCase().includes(keyword.toUpperCase()) ||
                       art.artist.toUpperCase().includes(keyword.toUpperCase())
                );

    currentArt = filteredArt;
    displayArt(currentArt);
}

$(document).ready(function () {



    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("artType");  
    let allArt = JSON.parse(localStorage.getItem("paintings"));
    
    $("#breadcrumbs").append(type);

    let currentArt = allArt.filter(art => art.type == type);

    displayArt(currentArt);


    // Event handleri za pretragu & sort
    $("#name").change(function(){ 

        sortByName(currentArt);
    });

    $("#artist").change(function(){ 

        sortByArtist(currentArt);
    });

    $("#searchBtn").click(function(){

        handleSearch();
    });

    $('#searchInput').keypress(function (e) {
        if (e.which == 13) {
          handleSearch(); 
          return false;
        }
        
      });

      $('#searchInput').keyup(function (e) { 
        if( $('#searchInput').val().length === 0 ) {
            handleSearch(); 
        }
      });
 
    

});