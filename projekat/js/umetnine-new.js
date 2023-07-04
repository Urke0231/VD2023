
let currentArt = [];
let allArtists = [];
function displayArt(art){
   
    $('#card-container').html("");
    for(let i = 0; i < art.length; i++){ 
        let artist = allArtists.filter(artist => artist.id == art[i].artistId)[0]; 
        
            $('#card-container').append(
            "<article>"+
            "<a href='"+ art[i].link +"' class='image'><img src='" + art[i].image
            +"' alt='"+ art[i].name+"' /></a>"+
            "<header>"+
            "    <h2><a href='"+ art[i].link+"'>"+  art[i].name +"</a></h2>"+ 
            "</header>"+ 
            "<p>" + art[i].description +" </p>"+ 
            "<p>"+ artist.name  +" (" + art[i].year +") </p>"+ 
            " <footer class='text-center'>"+
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
    
    document.querySelectorAll('.umetnine').forEach(function(a) {
        a.addEventListener('click', function(event) {
            event.preventDefault(); // prevent the default action (navigating to the href)
            
            let artType = this.textContent; // get the text of the clicked link
            let url = new URL(this.href); // create a URL object from the href
            
            url.searchParams.set('artType', artType); // set the artType parameter to the link text
            
            window.history.pushState({}, '', url.toString()); // update the URL without causing a page refresh
    
            // if you want to navigate to the new URL, uncomment the next line
             window.location.href = url.toString();
        });
    });


    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("artType");  
    let allArt = JSON.parse(localStorage.getItem("paintings"));
    
    $("#breadcrumbs").append(type);

    let currentArt = allArt.filter(art => art.type == type);

    allArtists = JSON.parse(localStorage.getItem("artists"));

    displayArt(currentArt);

    let headingDescElement = $('#heading-desc');
    let existingText = headingDescElement.text();
    let linkText = this.textContent;
    headingDescElement.text(existingText + ' ' + type);


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

