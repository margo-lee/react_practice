import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { v4 } from "uuid";

const Subtest = ({ add }) => {
  const [note, setNote] = useState("");
  let addItem = () => {
    // console.log(note);
    add(function (prev) {
      return [...prev, { id: v4(), note }];
    });
  };
  let noteChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="新項目"
              value={note}
              onChange={noteChange}
            />
          </Col>
          <Col xs="auto">
            <Button variant="success" onClick={addItem}>
              新增
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export { Subtest };
