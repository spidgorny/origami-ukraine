"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import { clsx } from "clsx";

export default function Contact() {
  const [isWorking, setWorking] = useState(false);
  const [isSent, setSent] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setWorking(true);
    try {
      let form = e.target as HTMLFormElement;
      let formData = Object.fromEntries(new FormData(form).entries());
      const res = await axios.post("/api/contact", formData);
      setSent(true);
      setWorking(false);
    } catch (e) {
      setWorking(false);
      setError(e as Error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col lg:flex-row flex-wrap -m-2">
              <div className="p-2 basis-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoFocus
                    required
                    readOnly={isSent}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 basis-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    readOnly={isSent}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    readOnly={isSent}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className={clsx(
                    "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none",
                    { "hover:bg-indigo-600": !isSent },
                    "rounded text-lg",
                  )}
                  disabled={isWorking || isSent}
                >
                  Button {isWorking ? "(...)" : ""}
                </button>
              </div>
            </div>

            {isSent && <p className="my-5 text-3xl">Email sent. Thank you.</p>}

            <div className="p-2 w-full">
              <p className="text-red-500 p-3">{error?.message}</p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
