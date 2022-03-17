// ------------------------------------------------------
// アコーディオン
// ------------------------------------------------------

// アコーディオン処理
export const showAccordion = (val) => {
  $(val).next('*').hide();
  $(val).on('click', (e) => {
    const tag = e.currentTarget;
    if ($(tag).hasClass('show-accordion')) {
      $(tag).removeClass('show-accordion').next('*').slideUp();
    } else {
      $(tag).addClass('show-accordion').next('*').slideDown();
    }
  });
};

// アコーディオン処理2
export const showAllAccordion = (val) => {
  $(`${val} dt`).on('click', (e) => {
    const tag = e.currentTarget;
    if ($(tag).hasClass('show')) {
      $(tag).removeClass('show').parent('dl').children('dd').slideUp('fast');
    } else {
      // 常に一つだけの処理
      $(tag).addClass('show').parent('dl').children('dd').slideUp('fast');
      $(tag).next('dd').slideDown('fast');

      // 個別に処理する場合（デフォルトコメントアウト）
      // $(tag).addClass('show').next('dd').slideDown('fast');
    }
  });
};
