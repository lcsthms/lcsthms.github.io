const texte1 = document.getElementById("infos1");
const texte2 = document.getElementById("infos2");
const texte3 = document.getElementById("infos3");

const titre1 = document.getElementById("pays1");
const titre2 = document.getElementById("pays2");
const titre3 = document.getElementById("pays3");

const photo1 = document.getElementById("illus1")
const photo2 = document.getElementById("illus2")
const photo3 = document.getElementById("illus3")
 

function showInfos1() {
    texte1.style.display = "block";
    texte2.style.display = "none";
    texte3.style.display = "none";

    titre1.style.textDecoration ="underline";
    titre2.style.textDecoration ="none";
    titre3.style.textDecoration ="none";

    photo1.style.maxWidth="90%"
    photo2.style.maxWidth="50%"
    photo3.style.maxWidth="50%"
  }

function showInfos2() {
  texte1.style.display = "none";
  texte2.style.display = "block";
  texte3.style.display = "none";

  titre1.style.textDecoration ="none";
  titre2.style.textDecoration ="underline";
  titre3.style.textDecoration ="none";
  

    photo1.style.maxWidth="50%"
    photo2.style.maxWidth="90%"
    photo3.style.maxWidth="50%"
  }

function showInfos3() {
  texte1.style.display = "none";
  texte2.style.display = "none";
  texte3.style.display = "block";

  titre1.style.textDecoration ="none";
  titre2.style.textDecoration ="none";
  titre3.style.textDecoration ="underline";


    photo1.style.maxWidth="50%"
    photo2.style.maxWidth="50%"
    photo3.style.maxWidth="90%"
  }


var video = $("#myVideo");
const nav = document.getElementById('nav');
const vid = document.getElementById('menuVideo');
var prevScrollpos = window.pageYOffset;

window.addEventListener('load', (event) => {
  nav.style.top ="-200px";
  prevScrollpos =0;
});


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else if(prevScrollpos < currentScrollPos){
   nav.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

video[0].onended = function() {
  //nav
  nav.style.top= "0";
  nav.style.position="sticky";

  //video
  vid.style.width ="80%"
  vid.style.marginTop="0";
  vid.style.marginBottom="0";
};


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var fleur1 = document.getElementById("fleur1");
var fleur2 = document.getElementById("fleur2");
var fleur3 = document.getElementById("fleur3");
var illus = document.getElementById('illustration');
var legende = document.getElementById('legende');
var nom = document.getElementById('nom');
var bio = document.getElementById('bio');
var oeuvre1 = document.getElementById('oeuvre1');
var oeuvre2 = document.getElementById('oeuvre2');
var oeuvre3 = document.getElementById('oeuvre3');
var legende1 = document.getElementById('legende1');
var legende2 = document.getElementById('legende2');
var legende3 = document.getElementById('legende3');


fleur1.onclick = function(){
  if (fleur1.getAttribute('src')!="img/fleur4.png") {
    fleur1.src="img/fleur4.png";
    fleur2.src="img/fleur3.png";
    fleur3.src="img/fleur3.png";
  }

  illus.src="img/oeuvre1.jpg";
  oeuvre1.src="img/oeuvre1_2.jpg";
  oeuvre2.src="img/oeuvre1_3.jpg";
  oeuvre3.src="img/oeuvre1_4.jpg";
  nom.innerHTML="Hassan Hajjaj";
  bio.innerHTML="Né à Larache (Maroc) en 1961, Hassan Hajjaj passe son enfance à Londres. Il est créateur, designer et photographe. C'est Artiste autodidacte et adepte du multiculturalisme, il est considéré comme le pionnier du pop art marocain. il est autant influencé par les scènes culturelles et musicales londoniennes, que par son héritage nord africain. Son univers artistique traduit sa capacité à créer des ponts entre ces deux cultures, comme le révèlent ses séries photographiques, entreprises dès 1980. Grandes compositions colorées avec le wax, adoptant les codes de la photographie de mode contemporaine et du pop art, elles font se croiser les styles, les univers et les icônes."
  legende.innerHTML='"Time Out" Hassan Hajjaj, 2007';
  legende1.innerHTML='Kesh Angesls, 2010';
  legende2.innerHTML='Yima Pouffes, Object for Sale';
  legende3.innerHTML='3 Canal 2014';

}

fleur2.onclick = function(){
  if (fleur2.getAttribute('src')!="img/fleur4.png"){
    fleur1.src="img/fleur3.png";
    fleur2.src="img/fleur4.png";
    fleur3.src="img/fleur3.png";
  }

  illus.src="img/oeuvre2.jpg";
  oeuvre1.src="img/oeuvre2_3.jpg";
  oeuvre2.src="img/oeuvre2_4.jpg";
  oeuvre3.src="img/oeuvre2_4.jpg";
  nom.innerHTML="Seydou Keita";
  bio.innerHTML="Seydou Keïta est un photographe portraitiste malien né en 1923 à Bamako et mort le 22 novembre 2001 en France. Considéré comme le « père » de la photographie africaine, Seydou Keïta est un précurseur qui commence son activité de portraitiste dans le Bamako de 1948. le wax, ce tissu décoratif typiquement africain, occupe une place de choix dans les clichés de Keïta. En superposant les imprimés des vêtements aux décors de ses fonds, il a su créer des images hypnotiques d’une rare beauté."
  legende.innerHTML='Sans titre, Seydou Keita, 1958';
  legende1.innerHTML='';
  legende2.innerHTML='Sans Titre, 1948-1964';
  legende3.innerHTML='';
}

fleur3.onclick = function(){
  if (fleur3.getAttribute('src')!="img/fleur4.png"){
    fleur1.src="img/fleur3.png";
    fleur2.src="img/fleur3.png";
    fleur3.src="img/fleur4.png";
  }

  illus.src="img/oeuvre3.jpg";
  oeuvre1.src="img/oeuvre3_2.jpg";
  oeuvre2.src="img/oeuvre3_3.jpg";
  oeuvre3.src="img/oeuvre3_4.jpg";
  nom.innerHTML="Yinka Shonibare";
  bio.innerHTML="Yinka Shonibare est un artiste contemporain britannico-nigérian né le 9 août 1962 à Londres. Son travail explore l'identité culturelle, le colonialisme et le post-colonialisme dans le contexte contemporain de la mondialisation . Une caractéristique de son art est le tissu aux couleurs vives qu'il utilise : le wax-print, qui est devenu l'une des marques de son œuvre. Inspiré du batik indonésien, fabriqué aux Pays-Bas et en Grande-Bretagne et exporté vers l'Afrique de l'Ouest, il est réinterprété par Shonibare, qui en commande des motifs spéciaux, intégrants des éléments modernes, comme des footbaleurs. D'après Shonibare ces tissus représentent une métaphore de quelque chose de multiculturel et de profondément hybride, comme sa propre identité"
  legende.innerHTML='“Woman Shooting Cherry Blossoms” Yinka Shonibare, 2019';
  legende1.innerHTML='How to Blow up Two Heads at Once, 2006';
  legende2.innerHTML='Victorian Philanthropist´s Parlour, 1996-1997';
  legende3.innerHTML='American Library, 2018';
}

