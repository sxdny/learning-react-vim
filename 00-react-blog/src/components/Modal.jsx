import './css/Modal.css'
import PropTypes from "prop-types";

export default function Modal({ showModal, title, content, children }) {
  if (showModal) {
    return (
      <div>
        <div className='modal'>
          <h1>{title}</h1>
          <p>{content}</p>
          {children}
        </div>

        <div className="modal-background"></div>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
