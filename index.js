const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


let pokedex = [
  {
    numero: 01,
    nome: "Blastoise",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
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
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
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
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    descricao: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
    altura: "0.8 m",
    peso: "19.6 kg",
    categoria: "Duck",
    habilidade: "Damp, Cloud Nine"
  },
];

// let message = "";


app.get("/", (req, res) => {
  res.render("index", { titulo: "POKEDEX", pokedex: pokedex });  
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id
  const pokemon = pokedex[id]
  res.render("detalhes.ejs", { pokemon })
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs")
})

app.post("/new", (req, res) => {
  const {nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  const novoPokemon = {
    nome: nome,
    tipo: tipo,
    imagem: imagem,
    descricao: descricao,
    altura: altura,
    peso: peso,
    categoria: categoria,
    habilidade: habilidade
  }
  pokedex.push(novoPokemon);
  res.redirect("/");

})

// app.get("/cadastro", (req, res) => {
//   res.render("cadastro.ejs");
// })

// app.get("/detalhes", (req, res) => {  
//   res.render("detalhes");
// });


// app.get("/cadastro", (req, res) => {  
//   res.render("cadastro");
// });

// app.post("/cadastro", (req, res) => {
//   const pokemon = req.body;
//   pokedex.push(pokemon);
//   res.redirect("/");
// });

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
