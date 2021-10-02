const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

let pokedex = [
  {
    numero: 01,
    nome: "Blastoise",
    tipo: "Water",
    imagem: "01.png",
    descricao: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    altura: "1.6 m",
    peso: "85.5 kg",
    categoria: "Shellfish",
    habilidade: "Torrent"
  },
  {
    numero: 02,
    nome: "Haunter",
    tipo: "Ghost, Poison",
    imagem: "02.png",
    descricao: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
    altura: "1.6 m",
    peso: "0.1 kg",
    categoria: "Gas",
    habilidade: "Levitate"
  },
  {
    numero: 03,
    nome: "Psyduck",
    tipo: "Water",
    imagem: "03.png",
    descricao: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
    altura: "0.8 m",
    peso: "19.6 kg",
    categoria: "Duck",
    habilidade: "Damp, Cloud Nine"
  },
];

let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", {pokedex, message}); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id];
  res.render("detalhes", {
    pokemon,
  });
})

app.get("/cadastro", (req, res) => {  
  res.render("cadastro");
});

app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
