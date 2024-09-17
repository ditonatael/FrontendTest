export default function SignUpButton({ shadow = "" }) {
  return (
    <button
      className={`bg-primary-green rounded-full w-36 h-10 flex items-center justify-center text-sm text-white font-rubik font-medium ${shadow}`}
    >
      Daftar Sekarang
    </button>
  );
}
