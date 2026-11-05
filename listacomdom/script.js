function adicionarItem() {

    var titulo = document.getElementById("titulo");
    var descricao = document.getElementById("descricao");
    var imagem = document.getElementById("imagem");

    var textoTitulo = titulo.value.trim();
    var textoDescricao = descricao.value.trim();
    var textoImagem = imagem.value.trim();

    if (
        textoTitulo !== "" &&
        textoDescricao !== "" &&
        textoImagem !== ""
    ) {

        var lista = document.getElementById("listaProdutos");

        var novoItem = document.createElement("li");

        var nomeProduto = document.createElement("span");
        nomeProduto.textContent = textoTitulo;

        novoItem.appendChild(nomeProduto);

        novoItem.onclick = function () {

            var detalhes =
                document.getElementById("detalhes");

            detalhes.innerHTML = `
                <h3>${textoTitulo}</h3>
                <p>${textoDescricao}</p>
                <img src="${textoImagem}" alt="${textoTitulo}">
            `;
        };

        var botaoRemover =
            document.createElement("button");

        botaoRemover.textContent = "Remover";

        botaoRemover.classList.add("remover");

        botaoRemover.onclick = function(event){

            event.stopPropagation();

            lista.removeChild(novoItem);

            document.getElementById("detalhes")
            .innerHTML = `
                <h3>Selecione um produto</h3>
                <p></p>
            `;
        };

        novoItem.appendChild(botaoRemover);

        lista.appendChild(novoItem);

        titulo.value = "";
        descricao.value = "";
        imagem.value = "";

    } else {

        alert(
            "Preencha todos os campos."
        );

    }
}