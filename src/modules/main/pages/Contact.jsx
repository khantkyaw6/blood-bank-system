import Navbar from "../components/NavBar";
import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <section>
      <Navbar />
      <ContactMain />
    </section>
  );
}

function ContactMain() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-linear-to-br/oklab from-white to-red-200 min-h-screen py-12 px-6 md:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 p-4 md:p-6 bg-white rounded-2xl shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-1">
                📍 Address
              </h3>
              <p>
                123 LifeFlow Avenue
                <br />
                City Name, Country
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-1">
                📞 Phone
              </h3>
              <p>+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-1">
                ✉️ Email
              </h3>
              <p>support@lifeflowbloodbank.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-1">
                🕑 Hours
              </h3>
              <p>
                Mon–Sat: 8:00 AM – 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="font-medium">Subject</label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Subject of your message"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-xl h-32 resize-none focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Type your message here..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
