function grundWg(event) {
  document.querySelector(
    "#wg"
  ).innerHTML = `...die allerbesti Mitbewohnerin gsi! Vermisse oisi Vierwänd scho immer mal wieder fest!`;
}
function grundGossau(event) {
  document.querySelector(
    "#gossau"
  ).innerHTML = `...die symphatischti Gossauerin im ganze Ruhm Tsüri!`;
}
function grundParty(event) {
  document.querySelector(
    "#party"
  ).innerHTML = `🍻....die beschti, trinkfestischti und unterhaltsamschti Fäschterin, wo eim chan über de Weg laufe!`;
}
function grundWandern(event) {
  document.querySelector(
    "#wandern"
  ).innerHTML = `🤸‍♀️🤸‍♀️🤸‍♀️...superduper Begleitig uf Corona - Lockdown - Wanderige im
Appezell.`;
}

function grundSmoke(event) {
  document.querySelector(
    "#smoke"
  ).innerHTML = `... 🚭😂 die für immer und ewigs besti Terrasse-Rauch-Pause-Begleitig.`;
}
function grundLaufen(event) {
  document.querySelector(
    "#laufen"
  ).innerHTML = `Aaaber au bi oisne Limmat-Jogging-Rundene hemmers guete. #mirchöndauhealthy`;
}

function grundSonne(event) {
  document.querySelector(
    "#sonne"
  ).innerHTML = `...en sunneschi! Wo s immer schafft mich zur gueter Luhne zbringe!`;
}

function grundVertrauen(event) {
  document.querySelector(
    "#vertrauen"
  ).innerHTML = `d'Fründin wo ich mich chan avertraue. 💞 Danke für dini offene Ohre!`;
}

function grundDihai(event) {
  document.querySelector(
    "#dihai"
  ).innerHTML = `..eini vo de erste Persone, wo mir sofort in Sinn chömet wenn ich a dihaime denke.`;
}

function grundOriginal(event) {
  document.querySelector(
    "#original"
  ).innerHTML = `...aaaber vorallem bisch du es Original! Du bisch einzigartig! Einzigartig fantastisch! Du wirsch es na sooo wit schaffe. Du wirsch na soo vieli Mensche mit dinere tolle Art ahstecke und bewege. Egal öb mit 💄 oder mit usklügelte Sales-Strategie für namal e rundi Bier  - oder auf für dini Arbet :D Und wege dem allem, und eifach au willi dich soo gern han, will ich dich na lang i mim Lebe wüsse!`;
}
//carla
function grundZuerich(event) {
  document.querySelector(
    "#zuerich"
  ).innerHTML = `...soooo trurig, dass ich nöd chan a dim Geburi debi si. #no🎂forcarla`;
}
function grundTisch(event) {
  document.querySelector(
    "#tisch"
  ).innerHTML = `...sooo trurig, dass ich nöd chan mit dir uf de Tisch tanze. #no👯‍♀️forcarla`;
}

function grundLive(event) {
  document.querySelector(
    "#live"
  ).innerHTML = `...so trurig, dass mir ois grad nöd chönd live gseh.#carlasherz💔`;
}

function grundTelefon(event) {
  document.querySelector(
    "#telefon"
  ).innerHTML = `...aber so happy, dass mir im 21. Jahrhundert lebet und mir ois drum bald ghöre werdet!#🧐`;
}

function grundGf(event) {
  document.querySelector(
    "#gf"
  ).innerHTML = `...und ich bin na viel happier drüber, dass du sone gueti Fründin vo mir bisch! `;
}

wg = document.querySelector("#wg");
wg.addEventListener("click", grundWg);

gossau = document.querySelector("#gossau");
gossau.addEventListener("click", grundGossau);

party = document.querySelector("#party");
party.addEventListener("click", grundParty);

wandern = document.querySelector("#wandern");
wandern.addEventListener("click", grundWandern);

smoke = document.querySelector("#smoke");
smoke.addEventListener("click", grundSmoke);

laufen = document.querySelector("#laufen");
laufen.addEventListener("click", grundLaufen);

sonne = document.querySelector("#sonne");
sonne.addEventListener("click", grundSonne);

vertrauen = document.querySelector("#vertrauen");
vertrauen.addEventListener("click", grundVertrauen);

dihai = document.querySelector("#dihai");
dihai.addEventListener("click", grundDihai);

original = document.querySelector("#original");
original.addEventListener("click", grundOriginal);

zuerich = document.querySelector("#zuerich");
zuerich.addEventListener("click", grundZuerich);

tisch = document.querySelector("#tisch");
tisch.addEventListener("click", grundTisch);

live = document.querySelector("#live");
live.addEventListener("click", grundLive);

telefon = document.querySelector("#telefon");
telefon.addEventListener("click", grundTelefon);

gf = document.querySelector("#gf");
gf.addEventListener("click", grundGf);

var myVideo = document.getElementById("myVid");
function playVideo() {
  myVideo.play();
}

//autoplay audio by page loading
setTimeout(function () {
  document.getElementById("audio").play();
}, 3000);
