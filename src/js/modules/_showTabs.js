// ------------------------------------------------------
// タブ
// ------------------------------------------------------

const showTab = (tabs, tabContent) => {
  const tab = $(`${tabs}> *`);
  const tabChild = $(`${tabContent}> *`);
  const url = window.location.href;
  let hash = [];
  hash = url.split('#');

  if (hash[1]) {
    const indexId = tab.index($(`.${hash[1]}`));
    tab.eq(indexId).addClass('show-tab');
    tabChild.hide().eq(indexId).show().addClass('show-tab-child');
  } else {
    tab.eq(0).addClass('show-tab');
    tabChild.hide().eq(0).show().addClass('show-tab-child');
  }
  tab.on('click', (e) => {
    const index = tab.index(e.currentTarget);
    tab.removeClass('show-tab');
    $(this).addClass('show-tab');
    tabChild
      .hide()
      .removeClass('show-tab-child')
      .eq(index)
      .show()
      .addClass('show-tab-child');
  });
};

export default showTab;
