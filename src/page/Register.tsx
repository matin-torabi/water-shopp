import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  id: string;
  userName: string;
  email: string;
  city: string;
}

const Register = () => {
  const images: string[] = [
    "https://img.myshopline.com/image/store/1705286183817/Marvel-s-Spider-Man-Game-of-the-Year-Edition-Playstation-41_1445x.jpeg?w=1500&h=844&q=80",
    "https://gaming-cdn.com/images/products/2462/orig/grand-theft-auto-vi-pc-rockstar-cover.jpg?v=1759241568",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
  ];

  const [bg] = useState<string>(
    () => images[Math.floor(Math.random() * images.length)]
  );

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "Username must be at least 3 characters.")
      .required("User Name is required"),
    email: Yup.string()
      .email("The email is not valid")
      .required("Email is required"),
    city: Yup.string().required("City is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      id: Math.floor(Math.random() * 1000).toString(),
      userName: "",
      email: "",
      city: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error("error in saving data");
        resetForm();
        localStorage.setItem("city", values.city);
        navigate("/");
      } catch (error) {
        console.error(error);
        console.log("error in saving data");
      }
    },
  });

  return (
    <div className="relative w-full h-[92.6vh] overflow-hidden">
      <img
        src={bg}
        className="absolute object-cover w-full h-full z-0"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#19212A]/80 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full text-white">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col p-5 w-[345px] h-[460px]"
        >
          <h1 className="text-3xl text-white">Register</h1>

          <input
            type="text"
            name="userName"
            className="mt-6 p-3 text-sm border-none outline-none rounded bg-[#0E0E0E]/75 text-white placeholder:text-gray-400"
            placeholder="User Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName && (
            <span className="text-red-400 text-xs mt-1">
              {formik.errors.userName}
            </span>
          )}

          <input
            type="text"
            name="email"
            className="mt-6 p-3 text-sm border-none outline-none rounded bg-[#0E0E0E]/75 text-white placeholder:text-gray-400"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-400 text-xs mt-1">
              {formik.errors.email}
            </span>
          )}

          <input
            type="text"
            name="city"
            className="mt-6 p-3 text-sm border-none outline-none rounded bg-[#0E0E0E]/75 text-white placeholder:text-gray-400"
            placeholder="City"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <span className="text-red-400 text-xs mt-1">
              {formik.errors.city}
            </span>
          )}

          <button
            type="submit"
            className="bg-white text-sm mt-6 text-[#2b2b2b] rounded p-3 cursor-pointer hover:bg-gray-300 duration-300"
          >
            Submit
          </button>

          {/* <div className="flex flex-col gap-2 mt-6">
            <Link
              to="/login"
              className="text-sm underline text-center text-[#9e9e9e] hover:text-white duration-300"
            >
              Already have an account? Log in.
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
