import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiPhone, FiUser, FiMail, FiCheckCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

/* Correct public paths */
const SLIDER_IMAGES = [
  "/luxurylogin.jpg",
  "/interiorloginn.jpg",
  "/interiorlogin.jpg",
];

const ROLES = ["Customer", "Agent", "Admin"];

const SigninPage = () => {
  const [mode, setMode] = useState("signin"); // signin | signup
  const [role, setRole] = useState("Customer");

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* ================= LEFT IMAGE SLIDER ================= */}
      <div className="hidden lg:block relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          effect="fade"
          speed={600}
          loop
          className="h-full w-full"
        >
          {SLIDER_IMAGES.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt="Property"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-br` from-blue-900/80 to-indigo-900/70" />
                <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
                  <h1 className="text-5xl font-extrabold leading-tight">
                    Your Property <br /> Journey Starts Here
                  </h1>
                  <p className="mt-4 text-lg text-blue-100 max-w-md">
                    Buy, rent & sell verified properties with confidence.
                  </p>
                  <div className="mt-10 space-y-4">
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

      {/* ================= RIGHT AUTH CARD ================= */}
      <div className="flex items-center justify-center px-4 bg-gradient-to-br` from-blue-50 to-white">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

          {/* Logo */}
          <div className="text-center mb-6">
            <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
              Z
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              {mode === "signin" ? "Sign in to Zestate" : "Create your account"}
            </h2>
            <p className="text-sm text-gray-500">
              {mode === "signin"
                ? "Welcome back! Secure access."
                : "Join Zestate in seconds"}
            </p>
          </div>

          {/* 🔥 ROLE SELECTOR (ADDED HERE) */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`py-2 rounded-xl text-sm font-medium transition ${
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
          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <TabButton
              active={mode === "signin"}
              onClick={() => setMode("signin")}
              label="Sign In"
            />
            <TabButton
              active={mode === "signup"}
              onClick={() => setMode("signup")}
              label="Create Account"
            />
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 font-medium hover:shadow-lg transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <Divider />

          {/* Signup fields */}
          {mode === "signup" && (
            <div className="space-y-3 mb-3">
              <Input icon={<FiUser />} placeholder="Full Name" />
              <Input icon={<FiMail />} placeholder="Email address" type="email" />
            </div>
          )}

          {/* Phone */}
          <div className="space-y-3">
            <Input icon={<FiPhone />} placeholder="+91 8480******" type="tel" />
            <button className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 transition">
              {mode === "signin" ? "Send OTP" : "Create Account"}
            </button>
          </div>

          {/* OTP */}
          {mode === "signin" && (
            <>
              <div className="mt-5 grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="h-12 text-center border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-green-500 outline-none"
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
            Logging in as <span className="font-medium">{role}</span>
          </p>

          <p className="text-sm text-center mt-3">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= REUSABLE UI ================= */

const Feature = ({ text }) => (
  <div className="flex items-center gap-3">
    <FiCheckCircle className="text-green-300" />
    {text}
  </div>
);

const TabButton = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
      active ? "bg-white shadow text-blue-600" : "text-gray-500"
    }`}
  >
    {label}
  </button>
);

const Divider = () => (
  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="text-sm text-gray-500">OR</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
);

const Input = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-full pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

export default SigninPage;
