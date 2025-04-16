import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
import { apagarItemdaLista} from "./scripts/apagarItemdaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);
})

botaoExcluir.addEventListener("click", (evento) =>{
    evento.preventDefault();
    const apagar = apagarItemdaLista();
})

verificarListaVazia(listaDeCompras);