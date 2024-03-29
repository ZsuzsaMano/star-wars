import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";

type AuthFormProps = {
  isLogin: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  error?: String;
};

export const AuthForm: FC<AuthFormProps> = ({
  isLogin,
  onSubmit,
  setIsLogin,
  setShowModal,
  error,
}) => {
  return (
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
        <p className="text-red text-xs">{error}</p>
        <button
          className="text-blue md:text-xs text-left"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          type="button"
        >
          {isLogin ? "No account yet? Sign up!" : "Already registered? Login!"}
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
        >
          {isLogin ? "Login" : "Sign up"}
        </button>
      </div>
    </form>
  );
};
