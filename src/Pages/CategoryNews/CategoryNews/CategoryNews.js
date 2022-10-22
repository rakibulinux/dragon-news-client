import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryNews = ({ news }) => {
  const { title, _id, rating, author, total_view, image_url, details } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Image
            roundedCircle
            style={{
              height: "30px",
            }}
            src={author?.img}
          />
          <div className="ms-2">
            <p className="m-0">{author?.name}</p>
            <p className="m-0">{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="">
          <FaStar className="text-warning" />
          <span className="ms-2">{rating.number}</span>
        </div>
        <div>
          <FaEye />
          <span className="ms-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CategoryNews;
