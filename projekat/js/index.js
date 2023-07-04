function MenjajJezik(string){
    localStorage.setItem('jezik',string)
  }
function Odjavi(){
localStorage.setItem('Trenutni','');location.reload();
} 
function Ponudi(){
 if(localStorage.getItem("Ponude")==null ||JSON.parse(localStorage.getItem("Ponude")).length==0 ){
   user1=JSON.parse(localStorage.getItem("Trenutni"));
   let date=new Date();
  
   Ponude=[{stvar:document.getElementById('OvaUmetnina').value,ponuda:document.getElementById('Cena').value,user:user1.username,vreme:date}]
   localStorage.setItem("Ponude",JSON.stringify(Ponude));
   location.reload()
 }
 else{
   user1=JSON.parse(localStorage.getItem("Trenutni"));
   let date=new Date();
   Ponude={stvar:document.getElementById('OvaUmetnina').value,ponuda:document.getElementById('Cena').value,user:user1.username,vreme:date}
   sve=JSON.parse(localStorage.getItem("Ponude"))
   sve.push(Ponude)
   localStorage.setItem("Ponude",JSON.stringify(sve));
   location.reload()
 }
}
function Objavi(){
 if(localStorage.getItem("Komentari")==null ||JSON.parse(localStorage.getItem("Komentari")).length==0 ){
   user1=JSON.parse(localStorage.getItem("Trenutni"));
  
  
   Ponude=[{user:user1.username,stvar:document.getElementById('OvaUmetnina').value,komentar:document.getElementById('NoviKomentar').value}]
   localStorage.setItem("Komentari",JSON.stringify(Ponude));
   location.reload()
 }
 else{
   user1=JSON.parse(localStorage.getItem("Trenutni"));
   Ponude={user:user1.username,stvar:document.getElementById('OvaUmetnina').value,komentar:document.getElementById('NoviKomentar').value}
   sve=JSON.parse(localStorage.getItem("Komentari"))
   sve.push(Ponude)
   localStorage.setItem("Komentari",JSON.stringify(sve));
   location.reload()
 }
}

$(document).ready(function(){
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
  }
 if(localStorage.getItem("Trenutni")==null || localStorage.getItem("Trenutni")==''){
        $("#Ponude").attr('hidden',true);
        $("#Mesto").attr('hidden',true)
        $("#Mesto1").attr('hidden',true)
        $(".Ponude").attr('hidden',true)
    }
    else{
     $("#Ponude").attr('hidden',false);
        $("#Mesto").attr('hidden',true)
        $("#Mesto1").attr('hidden',true)
        $(".Ponude").attr('hidden',false)
    }
        Lista=JSON.parse (localStorage.getItem("Ponude"));
        Komentari=JSON.parse (localStorage.getItem("Komentari"));
        
        trenutni=document.getElementById('OvaUmetnina').value
          if(localStorage.getItem('jezik')=='en'){
            sveslike=JSON.parse(localStorage.getItem('paintings1'))
            sviartisti=JSON.parse(localStorage.getItem('artists1'))
            for(let i=0;i<sveslike.length;i++){
                if(sveslike[i].id==trenutni){
                   x=sviartisti.find(artist=>artist.name==sveslike[i].artist).description
                    $(".postaviSliku").attr('src',sveslike[i].image)
                    $(".opis").append(x)
                    $(".godina").text(sveslike[i].artist+", "+sveslike[i].year+'.'+" Evaluation:"+(i+1)*1000)
                }
            }}
          else{
            sveslike=JSON.parse(localStorage.getItem('paintings'))
            sviartisti=JSON.parse(localStorage.getItem('artists'))
            for(let i=0;i<sveslike.length;i++){
                if(sveslike[i].id==trenutni){
                  x=sviartisti.find(artist=>artist.id==sveslike[i].artistId).description
                    $(".postaviSliku").attr('src',sveslike[i].image)
                    $(".opis").append(x)
                    $(".godina").text(sveslike[i].artist+", "+sveslike[i].year+'.'+" Procena:"+(i+1)*1000)
                }
            }
          }
         
        if(Lista==null || Lista.length==0){}
        else{
          for(var i =0;i<Lista.length;i++)
            if(Lista[i].stvar==trenutni){
              var text="<tr><td>"+Lista[i].user+":</td><td>" +Lista[i].ponuda+ "</td><td>"
                var mex="<input type='hidden' id='hidden"+i+"'value='"+Lista[i].stvar+"'><input type='hidden' id='0hidden"+i+"'value='"+Lista[i].ponuda+"'>"+"</td>";
             
              $("#ZAB").append(text).append(mex);
            } 
          
        }
        if(Komentari==null || Komentari.length==0){}
        else{
          for(var i =0;i<Komentari.length;i++)
            if(Komentari[i].stvar==trenutni){
              var text="<tr><td>"+Komentari[i].user+":</td><td>" +Komentari[i].komentar+ "</td><td>"
                var mex="</td>";
             
              $("#ZAB1").append(text).append(mex);
              
            } 
          
        }

       
// jQuery methods go here...

});