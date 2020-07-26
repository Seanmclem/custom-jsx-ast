function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs);

  for (const child of children) {
    if (Array.isArray(child)) {
      elem.append(...child);
    } else {
      elem.append(child);
    }
  }

  return elem;
} // Setup some data


const mainName = 'Geoff';
const friends = ['Sarah', 'James', 'Hercule']; // Create some dom elements

const app = createElement("div", {
  className: "app"
}, createElement("h1", {
  className: "title"
}, " Hello, world! "), createElement("p", null, " Welcome friend, ", mainName, " "), createElement("p", null, createElement("strong", null, "Your friends are:")), createElement("ul", null, friends.map(name => createElement("li", null, name)))); // Render our dom elements

window.document.getElementById('app').replaceWith(app);