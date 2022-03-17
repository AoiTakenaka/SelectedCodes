import 'core-js/stable';
import 'regenerator-runtime/runtime';

import userAgentCheck from './modules/_userAgentChecker';
import ThreeCanvas from './modules/_ThreeCanvas';
import SwitchTab from './modules/_switchTab';
import ModalPopup from './modules/_modalPopup';

userAgentCheck();

const threeFnc = () => {
  const threeCanvas = new ThreeCanvas();
  threeCanvas.render();
};

const tabFnc = () => {
  const tab = document.querySelectorAll('.js-tab');
  for (let i = 0; i < tab.length; i += 1) {
    const Tab = new SwitchTab(tab[i]);
    Tab.init();
  }
};

const modalFnc = () => {
  const Modal = new ModalPopup();
  const modal = document.querySelectorAll('.js-modal');
  for (let i = 0; i < modal.length; i += 1) {
    Modal.init(modal[i], i);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  threeFnc();
  tabFnc();
  modalFnc();
});
