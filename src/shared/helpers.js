var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

function isMobile() {
  return (navigator.userAgent.match(/Android/i) || 
          navigator.userAgent.match(/webOS/i) || 
          navigator.userAgent.match(/iPhone/i) || 
          navigator.userAgent.match(/iPad/i) || 
          navigator.userAgent.match(/iPod/i) || 
          navigator.userAgent.match(/BlackBerry/i) || 
          navigator.userAgent.match(/Windows Phone/i))
};

function sort(brothers) {
  brothers.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}
export { isChrome, isMobile, sort };
