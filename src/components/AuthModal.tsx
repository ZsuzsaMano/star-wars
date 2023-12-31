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

//TODO:
// - add squad mutation
// - retrive token from storage

type AuthModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
};

export const AuthModal: FC<AuthModalProps> = ({ setShowModal, showModal }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [signup, { data, loading, error }] = useMutation(SIGNUP);
  const state = useSquadStore();

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
        setShowModal(false);
        state.toggleIsLoggedIn();
      },
    });
  };

  if (loading) return "Submitting...";

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <AuthForm
            isLogin={isLogin}
            onSubmit={onSubmit}
            setIsLogin={setIsLogin}
            setShowModal={setShowModal}
            error={error?.message}
          />
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
