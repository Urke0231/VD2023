const paintings = [
    {
        id:0, 
        type: 'Slike',
        name: "Japanski most",
        year: 1899,
        description:'The icon of impressionisms',
        image: 'img/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge-768x768.jpg',
        artist:'Klod Mone',
        link:'./artlux-Water_Lilies_and_Japanese_Bridge.html'
        
    },
    {
        id:1, 
        type: 'Slike',
        name: "Korpa sa jabukama",
        year: 1895,
        description:'Ikonična slika mrtve prirode',
        image:'img/Paul_Cezanne_The_Basket_of_Apples-768x615.jpg',
        artist:'Pol Sezan',
        link:'./artlux-The_Basket_of_Apples.html'
    },
    {
        id:2,
        type: 'Slike',
        name: "Rodjenje Venere",
        year: 1484,
        description:'Impresivna mitološka kompozicija', 
        image:'img/the_birty_of_venus.jpg',
        artist:'Sandro Botičeli',
        link:'./artlux-the_birty_of_venus.html'
    },
    {
        id:3,
        type: 'Skulpture',
        name: "Gospa iz Brugesa",
        year: 1501,
        description:'Mermerna skulptura device Marije sa malim Isusom', 
        image:'img/Madonna_michelangelo.jpg',
        artist:'Mikelandjelo Buonaroti',
        link:'./artlux-gospa_iz_brugesa.html'
    },
    {
        id:4,
        type: 'Skulpture',
        name: "David",
        year: 1503,
        description:'Mikalandjelovo remek-delo iz doba renesanse', 
        image:'img/David.jpg',
        artist:'Mikelandjelo Buonaroti',
        link:'./artlux-david.html'
    },
    {
        id:5,
        type: 'Skulpture',
        name: "Ekstaza svete Tereze",
        year: 1503,
        description:'Skulpturalna grupa od belog mermera', 
        image:'img/ecstasy_of_saint_teresa.jpg',
        artist:'Đan Lorenco Bernini',
        link:'./artlux-ekstaza_svete_tereze.html'
        
    },
    {
        id:6,
        type: 'Ostale umetnine',
        name: "Majka migrantica",
        year: 1936 ,
        description:'Ikonična predstava velike depresije', 
        image:'img/migrant_mother.jpg',
        artist:'Dorotea Lang',
        link:'./artlux-majka_migrantica.html'
    },
    {
        id:7,
        type: 'Ostale umetnine',
        name: "Jedna i tri stolice",
        year: 1965,
        description:'Primer konceptualne umetnosti', 
        image:'img/oneAndThreeChairs.jpg',
        artist:'Džozef Košut',
        link:'./artlux-jedna_i_tri_stolice.html'
        
    },
    {
        id:8,
        type: 'Ostale umetnine',
        name: "Varvarki sjaj",
        year: 2003,
        description:'Urna klasičnog starogrčkog stila sa prikazom olupina automobila, mobilnih telefona, supermodela..', 
        image:'img/grayson-perry-barbarics.jpg',
        artist:'Grejson Peri',
        link:'./artlux-varvarki_sjaj.html'
        
    }
];


const artists = [
    {
        name:'Klod Mone',
        image:'img/Claude_Monet_1899_Nadar_crop.jpg',
        description:'Oskar-Klod Mone (14. novembar 1840 – 5. decembar 1926) bio je francuski slikar i osnivač impresionističkog slikarstva koji se smatra ključnim prethodnikom modernizma, posebno u svojim pokušajima da naslika prirodu onako kako je on doživljava. Tokom svoje dugogodišnje karijere, bio je najdosledniji i najplodniji praktičar filozofije impresionizma izražavanja percepcija pre prirode, posebno u primeni na plenerskom (spoljnom) pejzažnom slikarstvu. Termin "impresionizam" je izveden iz naziva njegove slike Impresija, izložene 1874. godine.'

    },
    {
        name:'Pol Sezan',
        image:'img/Paul-Cezanne.jpg',
        description:'Pol Sezan (19. januar 1839 – 22. oktobar 1906) bio je francuski umetnik i postimpresionistički slikar čiji je rad uveo nove moduse predstavljanja i uticao na avangardne umetničke pokrete s početka 20. veka. Za Sezan se kaže da je formirao most između impresionizma kasnog 19. veka i ranog Nova linija umetničkog istraživanja 20. veka, kubizam'
    },
    {
        name:'Sandro Botičeli',
        image:'img/Sandro_Botticelli.jpg',
        description:'Alesandro di Marijano di Vani Filipepi (oko 1445[1] — 17. maj 1510), poznatiji kao Sandro Botičeli ili jednostavno Botičeli, bio je italijanski slikar rane renesanse. Botičelijeva posthumna reputacija je patila sve do kasnog 19. veka, kada su ga ponovo otkrili Prerafaeliti koji su podstakli ponovnu procenu njegovog rada. Od tada se smatra da njegove slike predstavljaju linearnu gracioznost kasne italijanske gotike i nekih slika rane renesanse, iako potiču iz druge polovine perioda italijanske renesanse.'

    },
    {
        name: 'Mikelandjelo Buonaroti',
        image:'img/michelangelo.jpg',
        description:'Mikelanđelo di Lodoviko Buonaroti Simoni (6. mart 1475 – 18. februar 1564), poznat kao Mikelanđelo, bio je italijanski vajar, slikar, arhitekta i pesnik visoke renesanse. Rođen u Firentinskoj Republici, njegov rad je inspirisan modelima iz klasične antike i imao je trajan uticaj na zapadnu umetnost.'

    },
    {
        name: 'Đan Lorenco Bernini',
        image:'img/gian_lorenzo_bernini.jpg',
        description: 'Đan Lorenco (ili Đanlorenco) Bernini (7. decembar 1598 – 28. novembar 1680) je bio italijanski vajar i arhitekta. Dok je bila glavna figura u svetu arhitekture, bio je istaknutiji vodeći vajar svog doba, zaslužan za stvaranje baroknog stila skulpture. '

    },
    {
        name: 'Dorotea Lang',
        image:'img/dorothea_lange.jpg',
        description:'Dorotea Lang (rođena Dorotea Margarita Njuchorn; 26. maj 1895 – 11. oktobar 1965) bila je američka dokumentarna fotografkinja i fotoreporterka, najpoznatija po svom radu iz doba velike depresije za Upravu za sigurnost farmi (FSA). Langove fotografije su uticale na razvoj dokumentarne fotografije i humanizovali posledice velike depresije.'

    },
    {
        name: 'Jozef Košut',
        image:'img/joseph-kosuth.jpg',
        description: 'Jozef Košut (rođen 31. januara 1945), američki konceptualni umetnik, živi u Njujorku i Londonu, nakon što je boravio u raznim gradovima Evrope, uključujući Gent i Rim.'

    },
    {
        name: 'Grejson Peri',
        image:'img/grayson_perry.jpg',
        description: 'Ser Grejson Peri CBE RA Hon FRIBA (rođen 1960.) je engleski savremeni umetnik, pisac i emiter. Poznat je po svojim keramičkim vazama, tapiserijama i kros-dressingu, kao i po svojim zapažanjima o savremenoj umetničkoj sceni, kao i po seciranju britanskih predrasuda, mode i slabosti.'
    }


];



$(document).ready(function(){

    //ucitavanje svih init podataka u localStorage

    //umetnine - slike
    if(localStorage.getItem("paintings") == null){
        localStorage.setItem("paintings", JSON.stringify(paintings));
    }
    if(localStorage.getItem("artists") == null){
        localStorage.setItem("artists", JSON.stringify(artists));
    }
   
});
