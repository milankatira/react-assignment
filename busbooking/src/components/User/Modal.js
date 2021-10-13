import React from "react";

const Modal = (props) => {
  const {
    title,
    textvalue1,
    id,
    name,
    email,
    username,
    func,
    setname,
    setemail,
    setusername,
  } = props;
  return (
    <div>
      <div
        class="modal fade rounded"
        id={id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {title}
              </h5>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  disabled
                  readonly
                  value={textvalue1}
                ></input>
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={name}
                  placeholder="enter your name"
                  onChange={setname}
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={username}
                  placeholder="enter your username"
                  onChange={setusername}
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  placeholder="enter your email"
                  onChange={setemail}
                />
              </div>
              <br />
              <button class="btn btn-dark" onClick={func}>
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

export const Name = ({ name }) => {
  return (
    <div>
      <h1>name is {name}</h1>
    </div>
  );
};
