import React from "react";
import { useRef, useState } from "react";
import { Plus, Search } from 'lucide-react';
import KeepReading from "@comp/page-sections/library/KeepReading";
import ContinueWriting from "@comp/page-sections/library/ContinueWriting";
import SavedBooks from "@comp/page-sections/library/SavedBooks";
import BooksToPublish from "@comp/page-sections/library/BooksToPublish";
import SubmittedForReview from "@comp/page-sections/library/SubmittedForReview";
import ReadAgain from "@comp/page-sections/library/ReadAgain";
import PublishedBooks from "@comp/page-sections/library/PublishedBooks";

export const Library = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)

    }
  }

  window.addEventListener("click", handleClickOutsideDropdown)

  return (
    <div className="px-6 lg:px-16 py-8 bg-gray-100 min-h-screen">
      <div className="flex gap-6 justify-end items-center mb-6">
        <a href="/search">
          <button className="flex items-center px-4 py-4 bg-gray-400 text-white rounded-full hover:bg-gray-500 cursor-pointer">
            <Search className="w-4 h-4 mr-2" /> Search
          </button>
        </a>
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => handleDropDownFocus(open)}
            className="flex items-center px-4 py-4 bg-white text-primary rounded-full border-primary hover:bg-purple-900 hover:text-white cursor-pointer"
          >
            <Plus className="w-4 h-4 mr-2 hover:text-white style={{ color: 'primary' }}" /> Create a new story
          </button>
          {open && (
            <ul className="absolute text-left text-sm py-4 right-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
              <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <label htmlFor="create-myself" className="text-gray-700">Create one myself</label>
                <input id="create-myself" type="radio" name="createOption" className="mr-2" />
              </li>
              <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <label htmlFor="hire-creator" className="text-gray-700">Hire a Creator</label>
                <input id="hire-creator" type="radio" name="createOption" className="mr-2" />
              </li>
              <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <a href="/findgig" className="text-gray-700">Find who's hiring</a>
                <input id="find-hiring" type="radio" name="createOption" className="mr-2" />
              </li>
              <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                <label htmlFor="storycreate-platform" className="text-gray-700">Create for StoryCreate Platform</label>
                <input id="storycreate-platform" type="radio" name="createOption" className="mr-2" />
              </li>
              <li className="pt-4 pb-2 text-center">
                <a href="/createnewstory" className="py-2 px-[70px] min-w-full text-white bg-primary rounded hover:bg-purple-900">Continue</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      <section className="mb-8 pt-6">
        <KeepReading />
      </section>

      <section className="mb-8 pt-6">
        <ContinueWriting />
      </section>

      <section className="mb-8 pt-6">
        <SavedBooks />
      </section>

      <section className="mb-8 pt-6">
        <BooksToPublish />
      </section>

      <section className="mb-8 pt-6">
        <SubmittedForReview />
      </section>

      <section className="mb-8 pt-6">
        <ReadAgain />
      </section>

      <section className="mb-8 pt-6">
        <PublishedBooks />
      </section>
    </div>
  )
}