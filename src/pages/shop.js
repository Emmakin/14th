import React, { useEffect, useRef } from "react";
import SNKRSPricingCard from "../components/Cards/SNKRSPricingCard/SNKRSPricingCard";
import http from "../api/http";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.category?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [search]);

  const getProducts = async () => {
    try {
      setLoading(true);
      const req = await http.get("/product");
      setProducts(req.data);
      setFilteredProducts(req.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(`${error.message}, please restart the server`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <input
          style={{
            width: "300px",
            padding: "10px",
          }}
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: "2rem",
          columnGap: "1rem",
        }}
      >
        {filteredProducts.map((product) => {
          return <SNKRSPricingCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop