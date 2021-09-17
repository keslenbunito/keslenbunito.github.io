var listaFilmes = [
  "https://pbs.twimg.com/profile_images/593385936035131392/7oIsDCkH_400x400.jpg",

  "https://m.media-amazon.com/images/I/51H38+5YB0L._SX260_.jpg",

  "https://ichi.pro/assets/images/max/724/0*XbhsexPkNDld5taf.gif",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png"
];

var n1 = document.write(
  "<img src=" +
    listaFilmes[0] +
    " " +
    'onclick="teste()"' +
    " " +
    'style="cursor:pointer">'
);

var n2 = document.write(
  "<img src=" +
    listaFilmes[1] +
    " " +
    'onclick="teste2()"' +
    " " +
    'style="cursor:pointer">'
);

var n3 = document.write(
  "<img src=" +
    listaFilmes[2] +
    " " +
    'onclick="teste3()"' +
    " " +
    'style="cursor:pointer">'
);

var n4 = document.write(
  "<img src=" +
    listaFilmes[3] +
    " " +
    'onclick="teste4()"' +
    " " +
    'style="cursor:pointer">'
);

function teste() {
  window.location.href = "https://www.transformice.com";
}
function teste2() {
  window.location.href = "https://magic.wizards.com/pt-BR";
}
function teste3() {
  window.open("https://ninja-muffin24.itch.io/funkin");
}

function teste4() {
  window.open("https://www.minecraft.net");
}