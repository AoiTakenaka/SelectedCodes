export default class SwitchTab {
  constructor(TAB) {
    this.index = 0;
    this.hash = window.location.hash;
    this.titles = TAB.querySelector('.js-tab-titles');
    this.contents = TAB.querySelector('.js-tab-contents');

    // コンテント部の処理
    [...this.contents.children].forEach((cnt, i) => {
      const CNT = cnt;
      CNT.dataset.cntIndex = i;
    });

    // タイトル部の処理
    [...this.titles.children].forEach((ttl, i) => {
      const TTL = ttl;
      TTL.dataset.ttlIndex = i;
      TTL.style.cursor = 'pointer';
      TTL.addEventListener('click', (e) => {
        e.stopPropagation();
        this.changeTitles(e.currentTarget.dataset.ttlIndex);
        this.changeContents(e.currentTarget.dataset.ttlIndex);
      });
    });
  }

  // 初期実行
  init() {
    const hashedCnt = this.hash !== '' ? this.contents.querySelector(this.hash) : false;

    if (!hashedCnt) {
      this.changeTitles(this.index);
      this.changeContents(this.index);
    } else {
      const hashedIndex = hashedCnt.dataset.cntIndex;
      this.changeTitles(hashedIndex);
      this.changeContents(hashedIndex);
    }
  }

  changeTitles(INDEX) {
    [...this.titles.children].forEach((ttl) => {
      ttl.classList.remove('is-active');
    });
    this.titles.children[INDEX].classList.add('is-active');
  }

  changeContents(INDEX) {
    [...this.contents.children].forEach((cnt) => {
      const CNT = cnt;
      CNT.style.display = 'none';
      CNT.classList.remove('is-show');
    });
    this.contents.children[INDEX].classList.add('is-show');
    this.contents.children[INDEX].style.display = 'block';
  }
}
