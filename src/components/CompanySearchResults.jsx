import { useEffect } from "react";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const errors = useSelector((state) => state.jobs.error);
  const favjobs = useSelector((state) => state.favs.favs);

  useEffect(() => {
    dispatch(getJobsAction(params.companyName, "company"));
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search {isLoading && <Spinner animation="grow" />}</h1>
          <Link to="/">Home </Link>
          <Link to="/favourites">Favourites ({favjobs.length})</Link>
        </Col>
      </Row>
      <Row>
        {errors !== "" && <Alert variant="danger">{errors}</Alert>}
        <Col>{jobs.length > 0 && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}</Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
