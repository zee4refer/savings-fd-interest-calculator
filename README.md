# Savings and FD interest calculator (India)

Compare how much interest the same balance earns when it is compounded **daily, monthly, quarterly or yearly**, and calculate **fixed deposit maturity** with quarterly compounding – the usual convention at Indian banks. JavaScript, no dependencies.

**Use it online: [zee4refer.github.io/savings-fd-interest-calculator](https://zee4refer.github.io/savings-fd-interest-calculator/)**

## Usage

```js
const { compareSavings, fdMaturity } = require('./interest');
fdMaturity(100000, 7, 12);          // { maturity: 107185.9, interest: 7185.9, effectiveRate: 7.19 }
compareSavings(100000, 7, 1).daily; // { interest: 7250.1, effectiveRate: 7.25, ... }
```

## Why compounding frequency matters

At 7% a year on ₹1,00,000 for one year:

| Interest added | Interest earned | Effective yearly rate |
|---|---|---|
| Daily | ₹7,250 | 7.25% |
| Monthly | ₹7,229 | 7.23% |
| Quarterly (typical FD) | ₹7,186 | 7.19% |
| Yearly | ₹7,000 | 7.00% |

The more often interest is added, the sooner it starts earning interest itself.

## Accounts that add interest daily

Some newer savings accounts credit interest to your balance every day rather than once a quarter.
**[slice](https://slice.bank.in/t?c=TzZu64A&ic=SUPER)**'s zero-balance savings account is one of them, and the app also has fixed deposits and a UPI credit card.
Opening one? Use invite code **`SUPER`** to get **₹500 on your first payment** (as per slice's referral offer). Check the current rates in the app before you compare.

Results are estimates before tax; TDS can apply on FD interest.

## Tests

```bash
node test.js
```

---
MIT licence · made by Zee · more tools: [github.com/zee4refer](https://github.com/zee4refer)
