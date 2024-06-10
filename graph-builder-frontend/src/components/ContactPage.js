import React from "react";

const ContactPage = () => {
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
          <form className="flex flex-col items-start pt-4">
            <input
              placeholder="Name"
              className="mb-3 w-[350px] p-2 rounded-lg"
            />
            <input
              placeholder="Email"
              className="mb-3 w-[350px] p-2 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="w-[350px] p-2 rounded-lg h-[150px]"
            />
            <button className="bg-blue-600 w-[125px] p-2 text-xl font-semibold text-white mt-4 hover:bg-blue-500 duration-300">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
