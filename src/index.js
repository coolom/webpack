const company = {
  name: 'Konark enterprises',
  address: '234 Ottawa st, Ottwa, CA',
  zip: '080976',
};

const metaCompany = {
  ...company,
  city: 'Zambia',
  zip: '098765',
};

console.log(company);
console.log(metaCompany);
