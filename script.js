
// script_1 ---------------
function script1 () {
  console.log("---------SCRIPT 1-----------");
  console.log("Bonjour monde");

  let name = prompt("Quel est ton nom ?");
  console.log("Bonjour, " + name + "!");
  alert("Bonjour, " + name + "!");
};

// script_2 ---------------
function script2 () {
  console.log("---------SCRIPT 2-----------");
  function factorial (n) {
    let result = 1;
    while (n>0) {
      result *= n;
      n --;
    }
    return result;
  };

  let n = prompt("choisis un nombre positif a factoriser");
  if (n > 0) {
    console.log("voila la factorielle de " + n + " : " + factorial(n));
    alert("voila la factorielle de " + n + " : " + factorial(n));
  }
  else {
    alert("tu dois entrer un nombre positif ! opération annulée");
  }
};

// script_3 ------------------
function script3 () {
  console.log("---------SCRIPT 3-----------");

  function drawPyramid (height) {
    let drawing = ""
    for (let i = 1; i <= height; i++) {
      drawing +=
        " ".repeat(height-i) +
        "#".repeat(i) +
        "\n"
    }
    return drawing
  };

  let n = prompt("Combien d'étages la pyramide ? (entre 3 et 25)");
  if (n >= 3 && n <= 25) {
    let drawing = drawPyramid(n);
    console.log(drawing);
    alert(drawing)
  } else {
    console.log("on a dit entre 3 et 25 étages !!!");
    alert("on a dit entre 3 et 25 étages !!!");
  }
};

// script 4 ----------------
function script4 () {
  console.log("---------SCRIPT 4-----------");
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Qui est né dans les années 70 ???"+
  "\n(ouvrir l'array avec la petite fleche tu devras)");
  console.log(
    entrepreneurs.filter(
      e =>  e.year >= 1970 && e.year < 1980
  ));

  console.log("Un array avec le nom et le prénom :")
  console.log(
    entrepreneurs.map(
      e => e.first + " " + e.last
  ));

  console.log("Quel age aurait chaque inventeur aujourd'hui ?")
  entrepreneurs.map(
    e => {
      console.log(e.first + " " + e.last + " : " + (2019-e.year) + " ans")
      return null;
  });

  console.log("Et maintenant l'array trié par noms de famille :")
  console.log(
    entrepreneurs.sort(
      function (a,b) {
        return a.last > b.last ? 1 : -1
  }));

}

// script_5 --------------------
function script5 () {
  console.log("---------SCRIPT 5-----------");
  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  let reponse = true;
  for (let book in books) {
    if (book.rented < 1) {
      reponse = false;
  }}
  console.log("-> " + (reponse == false ? "non" : "oui"));

  console.log("Quel est livre le plus emprunté ?");
  console.log( "-> " +
    books.sort((a,b) => b.rented - a.rented)[0].title
  );

  console.log("Quel est le livre le moins emprunté ?");
  console.log( "-> " +
    books.sort((a,b) => a.rented - b.rented)[0].title
  );

  console.log("Trouve le livre avec l'ID: 873495");
  console.log( "-> " +
    books.filter(book => book.id === 873495)[0].title
  );

  console.log("Supprime le livre avec l'ID: 133712");
  console.log(
    books.filter(book => book.id !== 133712)
  ); // j'ai préféré créer un nouvel array que de toucher celui existant
  // pour le remplacer il suffirait de faire books = books.filter...

  console.log("Trie les livres par ordre alphabétique.");
  console.log(
    books.sort(
      (a,b) => a.title > b.title ? 1 : -1
    )
  );
};

// script_6 ---------------

function script6() {
  function string2Arn (str) {
    while (str.length >= 3) {

    }
  }
}


// script1();
// script2();
// script3();
// script4();
script5();
