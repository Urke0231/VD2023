
function displayArtists(artists) {
    $('#card-container').html("");
    for (let i = 0; i < artists.length; i++) {
        $('#card-container').append(
            "<article>" +
            "<a href='#' class='image'><img src='" + artists[i].image
            + "' alt='" + artists[i].name + "' /></a>" +
            "<header>" +
            "    <h2>" + artists[i].name + "</h2>" +
            "</header>" +
            "<p>" + artists[i].description + " </p>" +
            " <footer class='text-center'>" +
            "    <ul class='actions'>" +
            "         <li><a href='#' id='" + artists[i].id + "' class='button printPDF'>Artwork overview</a></li>" +
            "    </ul>" +
            "</footer>" +
            " </article>  "
        );

    }
}


$(document).ready(function () {

    localStorage.setItem('jezik', 'en');

    let allArtists = JSON.parse(localStorage.getItem("artists1"));
    displayArtists(allArtists);

    let allArt = JSON.parse(localStorage.getItem("paintings1"));

    $(".printPDF").click(function () {

        let artFromArtist = allArt.filter(art => art.artistId == this.id);
        let artist = allArtists.filter(artist => artist.id == this.id)[0];
        let doc = new jsPDF();

        // Set font and font style for the heading
        doc.setFont("Arial", "bold");
        doc.setFontSize(18);

        // Add the heading text
        const headingText = artist.name;
        const headingX = 20; // X position at the center of the page
        const headingY = 20; // Y position for the heading
        doc.text(headingText, headingX, headingY, { align: "center" });


        doc.setFont("Arial", "normal");
        doc.setFontSize(12);

        let yPos = 40; // Initial Y position for the text

        Object.entries(artFromArtist).forEach(([id, object]) => {
            const text = `${object.name} ( ${object.year} )`;
            doc.text(20, yPos, text);
            yPos += 10; // Increment Y position for the next line
        });




        doc.save(artist.name + '.pdf');
    });
});
