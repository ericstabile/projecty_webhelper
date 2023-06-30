import React from "react";
import { FormGroup, Form, Row, Col } from "react-bootstrap";

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

export const Edit_MultiLine = ({ controlId, label, value, onChange }) => (
  <FormGroup as={Row} controlId={controlId}>
    {label !== "Icon Path" ? (
      <div className="cf-label-underline">
        <Col sm={2}>
          <Form.Label>
            <b>{label}</b>:
          </Form.Label>
        </Col>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows="1"
          />
        </Col>
      </div>
    ) : (
      <>
        <Form.Label className="cf-label-underline">
          <b>{label}</b>:
        </Form.Label>
        <Form.Control
          as="textarea"
          className="cf-control-underline-multi"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows="1"
        />
      </>
    )}
  </FormGroup>
);

export const Edit_SingleLine = ({ controlId, label, value, onChange }) => (
  <FormGroup as={Row} controlId={controlId} className="cf-label-underline">
    <Col sm={8}>
      <Form.Label>
        <b>{label}</b>:
      </Form.Label>
    </Col>
    <Col sm={4}>
      <Form.Control
        type="text"
        value={value}
        className="cf-control-underline-single"
        onChange={(e) => onChange(e.target.value)}
      />
    </Col>
  </FormGroup>
);

export const Edit_Boolean = ({ controlId, label, value, onChange }) => (
  <FormGroup as={Row} controlId={controlId} className="cf-label-underline">
    <Col sm={9}>
      <Form.Label>
        <b>{label}</b>:
      </Form.Label>
    </Col>
    <Col sm={3}>
      <Form.Check
        type="checkbox"
        className="cf-control-boolean"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    </Col>
  </FormGroup>
);
