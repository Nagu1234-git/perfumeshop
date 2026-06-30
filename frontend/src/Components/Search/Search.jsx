import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Search = () => {
  const { all_product } = useContext(ShopContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const filteredProducts = all_product.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px" }}>
        Search Results for "{query}"
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="search-results">
          {filteredProducts.map((item) => (
            <div key={item.id} className="search-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>₹{item.new_price}</p>
              <p style={{ textDecoration: "line-through" }}>
                ₹{item.old_price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>
          ❌ No Products Found
        </h3>
      )}
    </div>
  );
};

export default Search;