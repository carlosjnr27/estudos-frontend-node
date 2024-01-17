import { renderizarCatalogo } from "./src/cartaoProduto.js";
import { exibirFiltros } from "./src/filtrosCatalogo.js";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/meuCarrinho.js";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
exibirFiltros();