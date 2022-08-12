import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";

export default function Home({ productData, userData }) {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className="grid grid-cols-3">
      {productData?.map((product)=>(
        <ProductCard
        key={product.product_id}
        name={product.name}
        stock={product.stock}
        price={product.selling_price}
        />
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export async function getServerSideProps() {
  const product = await fetch("https://assessment.api.vweb.app/products");
  const productData = await product.json();

  const user = await fetch("https://assessment.api.vweb.app/users");
  const userData = await user.json();

  return {
    props: {
      productData,
      userData
    },
  };
};