import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#173629] text-[#E8D5B7] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg text-center">

        <img
          src="/logo.png"
          alt="Mudball Golf"
          className="mx-auto w-72 mb-12"
        />

        <h1 className="text-5xl font-light leading-none">
          Golf, <em className="italic font-light">clearly.</em>
        </h1>

        <p className="mt-6 mb-10 text-lg text-[#D8C5A7] leading-relaxed">
          Be the first to know when Mudball Golf launches.
        </p>

        <div className="mx-auto max-w-md">
          <SignupForm />
        </div>

      </div>
    </main>
  );
}