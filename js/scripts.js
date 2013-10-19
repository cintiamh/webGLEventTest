var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 1000;

var scene = new THREE.Scene();

var sphere = new THREE.Mesh(new THREE.SphereGeometry(15, 10, 10), new THREE.MeshBasicMaterial({ color: 'blue' }));
sphere.overdraw = true;
scene.add(sphere);

renderer.render(scene, camera);

var vector = new THREE.Vector3(
    ( event.clientX / window.innerWidth ) * 2 - 1,
    - ( event.clientY / window.innerHeight ) * 2 + 1,
    0.5 );

projector.unprojectVector( vector, camera );

var dir = vector.sub( camera.position ).normalize();

var distance = - camera.position.z / dir.z;

var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
console.log(pos);