import React, { FC, Dispatch, SetStateAction, useState } from "react";

type AuthModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
};

export const AuthModal: FC<AuthModalProps> = ({ setShowModal, showModal }) => {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
  });
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between p-4 rounded-t">
              <h3>Login / Sign up</h3>
            </div>
            {/*body*/}
            <div className="flex flex-col p-6 gap-4">
              <input
                className="p-2 text-sm w-full md:w-1/2 outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
                placeholder="email"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
              />
              <input
                className="p-2 text-sm w-full md:w-1/2 outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
                placeholder="password"
                type="password"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  })
                }
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end">
              <button
                className="text-red-500 uppercase px-6 py-2 mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue text-white active:bg-emerald-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
