import { useState } from "react";
import "./Filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const updatedParams = { ...query };
    
    // Remove any empty fields from search params
    Object.keys(updatedParams).forEach(key => {
      if (!updatedParams[key]) {
        delete updatedParams[key];
      }
    });

    setSearchParams(updatedParams);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            value={query.city} 
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            value={query.type} 
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            value={query.property}  
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            value={query.minPrice}  
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            value={query.maxPrice}  
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            value={query.bedroom} 
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
