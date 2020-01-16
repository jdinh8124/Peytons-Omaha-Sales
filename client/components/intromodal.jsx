import React from 'react';

export default function IntroModal(props) {

  return (
    <div className="container">
      <div className="backdrop position-fixed d-flex h-100 w-100">
        <div className="modal-contents m-auto bg-white border rounded mt-5 p-3">
          <h2>Welcome to _________!</h2>
          <p>Please note that this website is a content management application created for the purpose of demonstration.
             Check the box below to acknowledge that the merchandise shown here is not available for purchase,
             that you will not provide genuine financial or personal information,
              and that you are aware no purchase will truly be processed.</p>
          <form>
            <div>
              <input className="form-check-input" type="checkbox" id="acknowledgement" required/>
              <label className="form-check-label" htmlFor="acknowledgement">I acknowledge that this is strictly a demo application</label>
            </div>
            <div className="btn-group w-100 p-1">
              <button className="btn btn-danger w-100"></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
