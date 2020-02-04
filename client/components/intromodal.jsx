import React from 'react';

export default function IntroModal(props) {

  return (
    <div className="container">
      <div className="backdrop position-fixed d-flex h-100 w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 modal-contents m-auto bg-white border rounded mt-5 p-5">
          <h2>{'Welcome to Peyton\'s Omaha Sales!'}</h2>
          <p>Please note that this website is a content management application created for the purpose of demonstration.
            Check the box below to acknowledge that the merchandise shown here is not available for purchase,
            that you will not provide genuine financial or personal information,
              and that you are aware no purchase will truly be processed.</p>
          <form onSubmit={props.onClick}>
            <div className="ml-4">
              <input className="form-check-input" type="checkbox" id="acknowledgement" required/>
              <label className="form-check-label" htmlFor="acknowledgement">I acknowledge that this is strictly a demo application</label>
            </div>
            <div className="btn-group w-100 p-1">
              <button type="submit" className="btn btn-danger w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
