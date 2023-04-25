// # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.

// function adicionaItem(event) {
//     const container = document.getElementById("container")
//     const elemento = document.createElement("article")
//     elemento.innerHTML = "texto"
//     container.insertAdjacentElement("afterend",elemento)
// }

// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item

function adicionaItem(event) {
    const container = document.getElementById("container")
    const elemento = document.createElement("article")
    elemento.innerHTML = "texto"
    elemento.classList.add("item")
    elemento.setAttribute("onclick","removeItem(event)")
    container.insertAdjacentElement("beforeend", elemento)
}

// # Exercício 3
// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

function removeItem(event) {
    event.target.remove()
}

// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.