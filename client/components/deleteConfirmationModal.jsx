import React from 'react';
export default function DeleteModal(props) {

  function deleteConfirm() {
    event.preventDefault();
    props.delete(props.item);
  }

  function closeModal() {
    props.open();
  }

  return (
    <div className="container">
      <div className="backdrop position-fixed d-flex h-100 w-100">
        <div className="col-md-4 col offset-1 modal-contents m-auto bg-white border rounded mt-5 p-5">
          <img src={props.picture} className="fit-single-cart col-7 offset-2" alt={props.name}/>
          <h2>Are you sure you want to delete {props.name} from your cart?</h2>
          <form>
            <div className="btn-group w-100 p-1">
              <button onClick={closeModal} className="btn btn-outline-info">Cancel</button>
              <button onClick={deleteConfirm} className="btn btn-outline-danger">Remove</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}
