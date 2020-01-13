import React from 'react';

export default function Header(props) {
  return (
    <div className=" navbar navbar-light  bg-dark">
      <div className="ml-5 navbar-brand ">
        <div className="d-inline"><i className="text-white fas fa-dollar-sign "></i></div>
        <div className="ml-1 d-inline text-white">{props.name}</div>
      </div>
    </div>
  );
}
