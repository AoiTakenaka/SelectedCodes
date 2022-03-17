import '@babel/polyfill';
import * as THREE from 'three';

import vertexSource from '../shaders/vertexShader.vert';
import fragmentSource from '../shaders/fragmentShader.frag';

export default class ThreeCanvas {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) return;

    // キャンバスサイズ
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // レンダー
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    // シーン
    this.scene = new THREE.Scene();

    // カメラ
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height);
    this.camera.position.set(0, 0, 1000);

    // マウス座標
    this.mouse = new THREE.Vector2(0.5, 0.5);

    // ユニフォーム変数
    this.uniforms = {
      u_aspect: {
        value: this.w / this.h,
      },
      u_resolution: {
        value: new THREE.Vector2(this.width, this.height),
      },
      u_time: {
        value: 0.0,
      },
    };

    // モデル
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    this.box = new THREE.Mesh(geometry, material);
    this.scene.add(this.box);

    // モデル２：平面
    const geometry2 = new THREE.PlaneGeometry(2, 2, 10, 10);
    const material2 = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertexSource,
      fragmentShader: fragmentSource,
      // wireframe: true,
    });
    this.plane = new THREE.Mesh(geometry2, material2);
    this.scene.add(this.plane);

    // 描画ループ開始
    this.render();
  }

  render() {
    if (!this.canvas) return;
    requestAnimationFrame(() => {
      this.render();
    });

    const sec = performance.now() / 1000;
    this.uniforms.u_time.value = sec;

    this.box.rotation.y = (sec * Math.PI) / 10;

    this.renderer.render(this.scene, this.camera);
  }

  // mouseMoved() {
  //   console.log();
  // }
}
