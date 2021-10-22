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
  <>
  
  <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Get an iCoder Account</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-group">
              <label for="cexampleInputPassword1">Confirm Password</label>
              <input type="password" class="form-control" id="cexampleInputPassword1"/>
            </div>

            <button type="submit" class="btn btn-primary">Creat Account</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
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
    </>
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
