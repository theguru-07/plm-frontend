import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiPhone, FiUser, FiMail, FiCheckCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

/* Images must be inside /public */
const SLIDER_IMAGES = [
  "/luxurylogin.jpg",
  "/interiorloginn.jpg",
  "/interiorlogin.jpg",
];

const ROLES = ["Customer", "Agent", "Admin"];

const SigninPage = () => {
  const [mode, setMode] = useState("signin");
  const [role, setRole] = useState("Customer");

  return (
    <div className="min-h-screen bg-gradient-to-br` from-blue-50 to-white">

      {/* ================= LEFT SLIDER (DESKTOP ONLY) ================= */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-1/2 h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect="fade"
          loop
          className="h-screen w-full"
        >
          {SLIDER_IMAGES.map((img, index) => (
            <SwiperSlide key={index} className="h-screen">
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt="Property"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay for text visibility */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-br` from-blue-900/70 to-indigo-900/70" />

                <div className="relative z-10 h-full flex flex-col justify-center px-8 xl:px-16 text-white">
                  <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight">
                    Your Property <br /> Journey Starts Here
                  </h1>

                  <p className="mt-4 text-base text-blue-100 max-w-md">
                    Buy, rent & sell verified properties with confidence.
                  </p>

                  <div className="mt-8 space-y-3">
                    <Feature text="Verified listings" />
                    <Feature text="Trusted agents" />
                    <Feature text="Secure experience" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= RIGHT AUTH CONTAINER ================= */}
      <div className="flex min-h-screen items-center justify-center px-4 lg:ml-[50%]">
        <div className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-xl p-5 sm:p-8">

          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome to Zestate
            </h1>
            <p className="text-sm text-gray-600">
              Buy • Rent • Sell with confidence
            </p>
          </div>

          {/* Logo */}
          <div className="text-center mb-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
              Z
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold">
              {mode === "signin" ? "Sign in" : "Create account"}
            </h2>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-2 rounded-xl text-sm transition ${
                  role === r
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-5">
            <Tab
              active={mode === "signin"}
              onClick={() => setMode("signin")}
              label="Sign In"
            />
            <Tab
              active={mode === "signup"}
              onClick={() => setMode("signup")}
              label="Sign Up"
            />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border rounded-full py-3 mb-5 hover:shadow-md transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          {/* Signup Fields */}
          {mode === "signup" && (
            <div className="space-y-3 mb-4">
              <Input icon={<FiUser />} placeholder="Full Name" />
              <Input icon={<FiMail />} placeholder="Email address" />
            </div>
          )}

          {/* Phone */}
          <Input icon={<FiPhone />} placeholder="+91 8480******" />

          <button className="w-full mt-4 bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 transition">
            {mode === "signin" ? "Send OTP" : "Create Account"}
          </button>

          {/* OTP */}
          {mode === "signin" && (
            <>
              <div className="mt-5 flex justify-center gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-10 h-12 border rounded-xl text-center focus:ring-2 focus:ring-green-500 outline-none"
                  />
                ))}
              </div>

              <button className="w-full mt-4 bg-green-500 text-white rounded-full py-3 font-semibold hover:bg-green-600 transition">
                Verify OTP
              </button>
            </>
          )}

          {/* Footer */}
          <p className="text-xs text-center text-gray-500 mt-6">
            Logging in as <strong>{role}</strong>
          </p>

          <p className="text-center text-sm mt-3">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const Feature = ({ text }) => (
  <div className="flex items-center gap-2 text-sm">
    <FiCheckCircle className="text-green-400" />
    {text}
  </div>
);

const Tab = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2 text-sm rounded-full transition ${
      active ? "bg-white shadow text-blue-600" : "text-gray-500"
    }`}
  >
    {label}
  </button>
);

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full border rounded-full pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default SigninPage;
