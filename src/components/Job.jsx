import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BsEraserFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFavJob, addFavJob } from "../redux/actions";

const Job = ({ data }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
        {location.pathname === "/favourites" ? (
          <BsEraserFill
            onClick={() => {
              dispatch(removeFavJob(data._id));
            }}
          />
        ) : (
          <FaHeart
            onClick={() => {
              dispatch(addFavJob(data));
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
