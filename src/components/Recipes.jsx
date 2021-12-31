const defaultCompany = {
  name: 'Konark enterprises',
  address: '234 Ottawa st, Ottwa, CA',
  zip: '080976',
};

const metaCompany = {
  ...defaultCompany,
  city: 'Zambia',
  zip: '098765',
};

import React, { useState } from 'react';

export const Recipes = () => {
  const [company, setCompany] = useState({});

  return (
    <div>
      <h3>Current Company</h3>
      <button onClick={() => setCompany(defaultCompany)}>
        Default Company
      </button>
      <button onClick={() => setCompany(metaCompany)}>Meta Company</button>

      <ul>
        {Object.keys(company).map((comp) => (
          <li key={comp}>
            {comp}: {company[comp]}
          </li>
        ))}
      </ul>
    </div>
  );
};

console.log(defaultCompany);
console.log(metaCompany);
