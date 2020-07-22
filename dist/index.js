function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child);else elem.append(child);
  }

  return elem;
}

const name = 'Geoff';
const friends = ['Sa69696969rah', 'Jame1111s', 'FUCK REACT'];
const app = createElement("div", {
  className: "app"
}, createElement("h1", {
  className: "title"
}, " Hello, world! "), createElement("p", null, " Welcome back, ", name, " "), createElement("p", null, createElement("strong", null, "Your friends are:")), createElement("ul", null, friends.map(name => createElement("li", null, name))));
window.document.getElementById('app').replaceWith(app);
let myDocument = createElement("p", null, "Hello, world");