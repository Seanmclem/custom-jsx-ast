function createElement(tagName, attrs = {}, ...children) {
  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) {
      elem.append(...child)
    }
    else {
      elem.append(child)
    }
  }

  return elem
}

// Setup some data
const mainName = 'Geoff'
const friends = ['Sarah', 'James', 'Hercule']

// Create some dom elements
const app = (
  <div className="app">
    <h1 className="title"> Hello, world! </h1>
    <p> Welcome friend, {mainName} </p>
    <p>
      <strong>Your friends are:</strong>
    </p>
    <ul>
      {friends.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  </div>
)

// Render our dom elements
window.document.getElementById('app').replaceWith(app)
