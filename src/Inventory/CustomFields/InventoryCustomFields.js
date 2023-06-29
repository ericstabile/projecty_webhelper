import React from "react";
import { FormGroup, Form, Row } from "react-bootstrap";

export const RO_MultiLine = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label className="cf-label-underline">
      <b>{label}</b>
    </Form.Label>
    <Form.Label className="cf-label-underline">{value}</Form.Label>
  </FormGroup>
);

export const RO_SingleLine = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label className="cf-label-underline">
      <b>{label}</b>: {value}
    </Form.Label>
  </FormGroup>
);

export const RO_Boolean = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label className="cf-label-underline">
      <b>{label}</b>: {value === true ? "Yes" : "No"}
    </Form.Label>
  </FormGroup>
);
