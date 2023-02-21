import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction, clearJobsList } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.jobs);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const errors = useSelector((state) => state.jobs.error);
  const favjobs = useSelector((state) => state.favs.favs);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
    //QUI C'ERA IL FETCH COL SETJOBS!
  };

  useEffect(() => {
    dispatch(clearJobsList());
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search {isLoading && <Spinner animation="grow" />}</h1>
          <Link to="/favourites">Vedi Favs ({favjobs.length})</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            {errors !== "" && <Alert variant="danger">{errors}</Alert>}
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.length > 0 && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
