import 'core-js/stable';
import 'regenerator-runtime/runtime';

import userAgentCheck from './modules/_userAgentChecker';
import ThreeCanvas from './modules/_ThreeCanvas';

userAgentCheck();

const threeFnc = () => {
  const threeCanvas = new ThreeCanvas();
  threeCanvas.render();
};

document.addEventListener('DOMContentLoaded', () => {
  threeFnc();
});
