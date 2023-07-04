function Odjavi(){
    localStorage.setItem('Trenutni','');location.reload();
}
function Uloguj(){
    if(localStorage.getItem('Korisnici')==null){
        korisnik=[{username:document.getElementById('name').value,password:document.getElementById('password').value}]
        localStorage.setItem('Korisnici',JSON.stringify(korisnik))
        localStorage.setItem('Trenutni',JSON.stringify(korisnik[0]))
        location.reload()

    }
    else{
        korisnik={username:document.getElementById('name').value,password:document.getElementById('password').value}
        Lista=JSON.parse(localStorage.getItem("Korisnici"));
        var ima=0;
        for(var i=0;i<Lista.length;i++){
          if(Lista[i].username==korisnik.username){ 
            if(Lista[i].password==korisnik.password){localStorage.setItem('Trenutni',JSON.stringify(korisnik)); location.reload();return}
            alert('Ime Vec Postoji');location.reload();return}
        }
        if(ima>0){
          
          
       

        }
        else{
          Lista.push(korisnik);
        localStorage.setItem('Korisnici',JSON.stringify(Lista));
        localStorage.setItem('Trenutni',JSON.stringify(korisnik))
        location.reload()
        }
       

    }
  }
function MenjajJezik(string){
  localStorage.setItem('jezik',string)
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
        $("#Forme").attr('hidden',false);
        $("#Mesto").attr('hidden',true)
        $("#Mesto1").attr('hidden',true)
        $(".odjava").attr('hidden',true)
        
    }
    else{
        $("#Forme").attr('hidden',true);
        $("#Mesto").attr('hidden',false)
        $("#Mesto1").attr('hidden',false)
        $(".odjava").attr('hidden',false)
        Lista=JSON.parse (localStorage.getItem("Ponude"));
        Komentari=JSON.parse (localStorage.getItem("Komentari"));
        if(localStorage.getItem('jezik')=='en'){
        sveStvari=JSON.parse(localStorage.getItem('paintings1'))}
        else{sveStvari=JSON.parse(localStorage.getItem('paintings'))}
        trenutni=JSON.parse(localStorage.getItem("Trenutni"));
        if(Lista==null || Lista.length==0){}
        else{
          for(var i =0;i<Lista.length;i++)
            if(Lista[i].user==trenutni.username){
              x=sveStvari.find(stvar=>stvar.id==Lista[i].stvar).name
              var tr=$("<tr></tr>")
              var text="<td style='text-align:center; vertical-align: middle; padding:10px;text-shadow:2px 2px blue '>"+x+":</td>"
               var text2="<td style='text-align:center; vertical-align: middle; padding:10px;font-size:18px'>" +Lista[i].ponuda+ "</td>"
                var mex="<input type='hidden' id='hidden"+i+"'value='"+x+"'><input type='hidden' id='0hidden"+i+"'value='"+Lista[i].ponuda+"'>"+"</td>";
                
              var dugme=$("<button class='btn btn-outline-warning'>Ukloni</button>").attr('id',i)
              var polje=$("<td></td>").append(dugme);
              dugme.on({click:function(){
                id=parseInt($(this).attr('id'));
                Lista=JSON.parse (localStorage.getItem("Ponude"));
                Lista.splice(id,1);
                alert(Lista);
                localStorage.setItem("Ponude",JSON.stringify(Lista));
                location.reload();
              }})
              $("#ZAB").append(tr).append(text).append(text2).append(polje)
            } 
          
        }
        if(Komentari==null || Komentari.length==0){}
        else{
          for(var i =0;i<Komentari.length;i++)
            if(Komentari[i].user==trenutni.username){
              x=sveStvari.find(stvar=>stvar.id==Komentari[i].stvar).name
              var tr=$("<tr></tr>")
              var text2="<td style='text-align:center; vertical-align: middle; padding:10px;text-shadow:2px 2px blue '>"+x+":</td>"
              var text="<td style='text-align:center; vertical-align: middle;text-shadow:2px 2px blue '>" +Komentari[i].komentar+ "</td>"
              
              var dugme=$("<button class='btn btn-outline-warning'>Ukloni</button>").attr('id',i)
              var polje=$("<td></td>").append(dugme);
              dugme.on({click:function(){
                id=parseInt($(this).attr('id'));
                Lista=JSON.parse (localStorage.getItem("Komentari"));
                Lista.splice(id,1);
                localStorage.setItem("Komentari",JSON.stringify(Lista));
                location.reload();
              }})
              $("#ZAB1").append(tr).append(text2).append(text).append(polje);
            } 
          
        }

    }
    $(".dug").click(function(){BrisiIzPonude($(this).attr('id'))})
// jQuery methods go here...

});
function BrisiIzPonude(i){
    id=parseInt(i);
    Lista=JSON.parse (localStorage.getItem("Ponude"));
    Lista.splice(id,1);
  }