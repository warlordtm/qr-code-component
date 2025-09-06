import Qrcode from "./components/Qrcode";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[hsl(212,45%,89%)] p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-xs w-full">
        <Qrcode value="https://www.frontendmentor.io" />
        <h1 className="text-xl font-bold text-[hsl(218,44%,22%)] mt-6 mb-4;">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[hsl(220,15%,55%)] text-sm leading-relaxed">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </div>
  );
}

export default App;
