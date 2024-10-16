import React from "react";
import "./ListPage.scss";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import Map from "../../components/Map/Map";
import { useLoaderData } from "react-router-dom";
const ListPage = () => {
const posts =useLoaderData()
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.map(item=>(
            <Card key={item.id}  item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts}/>
      </div>
    </div>
  );
};

export default ListPage;
