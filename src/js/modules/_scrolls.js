// ------------------------------------------------------
// スクロール
// ------------------------------------------------------

// ページトップへスクロール
export const goToPageTop = (val) => {
  $(val).on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 500, 'swing');
    return false;
  });
};

// スムーススクロール
export const smoothScroll = (val) => {
  $(val).on('click', () => {
    const speed = 500;
    const href = $(this).attr('href');
    const target = $(href === '#' || href === '' ? 'html' : href);
    const position = target.offset().top;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
};
