import React from 'react';
import Button from './Button';
import { Row, Col, Form } from 'bootstrap';

const BuySellPanel: React.FC = () => {
  return (
    <div className="mt-4 p-3 border rounded bg-light">
      <Row>
        <Col md={6}>
          <h6>Buy</h6>
          <Form>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>BTC</option>
                <option>ETH</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount (USD)</Form.Label>
              <Form.Control type="number" placeholder="1000" />
            </Form.Group>
            <Button>Buy</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h6>Sell</h6>
          <Form>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control as="select">
                <option>BTC</option>
                <option>ETH</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="0.5" />
            </Form.Group>
            <Button>Sell</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default BuySellPanel;