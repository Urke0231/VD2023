
document.addEventListener('DOMContentLoaded', (event) => {
    let images = {
        'The Icon of Impressionisms': {
            image:'img/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge-768x768.jpg',
            artist:'Claude Monet'
        },
        'The Basket of Apples': {
            image:'img/Paul_Cezanne_The_Basket_of_Apples-768x615.jpg',
            artist:'Paul Cezane'
        },
        'Magic and Myth Arise':{
            image:'img/kwan-6.jpg',
            artist: 'Kristin Kwan'
        } ,
        'The Birth of Venus' : {
            image:'img/the_birty_of_venus.jpg',
            artist:'Sandro Botticelli'
        },
    };

    function createImageCard(title, imageUrl, artist) {
        let td = document.createElement('td'); // kreiramo ćeliju

        let card = document.createElement('div');
        card.className = 'card p-2';

       

        let img = document.createElement('img');
        img.className = 'card-img-top img-cover';
        img.src = imageUrl;
        img.alt = title;
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let titleDiv = document.createElement('div');
        titleDiv.className = 'card-body text-center';

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;
        titleDiv.appendChild(cardTitle);


        let artistName = document.createElement('h6');
        artistName.className = 'card-title';
        artistName.innerText = artist;
        titleDiv.appendChild(artistName);

        let linkDiv = document.createElement('div');
        linkDiv.className = 'card-body text-center';

        let cardLink = document.createElement('a');
        cardLink.href = '#';
        cardLink.className = 'card-link';
        cardLink.textContent = 'Pogledajte više';
        linkDiv.appendChild(cardLink);

        cardBody.appendChild(titleDiv);
        
        cardBody.appendChild(linkDiv);
        
        card.appendChild(cardBody);

        td.appendChild(card);

        return td
    }

    let table = document.getElementById('scrollable_table');
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    let imageCounter = 0;

    for(let imageTitle in images) {
        let imageInfo = images[imageTitle];
        let cell = createImageCard(imageTitle, imageInfo.image, imageInfo.artist);
        tableRow.appendChild(cell);
        
        imageCounter++;
        
      
        if(imageCounter % 3 === 0) {
            tableRow = document.createElement('tr');
            table.appendChild(tableRow);
        }
    }
});