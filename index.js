const SCENE = document.querySelector('a-scene')
console.log('weis');
function addEntityToScene(entity) {
  SCENE.appendChild(entity)
}

function makeSphere() {
  return document.createElement('a-sphere')
}

var x = makeSphere()
