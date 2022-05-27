import { Row, Col, Toast, ToastContainer } from "react-bootstrap";

const ErrorToast = ({ showError, setShowError, title, message }) => {
  return (
    <Row>
      <Col>
        <ToastContainer className="toast-container" position="middle-end">
          <Toast
            show={showError}
            onClose={() =>
              setShowError((prev) => ({ ...prev, showError: false }))
            }
          >
            <Toast.Header>
              <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body className="text-danger bg-white">{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default ErrorToast;
