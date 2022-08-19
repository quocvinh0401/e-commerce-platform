import React from "react";
import "./HomePage.css";
import Header from "../header/Header";
import SaleAdvertisement from "../saleAdvertisement/SaleAdvertisement";
import Category from "../category/Category";
import FlashSale from "../flashSale/FlashSale";
import ShopeeMall from "../shopeeMall/ShopeeMall";
import SearchTrend from "../searchTrend/SearchTrend";
import TopSearch from "../topSearch/TopSearch";
import Suggestion from "../suggestion/Suggestion";
import Introduction from "../introduction/Introduction";

function HomePage() {
  return (
    <div className="homePage">
      <Header isSticky={true} />
      <main>
        <SaleAdvertisement />
        <img
          src="https://cf.shopee.vn/file/0ed0d80b26a4a8dc8f8652679f37604d"
          alt=""
        />
        <Category />
        <FlashSale />
        <img
          src="https://cf.shopee.vn/file/9590910c45efd1809bfc59cb8f6bf71a"
          alt=""
        />
        <ShopeeMall />
        <SearchTrend />
        <TopSearch />
        <Suggestion />
        <Introduction />
      </main>
    </div>
  );
}

export default HomePage;
