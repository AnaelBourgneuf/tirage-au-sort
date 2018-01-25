
var ctx;
window.onload=pageChargee;

xd = new Array(0.5,0.25,0.75,0.5,0.25,0.75,0.25,0.25,0.75,0.75,0.25,0.25,0.75,0.75,0.5,0.25,0.25,0.75,0.75,0.25,0.75);
yd = new Array(0.5,0.25,0.75,0.5,0.25,0.75,0.25,0.75,0.75,0.25,0.25,0.75,0.75,0.25,0.5,0.25,0.75,0.75,0.25,0.5,0.5);
debut = new Array(0,0,1,3,6,10,15,21)

taillede=100;
var d1;
var interval = 1;


function traceDe(n,pos){
	ctx.beginPath();
	ctx.fillStyle="bisque";
	ctx.fillRect(pos,25,100,100);
	ctx.fill();
	for(i=debut[n] ;i<debut[n]+n ;i++){
		ctx.beginPath();
		ctx.fillStyle="grey";
		ctx.arc(xd[i]*100+pos,yd[i]*100+25,10,0,Math.PI*2,true);
		ctx.fill();
	}
}

function pageChargee(){
	var c = document.getElementById("mon_canvas");
  	ctx = c.getContext("2d");
  	bouton = document.getElementById("tirer");
  	bouton.addEventListener('click', jouer, false);
    //document.getElementById("tirer").onclick=jouer();
}

function lancerDes(){
	d1= Math.ceil(Math.random()*6);
	traceDe(d1,150);
 }

function arretLancer(){
	clearInterval(interval);
	trouveGagnant();
}

function jouer(){
	interval = setInterval(lancerDes,100);
	setTimeout(arretLancer,3000);
 }

function trouveGagnant(){

    fichier = '"Horodateur","Score total","Nom","Nom [Score]","Nom [Commentaires]","Prénom","Prénom [Score]","Prénom [Commentaires]","Adresse mail","Adresse mail [Score]","Adresse mail [Commentaires]","Quel langage de programation apprend-on durant la première année","Quel langage de programation apprend-on durant la première année [Score]","Quel langage de programation apprend-on durant la première année [Commentaires]","Quelle est la phrase écrite sur l’affiche de la machine à café","Quelle est la phrase écrite sur l’affiche de la machine à café [Score]","Quelle est la phrase écrite sur l’affiche de la machine à café [Commentaires]","Quel nom correspond bien à une salle du campus IMIE Caen","Quel nom correspond bien à une salle du campus IMIE Caen [Score]","Quel nom correspond bien à une salle du campus IMIE Caen [Commentaires]"\n' +
        '"2018/01/22 3:49:23 PM UTC+1","3.00 / 3","Pouliotte","-- / 0","","Susanne","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:50:16 PM UTC+1","3.00 / 3","Saindon","-- / 0","","Martine","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:50:52 PM UTC+1","3.00 / 3","Bois","-- / 0","","Monique","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:51:20 PM UTC+1","2.00 / 3","Dupont","-- / 0","","Fifine","-- / 0","","","-- / 0","","Delphi","0.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:52:17 PM UTC+1","2.00 / 3","Brault","-- / 0","","Isabelle","-- / 0","","","-- / 0","","Java","1.00 / 1","","Un geek n’est pas en retard il lag","0.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:52:53 PM UTC+1","3.00 / 3","Faubert","-- / 0","","Victoire","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:53:44 PM UTC+1","2.00 / 3","Cousteau","-- / 0","","Bernard","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle Sa du démon","0.00 / 1",""\n' +
        '"2018/01/22 3:56:09 PM UTC+1","3.00 / 3","Poirier","-- / 0","","Pauline","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:56:47 PM UTC+1","3.00 / 3","Gamelin","-- / 0","","Geneviève","-- / 0","","","-- / 0","","Java","1.00 / 1","","Good coffee d’ailleurs","1.00 / 1","","Salle AD","1.00 / 1",""\n' +
        '"2018/01/22 3:57:25 PM UTC+1","3.00 / 3","Massé","'

    jpo = fichier.split("\n");

    tab = new Array();

    for ( i = 1; i < jpo.length; i++){
        tmp=jpo[i].split(",");
        score = tmp[1];
        score = score.split("/");
        score = (score[0]);
        score = score[1]+score[2]+score[3]+score[4]
        if (score == 3){
            nomprenom = new Array;
            nomprenom.push(tmp[2])
            nomprenom.push(tmp[5]);
            tab.push(nomprenom);
        }
    }

    rand = parseInt(Math.random()*tab.length);
	gagnant = tab[rand];
	nom = gagnant[0];
	temp="";
	for (i = 1; i < nom.length-1; i++){
		temp += nom[i];
	}
	nom = temp;
	prenom = gagnant[1];
    temp="";
    for (i = 1; i < prenom.length-1; i++){
        temp += prenom[i];
    }
    prenom = temp;

	zone = document.getElementById("gagnant");
	zone.innerHTML="le (la) gagnant(e) est <b>" + prenom + " " + nom +"</b>.";
}