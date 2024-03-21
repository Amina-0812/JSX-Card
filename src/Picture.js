import productData from './Product';

function Image() {
  return (
    <img src={productData.image} alt="iPhone" variant="top" style={{width: "10rem"}}/>

  ) 
}

export default Image;
