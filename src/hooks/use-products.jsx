import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loding, setLoding] = useState(false);

  useEffect(()=> {
    setLoding(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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
  }, [salesOnly]);

  return [loding, error, products];
}