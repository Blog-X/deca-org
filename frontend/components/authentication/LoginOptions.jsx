import React from "react";
import Modal from "../styleComps/Modal";
import Link from "next/link";

function LoginOptions() {
  return (
    <div className="flex flex-col sm:flex-row my-10 py-10 w-full">
      <div className="mx-auto">
        <div className="card w-96 bg-base-300 shadow-xl m-4 ">
          <div className="card-body">
            <h2 className="card-title">Create an organization!</h2>
            <p>
              "Some random description" Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita, quas?
            </p>
            <div className="card-actions justify-end">
              <Modal
                title={"Create an organization!"}
                clickText={"Create now!"}
                type={"create"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="card w-96 bg-base-300 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">Join an Organization!</h2>
            <p>
              "Some random description" Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita, quas?
            </p>
            <div className="card-actions justify-end">
              <Modal
                title={"Join an Organization!"}
                clickText={"Join now!"}
                type={"join"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="card w-96 bg-base-300 shadow-xl m-4">
          <div className="card-body">
            <h2 className="card-title">Join as a guest!</h2>
            <p>
              "Some random description" Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita, quas?
            </p>
            <div className="card-actions justify-end">
              <Modal
                title={"Create a meeting!"}
                clickText={"Generate meeting!"}
                type={"meet"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOptions;
