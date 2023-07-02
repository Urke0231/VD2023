const paintings = [
    {
        id:0, 
        type: 'painting',
        name: "Water lillies and Japanese bridge",
        year: 1899,
        description:'The icon of impressionisms',
        image: 'img/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge-768x768.jpg',
        artist:'Claude Monet',
        link:'./artlux-Water_Lilies_and_Japanese_Bridge.html'
        
    },
    {
        id:1, 
        type: 'painting',
        name: "The Basket of Apples",
        year: 1895,
        description:'Iconic painting of dead nature',
        image:'img/Paul_Cezanne_The_Basket_of_Apples-768x615.jpg',
        artist:'Paul Cezane',
        link:'./artlux-The_Basket_of_Apples.html'
    },
    {
        id:2, 
        type: 'painting',
        name: "Magic and Myth Arise",
        year: 2010,
        description:'Modern awarded painting',
        image:'img/kwan-6.jpg',
        artist: 'Kristin Kwan',
        link:'./artlux-Magic_and_Myth_Arise.html'
    },
    {
        id:3,
        type: 'painting',
        name: "The Birth of Venus",
        year: 1484,
        description:'The icon of impressionisms', 
        image:'img/the_birty_of_venus.jpg',
        artist:'Sandro Botticelli',
        link:'./artlux-the_birty_of_venus.html'
    },
];


const artists = [

];



$(document).ready(function(){

    //ucitavanje svih init podataka u localStorage

    //umetnine - slike
    if(localStorage.getItem("paintings") == null){
        localStorage.setItem("paintings", JSON.stringify(paintings));
    }
    
   
});
