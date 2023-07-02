
function displayArtists(artists){
    $('#card-container').html("");
    for(let i = 0; i < artists.length; i++){ 
            $('#card-container').append(
            "<article>"+
            "<a href='#' class='image'><img src='" + artists[i].image
            +"' alt='"+ artists[i].name+"' /></a>"+
            "<header>"+
            "    <h2 class='text-center'"+  artists[i].name +"</h2>"+ 
            "</header>"+ 
            "<p class='text-center'>" + artists[i].description +" </p>"+  
            " <footer class='text-center'>"+
            "    <ul class='actions'>"+
            "         <li><a href='#' class='button'>Pregledaj dela</a></li>"+
            "    </ul>"+
            "</footer>"+
            " </article>  "
            );
        
    }
}


$(document).ready(function () {
    let allArtists = JSON.parse(localStorage.getItem("artists"));
    displayArtists(allArtists);

});
