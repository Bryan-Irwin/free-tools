(function() {
  // localStorage pageview counter
  var path = location.pathname || '/';
  var today = new Date().toISOString().slice(0, 10);
  var storageKey = 'calchub_views';
  var data = {};
  try { data = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch(e) {}
  if (!data[path]) data[path] = {};
  data[path][today] = (data[path][today] || 0) + 1;
  try { localStorage.setItem(storageKey, JSON.stringify(data)); } catch(e) {}

  // GA4 placeholder — replace with your measurement ID
  var GA_ID = '';
  if (GA_ID) {
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
})();
