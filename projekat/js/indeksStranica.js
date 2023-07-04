
function MenjajJezik(string){
    localStorage.setItem('jezik',string)
  }
$(document).ready(function(){
       
  if(localStorage.getItem('jezik')==null){
    localStorage.setItem('jezik','sr')
  }
  if(localStorage.getItem('jezik')=='en'){
      $('.MojProfil').text('Profile')
      $('.Slike').text('Paintings').attr('href','artlux-slike-eng.html?artType=paintings')
      $('.Skulpture').text('Sculptures').attr('href','artlux-slike-eng.html?artType=sculptures')
      $('.Ostale').text('Other').attr('href','artlux-slike-eng.html?artType=other')
      $('.Onama').text('About').attr('href','artlux-ONama-eng.html')
      $('.Umetnici').text('Artists').attr('href','artlux-umetnici-eng.html?artType=other')
      $('.Um').text('Art')
      $('.Pocetna').text('Home')
      $('.Komentari1').text('Comments')
      $('.Ponude1').text('Current bids')
      $('#Nesto1').text('Comment')
      $('#NoviKomentar').attr('placeholder','Leave your comment here')
      $('#Nesto').text('Bid')
      $('#Cena').attr('placeholder','Leave your offer here')
      $('.Pagman').text('Art with latest bids')
    }
  
 
  let a=JSON.parse(localStorage.getItem('Ponude'));
  if(a==null){
    if(localStorage.getItem('jezik')=='en'){ $('#card-container').text("There are no recent bids, be the first to bid on something");}
    else
    $('#card-container').text("Jos nema nijedne ponude, budite prvi")}
  // alert(JSON.stringify(a));
  a=a.sort(comparefn);
  // alert(JSON.stringify(a));
  function comparefn(a,b){
    if(a.vreme<b.vreme){return 1}
    else if(a.vreme>b.vreme){return -1}
    return 0;
  }
  // alert(a[0].vreme<a[1].vreme);
  var b,c;
  if(localStorage.getItem('jezik')=='en'){
   b=JSON.parse(localStorage.getItem('paintings1'))
   c=JSON.parse(localStorage.getItem('artists1'))
  }
  else{
  b=JSON.parse(localStorage.getItem('paintings'))
  c=JSON.parse(localStorage.getItem('artists'))}
  let d=0,e=[];
  g=a[0];e.push(g);
  for(i=0;i<a.length;i++){
    if(a[i].stvar!=g.stvar){g=a[i];e.push(g);}
    if(e.length==3)break;
  }
  //alert(JSON.stringify(e));
  var art,artist;
  for(i=0;i<3;i++){
    if(localStorage.getItem('jezik')=='en'){
    if(i>=e.length){break
      art=b[4];
      alert(JSON.stringify)
      artist=c.find(artist=>artist.name==art.artist);
    }else{
    art=b.find(art=>art.id==e[i].stvar);
    artist=c.find(artist=>artist.name==art.artist);}
    }
    else{
      if(i>=e.length){break
      art=b[4];
      
      artist=c.find(artist=>artist.id==art.artistId);
    }else{
    art=b.find(art=>art.id==e[i].stvar);
    artist=c.find(artist=>artist.id==art.artistId);}
    }
    
    // artist=c.find(artist=>artist.id==art.artistId);
    
    // alert(artist);
  $('#card-container').append(
            "<article style='background-color:black;'>"+
            "<a href='"+ art.link +"' class='image'><img src='" + art.image
            +"' alt='"+ art.name+"' /></a>"+
            "<header>"+
            "    <h2><a href='"+ art.link+"'>"+  art.name +"</a></h2>"+ 
            "</header>"+ 
            "<p>" + art.description +" </p>"+ 
            "<p>"+ artist.name  +" (" + art.year +") </p>"+ 
            " <footer class='text-center'>"+
            "    <ul class='actions'>"+
            "         <li><a href='"+ art.link +"' class='button'>See article</a></li>"+
            "    </ul>"+
            "</footer>"+
            " </article>  ")
}}
// jQuery methods go here...
)
