import React from "react";
import { useState } from "react";
import axios from "axios";
import { contactServiceHost } from "../host";

const ContactPage = () => {
  const initialState = {
    id: null,
    name: "",
    email: "",
    message: "",
  };

  const [consolidatedMessage, setConsolidatedMessage] = useState(initialState);
  const [resultMessage, setResultMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactFailMessage =
    "Message failed to send. \nPlease try again later.";
  const contactSuccessMessage = "Message sent successfully!";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsolidatedMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        contactServiceHost + "/contact",
        consolidatedMessage
      );
      setLoading(false);
      if (response.status === 200) {
        setResultMessage(contactSuccessMessage);
      } else {
        setResultMessage(contactFailMessage);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending message:", error);
      setResultMessage(contactFailMessage);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <main className=" bg-slate-800 rounded-lg p-10 flex w-[1000px] h-[400px]">
        <div className="text-white text-xl">
          <h1 className="[color:var(--font-secondary)] text-7xl mb-6">
            Contact Us
          </h1>
          <p className="mb-2">Email: support@graphcrafter.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Address: 123 Graph St, Data City, DS 45678</p>
        </div>
        <div className="flex justify-center w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start pt-4"
          >
            <input
              placeholder="Name"
              className="mb-3 w-[350px] p-2 rounded-lg"
              name="name"
              value={consolidatedMessage.name}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Email"
              className="mb-3 w-[350px] p-2 rounded-lg"
              name="email"
              value={consolidatedMessage.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              className="w-[350px] p-2 rounded-lg h-[150px]"
              name="message"
              value={consolidatedMessage.message}
              onChange={handleChange}
              required
            />
            <div className="flex justify-between items-center w-full mt-4">
              <button
                type="submit"
                className="bg-blue-600 w-[125px] p-2 text-xl font-semibold text-white hover:bg-blue-500 duration-300"
              >
                Submit
              </button>
              <p className="mt-1">
                {loading && (
                  <div className="spinner border-t-4 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
                )}
                <p
                  className={`${
                    resultMessage.includes("Message failed to send")
                      ? "text-red-500"
                      : "text-green-400"
                  } `}
                >
                  {resultMessage.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
