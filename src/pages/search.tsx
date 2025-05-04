import React from "react";

export const Search = () => {
  return (
    <div className="main-padding bg-white min-h-screen w-full pb-16">
      <a href="/">
        <div className="flex items-center gap-2 mb-8 mt-12">
          <i className="bx bx-left-arrow-alt text-2xl"></i>
          <h3 className="text-lg text-primary font-semibold">Back</h3>
        </div>
      </a>

      <div className="max-w-6xl w-full flex items-center gap-0">
        <input
          type="text"
          placeholder="Type anything..."
          className="flex-grow border border-solid border-primary rounded-l-full w-full py-4 px-6 text-black font-medium focus:outline-none"
        />
        <button className="bg-primary text-white rounded-r-full py-4 px-8 font-medium hover:opacity-90 transition cursor-pointer">
          Search
        </button>
      </div>

      <h2 className="text-base mt-10 text-black text-left font-bold text-dark-100 mb-10">Search Book Categories</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {/* Example group item */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-black font-semibold text-base">Fiction</div>
          </div>
        </div>

        {/* Repeat similar groups with different text */}
        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-black font-semibold text-base">Fiction</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Sci-Fi</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Sci-Fi</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Sci-Fi</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Sci-Fi</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Mystery</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Mystery</div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg flex items-center p-4">
          <img
            className="h-24 w-24 object-cover rounded"
            alt="Rectangle"
            src="https://c.animaapp.com/wZjSQnlU/img/rectangle-2336-29@2x.png"
          />
          <div className="ml-4 text-center flex-1">
            <div className="text-dark-100 font-semibold text-base">Non-fiction</div>
          </div>
        </div>

        {/* Add more groups as needed, following the same pattern */}
      </div>
    </div>
  );
};
