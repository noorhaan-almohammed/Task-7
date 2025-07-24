
interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

export default function InputField({ label, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-63 xs:w-75 md:w-80">
      <label className="font-semibold text-lg text-grey">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white text-grey rounded-lg px-6 py-3 focus:outline-none focus:ring-2 focus:ring-orange placeholder:text-base placeholder:text-[#33333380]"
      />
    </div>
  );
}
