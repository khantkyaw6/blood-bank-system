// import styles from "./style/main.module.css";

export default function Main() {
  return (
    <section className="md:w-screen md:h-screen bg-red-100 py-16 px-6 md:px-12 lg:px-24 flex justify-center items-center bg-linear-to-br/oklab from-white to-red-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-6">
            Save Lives. Be a Hero Today.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Every drop counts. Your blood donation could give someone a second
            chance at life. Join us or request help — we’re here for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/request-form"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              🚑 Request Blood
            </a>
            <a
              href="/donor-form"
              className="bg-white border border-red-600 text-red-700 hover:bg-red-200 font-semibold px-6 py-3 rounded-lg transition"
            >
              🩸 Book a Donation
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2936/2936740.png"
            alt="Blood Donation Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
