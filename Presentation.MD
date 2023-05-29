# Manipulação de DOM com JavaScript puro

## 1. Introdução à DOM

- A DOM representa a estrutura em árvore dos elementos HTML de um documento.

## 2. Acesso aos elementos do DOM

- Use métodos como getElementById, querySelector e querySelectorAll para acessar elementos específicos do DOM.

```javascript
// Acessando um elemento pelo seu id
const meuElemento = document.getElementById("meuId");

// Acessando elementos usando seletores CSS
// querySelector === .find Acha o primeiro
const meuElemento2 = document.querySelector(".minhaClasse");
// Seleciona todos
const meusElementos = document.querySelectorAll("p");
```

## 3. Manipulação de elementos

- Modifique propriedades dos elementos, adicione ou remova classes, crie novos elementos e manipule atributos usando JavaScript.

```javascript
// Modificando o conteúdo de um elemento
meuElemento.innerHTML = "Novo conteúdo";

// Adicionando uma classe a um elemento
meuElemento.classList.add("minhaClasse");

// Criando um novo elemento e adicionando-o ao DOM
const novoElemento = document.createElement("div");
novoElemento.innerHTML = "Novo elemento";
document.body.appendChild(novoElemento);
```

## 4. Manipulação de eventos

- Adicione manipuladores de eventos aos elementos do DOM usando o método addEventListener.

```javascript
// Adicionando um manipulador de evento de clique
meuElemento.addEventListener("click", () => {
  console.log("Clicou no elemento!");
});

// Removendo um elemento do DOM
meuElemento.remove();
```

## 5. Traversing (navegação) do DOM

- Navegue pelos elementos relacionados no DOM usando propriedades como parentNode, childNodes, nextSibling e outros.

- Essas propriedades de navegação do DOM podem ser usadas para percorrer a estrutura de elementos HTML e acessar elementos relacionados para realizar operações ou obter informações específicas.

```javascript
// Acessando o pai de um elemento
const meuElemento = document.getElementById("meuId");
const paiDoElemento = meuElemento.parentNode;

// Acessando os filhos de um elemento
const filhosDoElemento = meuElemento.childNodes;

// Iterando pelos filhos de um elemento
filhosDoElemento.forEach((filho) => {
  console.log(filho);
});

// Acessando o próximo elemento irmão
const proximoElemento = meuElemento.nextSibling;
```

# DOM vs Virtual DOM

- a principal diferença entre a DOM e a Virtual DOM no contexto do Vue.js é que a DOM é a representação real dos elementos HTML no documento, enquanto a Virtual DOM é uma representação virtual otimizada pelo Vue.js, usada para atualizar eficientemente o DOM real, reduzindo o impacto no desempenho.

# Manipulação de DOM com Vue.js

O Vue.js oferece recursos adicionais para a manipulação de DOM, facilitando a interação com o DOM de maneira reativa e declarativa. Aqui estão alguns pontos-chave:

## Diretivas

- Use diretivas como v-bind, v-if, v-for para vincular dados, renderizar elementos condicionalmente e renderizar listas no DOM.
  Manipulação de eventos

- Utilize a diretiva v-on para lidar com eventos no DOM, associando métodos Vue.js a eventos específicos.

- Defina propriedades computadas que são calculadas com base em dados reativos e atualizadas automaticamente sempre que os dados relevantes mudarem.

### Referências a elementos

- Use a diretiva ref para obter referências a elementos específicos do DOM no código Vue.js.

> A diretiva ref é usada para obter referências a elementos ou componentes no DOM real, permitindo que você acesse e manipule diretamente esses elementos. As modificações feitas através da referência ref afetam a DOM real.

```javascript
<template>
  <div>
    <h1 ref="titulo">Título</h1>
    <button ref="botao" @click="alterarTitulo">Alterar Título</button>
  </div>
</template>

<script>
export default {
  methods: {
    alterarTitulo() {
      // Acessando o elemento diretamente usando a referência
      this.$refs.titulo.innerText = "Novo Título";

      // Acessando o botão diretamente usando a referência
      this.$refs.botao.disabled = true;
    }
  }
}
</script>
```

# Boas Práticas

1. De preferência para usar frameworks como vue ou react para manipular a DOM.

2. Sempre que possível utilize ID para de referir ao elemento que deseja manipular.

3. Salve o elemento em uma variável para não usar o seletor múltiplas vezes.

4. Ao remover um elemento da DOM lembre-se de remover todos os eventos.

5. Ao lidar com a situação onde vários elementos compartilham de um único evento, considere usar o conceito de Eventos delegados. Que consiste em colocar o evento do pai e checar se o target faz parte dessa lista de elementos que deveriam ter esse evento.

```javascript
const lista = document.getElementById("minhaLista");

lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicou em um item da lista:", event.target.textContent);
  }
});
```

# Exemplos Práticos

1. Imprimir um elemento específico da tela.

   > @services\utils.ts

2. Interação com bibliotecas antigas.

   > @services\Map\mapComponent.ts

3. Criar indicações de movimento na tela para o usuário.

   > @views\Vessels\DeckPlanning\DeckContainer.vue

4. Criar um scroll dinâmico, baseado na viewport do usuário.

   > @components\ganttChart\components\modals\NewTask\NewTaskContainer.vue
