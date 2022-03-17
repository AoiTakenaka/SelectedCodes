export default class ModalPopup {
  constructor() {
    this.body = document.querySelector('body');

    // モーダルエリア作成
    this.area = document.createElement('div');
    this.area.setAttribute('id', 'modal-area');
    this.body.appendChild(this.area);

    // マスク作成
    const mask = document.createElement('div');
    mask.setAttribute('id', 'modal-mask');
    this.area.appendChild(mask);
    mask.addEventListener('click', () => {
      this.closeModal();
    });

    // コンテナ作成
    this.container = document.createElement('div');
    this.container.setAttribute('id', 'modal-container');
    this.area.appendChild(this.container);

    // クローズボタン作成
    const close = document.createElement('div');
    close.setAttribute('id', 'modal-close');
    const cross = document.createElement('div');
    cross.setAttribute('id', 'modal-cross');
    close.appendChild(cross);
    this.container.appendChild(close);
    close.addEventListener('click', () => {
      this.closeModal();
    });
  }

  init(MODAL, INDEX) {
    const trigger = MODAL.querySelector('.modal-tirgger');
    const content = MODAL.querySelector('.modal-content');

    // トリガー隣接コンテント非表示・クローン
    content.style.display = 'none';
    const clone = content.cloneNode(true);
    this.container.appendChild(clone);

    // トリガーの処理
    trigger.dataset.modalTrgIndex = INDEX;
    trigger.addEventListener('click', (trg) => {
      this.openModal(trg);
    });
  }

  closeModal() {
    const contents = this.area.querySelectorAll('.modal-content');
    this.area.classList.toggle('is-active');
    [...contents].forEach((cnt) => {
      const CNT = cnt;
      CNT.style.display = 'none';
      this.body.style.overflow = 'initial';
    });
  }

  openModal(trg) {
    const contents = this.area.querySelectorAll('.modal-content');
    const index = trg.currentTarget.dataset.modalTrgIndex;
    this.body.style.overflow = 'hidden';
    contents[index].style.display = 'block';
    this.area.classList.toggle('is-active');
  }
}
