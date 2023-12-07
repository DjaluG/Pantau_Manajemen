"use client";
import { MantineProvider } from "@mantine/core";
import React, { useState } from "react";

const page = () => {
  return (
    <>
      <MantineProvider>
        <div
          className="max-w-xxl mx-auto bg-white p-8 rounded-[20px] shadow-md ml-8"
          style={{ width: "1000PX" }}
        >
          <h2 className="text-2xl font-semibold mb-6">Edit Program</h2>

          {/* Garis tipis sebagai pembatas */}
          <hr className="mb-6 border-t-2 border-gray-300" />

          <form>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="mb-6">
                <label
                  htmlFor="task_category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Program Category :
                </label>
                <select
                  id="task_category"
                  className="bg-gray-50 border border-[#002C62] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="Routine">Routine</option>
                  <option value="Routine">Routine</option>
                  <option value="Routine">Routine</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="target_date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Target Date :
                </label>

                <div date-rangepicker className="flex items-center">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    </div>
                    <input
                      name="start"
                      type="date"
                      className="bg-gray-50 border border-[#002C62] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date start"
                    />
                  </div>
                  <span className="mx-4 text-gray-500">to</span>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">   
                    </div>
                    <input
                      name="end"
                      type="date"
                      className="bg-gray-50 border border-[#002C62] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date end"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description Program :
              </label>
              <textarea
                id="description"
                className="bg-gray-50 border border-[#002C62] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-[#001E42] hover:bg-[#002C62] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ marginLeft: "91%" }}
            >
              Create
            </button>
          </form>
        </div>
      </MantineProvider>
    </>
  );
};

export default page;
