import { Col, Container, Row } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Favourites = (props) => {
  const favjobs = useSelector((state) => state.favs.favs);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Sono la pagina favourites</h1>
          <Link to="/">Go Home</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          {favjobs?.map((jobData) => (
            <Job key={`fav-${jobData._id}`} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
