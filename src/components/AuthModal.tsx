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
import { AuthForm } from "./AuthForm";
import { useSquadStore } from "@/store/zustand";
import { Loader } from "./Loader";

type AuthModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
};

export const AuthModal: FC<AuthModalProps> = ({ setShowModal, showModal }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const mutation = isLogin ? LOGIN : SIGNUP;
  const [loginSignup, { data, loading, error }] = useMutation(mutation);
  const state = useSquadStore();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /** get data from form */
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password") as string;
    // const password = await encryptPassword(passwordRaw);

    await loginSignup({
      variables: {
        email: email,
        password: password,
      },
      onCompleted: (data) => {
        /** data structure depending if it is login or signup */
        const loginSignupData = isLogin ? data.login : data.signup;
        /** store token */
        localStorage.setItem("token", loginSignupData.token);
        /** close modal */
        setShowModal(false);
        /** set Zustand state to Logged in*/
        state.toggleIsLoggedIn(true);
        /** store returned userdata in Zustand */
        state.setUser({
          email: loginSignupData.user.email,
          id: loginSignupData.user.id,
        });
      },
      onError: (e) => console.log(e.message),
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          {loading ? (
            <Loader />
          ) : (
            <AuthForm
              isLogin={isLogin}
              onSubmit={onSubmit}
              setIsLogin={setIsLogin}
              setShowModal={setShowModal}
              error={error?.message}
            />
          )}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
