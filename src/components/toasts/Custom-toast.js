import "./Custom-toast.scss";
import { Row, Col, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";

const CustomToast = (props) => {
  const [show, setShow] = useState(props.show);

  const close = () => {
    setShow(false);
    props.onClose(true);
  };

  return (
    <Row>
      <Col>
        <ToastContainer className="toast-container">
          <Toast onClose={close} show={show} delay={3000}>
            <Toast.Header>
              <strong className="me-auto">{props.title}</strong>
            </Toast.Header>
            <Toast.Body className="text-danger bg-white">
              {props?.message}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default CustomToast;
