import Banner from "../components/Banner/Banner";
import Products from "../components/Product/Products";

const Home = ({ onAddProuct }) => {
  return (
    <>
      {/* <Banner /> */}
      <Products onAddProuct={onAddProuct} />
    </>
  );
};

export default Home;
