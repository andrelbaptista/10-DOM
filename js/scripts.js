// movendo pelo DOM
console.log(document.body);
console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// selecionando elementos por tag
const listaItens = document.getElementsByTagName("li");
console.log(listaItens);

// selecionando o elemento por id
const titulo = document.getElementById("title");
console.log(titulo);

// selecionando elementos por classe
const listaProdutos = document.getElementsByClassName("product");
console.log(listaProdutos);

// selecionando elemento por CSS
const produtoClasse = document.querySelectorAll(".product");
console.log(produtoClasse);

const conteudoPrincipal = document.querySelector("#main-container");
console.log(conteudoPrincipal);

// insertBefore
const newP = document.createElement("p");
const insertPoint = document.querySelector("#title");
const parent = insertPoint.parentElement;
console.log(insertPoint);
console.log(parent);

parent.insertBefore(newP, insertPoint);

// appendChild
const navLinkParent = document.querySelector("nav ul");
console.log(navLinkParent);

const novoLi = document.createElement("li");
navLinkParent.appendChild(novoLi);

// replaceChild
const insertReplace = document.querySelector("#title");
console.log(insertReplace);

const titleParent = insertReplace.parentElement;
console.log(titleParent);

const titleReplace = document.createElement("h2");
titleReplace.textContent = "Novo TÍTULO !!!";

titleParent.replaceChild(titleReplace, insertReplace);

// createTextNode
const newText = document.createTextNode("Novo tag h3 com título");
console.log(newText);

const subTitle = document.createElement("h3");
subTitle.appendChild(newText);
console.log(subTitle);

const containerParent = document.querySelector("#main-container");
console.log(containerParent);

containerParent.appendChild(subTitle);

// getAttribute and setAttribute
const firstLinkUpdate = document.querySelector("a");
console.log(firstLinkUpdate);

firstLinkUpdate.setAttribute("href", "https://www.deeptech.com.br");

console.log(firstLinkUpdate.getAttribute("href"));

firstLinkUpdate.setAttribute("target", "_blank");

// offsetWidth offsetHeight clientWidth clientHeight
const footerSection = document.querySelector("footer");
console.log(footerSection);

console.log(footerSection.offsetWidth, footerSection.offsetHeight);
console.log(footerSection.clientWidth, footerSection.clientHeight);

// getBoudingClientRect
const itens = document.querySelectorAll(".product");
console.log(itens);

const firstProduct = itens[0];
console.log(firstProduct);
console.log(firstProduct.getBoundingClientRect());

// CSS and JS
const mainContent = document.querySelector("#main-container");
console.log(mainContent);

mainContent.style.color = "red";
mainContent.style.paddingBottom = "15px";

// Changing multiple styles
const unformatListParent = document.getElementsByTagName("li");
console.log(unformatListParent);
for (const i of unformatListParent) {
i.style.backgroundColor = "red";
}
