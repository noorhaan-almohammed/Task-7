import Link from "next/link";
import Image from "next/image";

interface ModalContentProps {
  isSignup: boolean;
  showPassword: boolean;
  toggleShowPassword: () => void;
  handleSubmit: () => void;
  switchType: () => void;
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
  isSignup,
  showPassword,
  toggleShowPassword,
  handleSubmit,
  switchType,
  onClose,
}) => {
  return (
    <div className="bg-white h-fit w-full max-w-[488px] rounded-xl md:rounded-3xl px-4 md:px-[60px] py-6 md:py-10 flex flex-col gap-2 md:gap-5 overflow-y-auto scrollbar-hidden max-h-screen">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl md:text-[32px] my-6 md:my-0 font-bold text-[#333]">
          {isSignup ? "Create Account" : "Login"}
        </h2>
        <button
          className="w-6 h-6 flex items-center justify-center"
          onClick={onClose}
          aria-label="close"
        >
          <Image
            src="/icons/dark-close-icon.svg"
            alt="close"
            width={12}
            height={12}
          />
        </button>
      </div>

      <form className="space-y-3 md:space-y-5">
        {isSignup && (
          <div className="flex flex-col gap-1 md:gap-2.5">
            <label className="font-semibold text-[16px] md:text-lg text-[#33333399]">
              Name and Surname
            </label>
            <input
              type="text"
              placeholder="Enter your name and surname"
              className="w-full border border-[#33333333] rounded-lg px-3 md:px-6 py-2.5 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-orange placeholder:text-sm md:placeholder:text-[16px] placeholder:text-[#33333380]"
            />
          </div>
        )}

        <div className="flex flex-col gap-1 md:gap-2.5">
          <label className="font-semibold text-[16px] md:text-lg text-[#33333399]">
            Name and Surname
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-[#33333333] rounded-lg px-3 md:px-6 py-2.5 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-orange placeholder:text-sm md:placeholder:text-[16px] placeholder:text-[#33333380]"
          />
        </div>

        <div className="flex flex-col gap-1 md:gap-2.5">
          <label className="font-semibold text-[16px] md:text-lg text-[#33333399]">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-[#33333333] rounded-lg px-3 md:px-6 py-2.5 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-orange placeholder:text-sm md:placeholder:text-[16px] placeholder:text-[#33333380]"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-[14px] top-1/2 -translate-y-1/2"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <Image
                src="/icons/eye.svg"
                alt="Toggle visibility"
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>

        {isSignup && (
          <div className="flex items-center gap-1 md:gap-2.5 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="peer w-3.5 h-3.5 md:w-4.5 md:h-4.5 appearance-none border border-[#33333333] rounded-sm bg-white checked:bg-orange checked:border-orange focus:outline-none"
            />
            <label htmlFor="terms" className="text-sm text-[#33333399]">
              I agree with{" "}
              <Link href="/terms" className="text-orange ">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-orange ">
                Privacy
              </Link>
            </label>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-orange text-white rounded-full py-1.5 md:py-2.5 font-semibold text-lg md:text-xl"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <span className="flex justify-center text-[16px] text-[#33333366]">
          or
        </span>

        <button
          type="button"
          className="relative w-full border border-[#33333333] rounded-full py-1.5 md:py-2.5 px-6 flex items-center justify-center md:text-lg font-semibold text-[#33333366]"
        >
          <Image
            src="/icons/google.svg"
            alt="Google"
            width={24}
            height={24}
            className="absolute start-6"
          />
          {isSignup ? "Sign Up with Google" : "Sign In with Google"}
        </button>

        <p className="text-center text-[#4d4d4d] font-semibold text-sm md:text-[16px]">
          {isSignup ? "Already have an account? " : "Don’t have an account? "}
          <span className="text-orange cursor-pointer" onClick={switchType}>
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default ModalContent;
