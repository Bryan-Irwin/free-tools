var CalcHub = {
  formatNum: function(n, decimals) {
    if (typeof decimals === 'undefined') decimals = 2;
    return Number(n).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals
    });
  },

  formatMoney: function(n) {
    return '$' + Number(n).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  },

  sqftToSqm: function(sqft) { return sqft * 0.092903; },
  sqmToSqft: function(sqm) { return sqm / 0.092903; },
  cubicFtToYards: function(cuft) { return cuft / 27; },
  gallonsToLiters: function(gal) { return gal * 3.78541; },

  showResults: function(el) {
    if (typeof el === 'string') el = document.getElementById(el);
    if (el) {
      el.style.display = '';
      el.classList.add('visible');
    }
  },

  setResult: function(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
};
