import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState();

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(()=> {
    setLoding(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
  .then((res)=> res.json())
  .then((data)=>{
    console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
    setProducts(data);
  }).catch((error)=>{
    setError('에러가 발생했습니다!');
  }).finally(() => {setLoding(false)});

  return () => {
    console.log('🧹깨끗하게 청소하는 일들을 합니다');
  }
  }, [checked])


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

