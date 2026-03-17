import { useNavigate } from "@tanstack/react-router";

export default function NotFound() {
  const navigate = useNavigate();

  const handleNavtoHome = () => {
    navigate({ to: "/" });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-500">
        Page not found{" "}
        <span
          onClick={handleNavtoHome}
          className="text-[12px] text-pink-900 cursor-pointer"
        >
          Go back home
        </span>
      </p>
    </div>
  );
}
