import React from "react";
import { FormGroup, Form, Row, Col } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";

export const ReadOnlyTextField = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label column sm="5">
      {label}:
    </Form.Label>
    <Col sm="7">
      <Form.Control plaintext readOnly value={value} />
    </Col>
  </FormGroup>
);

export const ReadOnlyFormCheckField = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label column sm="5">
      {label}:
    </Form.Label>
    <Col sm="7">
      <FormCheck disabled checked={value} />
    </Col>
  </FormGroup>
);