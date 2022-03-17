// ------------------------------------------------------
// ユーザーエージェントチェック
// ------------------------------------------------------

const userAgentCheck = () => {
  window.uac = {}; // define uac as a global object
  const ua = window.navigator.userAgent.toLowerCase();
  const ver = window.navigator.appVersion.toLowerCase();

  // check browser version
  /* eslint-disable consistent-return */
  window.uac.browser = (() => {
    if (ua.indexOf('edge') !== -1) {
      return 'edge';
    } // Edge
    if (ua.indexOf('iemobile') !== -1) {
      return 'iemobile';
    } // ieMobile
    if (ua.indexOf('trident/7') !== -1) {
      return 'ie11';
    } // ie11
    if (ua.indexOf('msie') !== -1 && ua.indexOf('opera') === -1) {
      if (ver.indexOf('msie 6.') !== -1) {
        return 'ie6';
      } // ie6
      if (ver.indexOf('msie 7.') !== -1) {
        return 'ie7';
      } // ie7
      if (ver.indexOf('msie 8.') !== -1) {
        return 'ie8';
      } // ie8
      if (ver.indexOf('msie 9.') !== -1) {
        return 'ie9';
      } // ie9
      if (ver.indexOf('msie 10.') !== -1) {
        return 'ie10';
      } // ie10
      // eslint-disable-next-line brace-style
    } else if (ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1) {
      return 'chrome';
    }

    // Chrome
    // eslint-disable-next-line brace-style
    else if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
      return 'safari';
    }

    // Safari
    // eslint-disable-next-line brace-style
    else if (ua.indexOf('opera') !== -1) {
      return 'opera';
    }

    // Opera
    // eslint-disable-next-line brace-style
    else if (ua.indexOf('firefox') !== -1) {
      return 'firefox';
    }

    // Firefox
    else {
      return 'unknown_browser';
    }
  })();

  // check device
  window.uac.device = (() => {
    if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1) {
      return 'iphone';
    }
    if (ua.indexOf('ipad') !== -1) {
      return 'ipad';
    }
    if (ua.indexOf('android') !== -1) {
      return 'android';
    }
    if (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) {
      return 'windows_phone';
    }
    return '';
  })();

  // check ios version
  window.uac.iosVer = (() => {
    if (/iP(hone|od|ad)/.test(window.navigator.platform)) {
      const v = window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      const versions = [
        parseInt(v[1], 10),
        parseInt(v[2], 10),
        parseInt(v[3] || 0, 10),
      ];
      return versions[0];
    }
    return 0;
  })();
  window.uac.isIE =
    window.uac.browser.substr(0, 2) === 'ie' &&
    window.uac.browser !== 'iemobile';
  window.uac.isiOS =
    window.uac.device === 'iphone' || window.uac.device === 'ipad';
  window.uac.isMobile =
    ua.indexOf('mobi') !== -1 ||
    window.uac.device === 'iphone' ||
    (window.uac.device === 'windows_phone' && ua.indexOf('wpdesktop') === -1) ||
    window.uac.device === 'iemobile';
  window.uac.isTablet =
    window.uac.device === 'ipad' ||
    (window.uac.device === 'android' && !window.uac.isMobile);
  window.uac.isTouch = 'ontouchstart' in window;
  window.uac.isModern = !(
    window.uac.browser === 'ie6' ||
    window.uac.browser === 'ie7' ||
    window.uac.browser === 'ie8' ||
    window.uac.browser === 'ie9' ||
    (window.uac.iosVer > 0 && window.uac.iosVer < 8)
  );

  // Set the results as class names of the html
  const homeClass = () => {
    let classStr = ' ';
    classStr +=
      window.uac.browser !== '' ? `${window.uac.browser} ` : 'browser-unknown ';
    classStr +=
      window.uac.device !== '' ? `${window.uac.device} ` : 'device-unknown ';
    classStr += window.uac.isMobile ? 'mobile ' : 'desktop ';
    classStr += window.uac.isTouch ? 'touch ' : 'mouse ';
    classStr += window.uac.isiOS ? 'ios ' : '';
    classStr += window.uac.isIE ? 'ie ' : '';
    classStr += window.uac.isModern ? 'modern ' : 'old ';
    return classStr;
  };

  window.document.addEventListener('DOMContentLoaded', () => {
    window.document.documentElement.className += homeClass();
  });
};

export default userAgentCheck;
