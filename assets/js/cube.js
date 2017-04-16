angular.module('resumeApp').directive('cube', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      var renderer = new THREE.WebGLRenderer({
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff, 0);
      document.body.appendChild(renderer.domElement);

      //Cube Left
      var geometry1 = new THREE.BoxGeometry(1, 1, 1);
      var material1 = new THREE.MeshPhongMaterial({
        color: 0xB3D67E,
        bumpScale: 1,
        specular: 0xD7EFB2,
        shininess: 50,
        shading: THREE.SmoothShading
      });
      var cube1 = new THREE.Mesh(geometry1, material1);
      scene.add(cube1);
      cube1.position.x = -5;

      //Cube Right
      var geometry2 = new THREE.BoxGeometry(1, 1, 1);
      var material2 = new THREE.MeshPhongMaterial({
        color: 0xB3D67E,
        bumpScale: 1,
        specular: 0xD7EFB2,
        shininess: 50,
        shading: THREE.SmoothShading
      });
      var cube2 = new THREE.Mesh(geometry2, material2);
      scene.add(cube2);
      cube2.position.x = 5;

      //Light

      var dirLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
      scene.add(dirLight1);
      dirLight1.position.x = 0;
      dirLight1.position.y = 2;
      dirLight1.target = cube1;

      var dirLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
      scene.add(dirLight2);
      dirLight2.position.x = 0;
      dirLight2.position.y = 2;
      dirLight2.target = cube2;

      var render = function() {
        requestAnimationFrame(render);
        var time = Date.now() * 0.001;
        cube1.rotation.x = -time;
        cube1.rotation.y = time;
        cube2.rotation.x = time;
        cube2.rotation.y = -time;
        renderer.render(scene, camera);
      };

      render();
    }
  };
});
