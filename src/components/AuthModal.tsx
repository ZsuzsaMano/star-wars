import { LOGIN, SIGNUP } from "@/graphQL/mutations";
import { encryptPassword } from "@/utils/encode";
import { useMutation } from "@apollo/client";
import React, {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  FormEvent,
} from "react";

//TODO:
// - does user already exist?
// - is password correct?
// - retrive token from storage
// - logout clear storage/ remove user data

type AuthModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
};

export const AuthModal: FC<AuthModalProps> = ({ setShowModal, showModal }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const passwordRaw = formData.get("password") as string;
    const password = await encryptPassword(passwordRaw);
    signup({
      variables: {
        email: email,
        password: password,
      },
      onCompleted: ({ signup }) => {
        localStorage.setItem("token", signup.token);
      },
    });
  };

  if (loading) return "Submitting...";

  if (error) alert(error.message);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <form
            onSubmit={onSubmit}
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            {/*header*/}
            <div className="flex justify-between p-4 rounded-t">
              <h3>{isLogin ? "Login" : "Sign up"}</h3>
            </div>
            {/*body*/}
            <div className="flex flex-col p-6 gap-4">
              <input
                className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
                placeholder="email"
                name="email"
                required
                type="email"
              />
              <input
                className="p-2 text-sm w-full outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
                placeholder="password"
                type="password"
                name="password"
                required
                minLength={6}
              />
              <button
                className="text-blue md:text-xs text-left"
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
                type="button"
              >
                {isLogin
                  ? "No account yet? Sign up!"
                  : "Already registered? Login!"}
              </button>
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
                type="submit"
                // disabled={!isFormValid}
              >
                {isLogin ? "Login" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
