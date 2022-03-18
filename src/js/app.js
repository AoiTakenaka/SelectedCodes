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

const smoothScroll = () => {
  const gap = 0;
  const triggers = document.querySelectorAll('a[href^="#"]');

  for (let i = 0; i < triggers.length; i += 1) {
    triggers[i].addEventListener('click', (e) => {
      e.preventDefault();
      const { hash } = triggers[i];
      const target = document.getElementById(hash.replace('#', ''));
      if (!target) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        const rect = target.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const targetPos = rect + offset - gap;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth',
        });
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  threeFnc();
  tabFnc();
  modalFnc();
});

window.addEventListener('load', () => {
  smoothScroll();
});
