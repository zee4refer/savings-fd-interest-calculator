/**
 * Savings and fixed-deposit interest calculator: compare daily, monthly and quarterly compounding,
 * and FD maturity (Indian banks usually compound FDs quarterly). MIT licence.
 */
'use strict';
var FREQ = { daily: 365, monthly: 12, quarterly: 4, yearly: 1 };

/** Compound interest. rate = annual % ; years may be fractional. */
function compound(principal, rate, years, freq) {
  var n = FREQ[freq] || freq;
  var amount = principal * Math.pow(1 + rate / 100 / n, n * years);
  return { principal: principal, interest: round(amount - principal), maturity: round(amount),
    effectiveRate: round((Math.pow(1 + rate / 100 / n, n) - 1) * 100) };
}

/** The same balance compounded daily, monthly, quarterly and yearly – side by side. */
function compareSavings(balance, rate, years) {
  var out = {};
  Object.keys(FREQ).forEach(function (f) { out[f] = compound(balance, rate, years, f); });
  return out;
}

/** FD maturity: quarterly compounding (the usual Indian bank convention); tenure in months. */
function fdMaturity(principal, rate, months) {
  return compound(principal, rate, months / 12, 'quarterly');
}

function round(n) { return Math.round(n * 100) / 100; }

if (typeof module !== 'undefined') module.exports = { compound: compound, compareSavings: compareSavings, fdMaturity: fdMaturity };
