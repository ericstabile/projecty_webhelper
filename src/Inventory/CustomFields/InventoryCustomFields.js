import React from "react";
import { FormGroup, Form, Row } from "react-bootstrap";

export const RO_MultiLine = ({ controlId, label, value }) => (
  <FormGroup as={Row} controlId={controlId}>
    <Form.Label className="cf-label-underline"><b>{label}</b></Form.Label>
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

// export const ReadOnlyTextField = ({ controlId, label, value }) => (
//   <FormGroup as={Row} controlId={controlId}>
//     <Form.Label column sm="5">
//       {label}:
//     </Form.Label>
//     <Col sm="7">
//       <Form.Control plaintext readOnly value={value} />
//     </Col>
//   </FormGroup>
// );

// export const ReadOnlyTextField_MultiLine = ({ controlId, label, value }) => (
//   <FormGroup as={Row} controlId={controlId}>
//     <Form.Label>
//       {label}:
//     </Form.Label>
//     <Col>
//       <Form.Control plaintext readOnly value={value} />
//     </Col>
//   </FormGroup>
// );

// export const ReadOnlyFormCheckField = ({ controlId, label, value }) => (
//   <FormGroup as={Row} controlId={controlId}>
//     <Form.Label column sm="5">
//       {label}:
//     </Form.Label>
//     <Col sm="7">
//       <FormCheck disabled checked={value} />
//     </Col>
//   </FormGroup>
// );
