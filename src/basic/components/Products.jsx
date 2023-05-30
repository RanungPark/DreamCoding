import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loding, error, products] = useProducts({salesOnly: checked});
  const handleChange = () => setChecked((prev) => !prev);

  if(loding) {
    return <p>로딩중입니다!</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <input type="checkbox" id="checkbox" value={checked} onChange={handleChange}/>
      <label htmlFor="checkbox">Show Only 🔥Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

