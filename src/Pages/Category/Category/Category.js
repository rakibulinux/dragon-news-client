import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryNews from "../../CategoryNews/CategoryNews/CategoryNews";

const Category = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h3 className="text-center">
        {categoryNews.length ? (
          <p>{categoryNews.length} post found for this category</p>
        ) : (
          <p>No post found for this category</p>
        )}
      </h3>
      {categoryNews.map((news) => (
        <CategoryNews key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
