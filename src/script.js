import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();
scene.background
	const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000 );

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
    const controls = new OrbitControls(camera, renderer.domElement);

    //SEEMS to be not working for some reason
    const loader = new THREE.TextureLoader();
    const handle = loader.load('/src/Cone.png');
    const cream = loader.load('/src/Cream.png');



    const geometry = new THREE.ConeGeometry( 1.25, 3.55, 32 );
    const material = new THREE.MeshBasicMaterial( {color: "brown"} );
   // material.map = handle;
    const cone = new THREE.Mesh( geometry, material );
    cone.position.set( 0, -0.6 ,0,0 )
    cone.rotateX(160.215)
    scene.add( cone );


    const geometry2 = new THREE.CapsuleGeometry( 1.25, 0.1, 4, 80 );
    const material2 = new THREE.MeshBasicMaterial( { color: "white"} );
   // material2.map = cream;
    const capsule = new THREE.Mesh( geometry2, material2 );


    capsule.position.set( 0, 1.65, 0, 0 );  
    


    scene.add( capsule );

    const geometry3 = new THREE.TorusGeometry( 1.25, 0.1, 16, 100 );
    const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const torus = new THREE.Mesh( geometry3, material3 );
    torus.position.set(0,1.25,0 )
    torus.rotateX(-164.95)

    scene.add( torus );

    
	camera.position.z = 5;
    camera.position.y = 5;
    camera.position.x = 5;

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 0);

    light.position.z = 5;
    scene.add(light);

   
    function animate(){
        requestAnimationFrame(animate);
       
        renderer.render( scene, camera );
    }
    

    controls.update();
    animate();