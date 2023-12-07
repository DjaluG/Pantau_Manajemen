import React from 'react';
import LayoutPage from '../../LayoutPage';


export default function AddTaskPage() {
    return (
        <>
            <LayoutPage>
                <div className="max-w-xxl mx-auto bg-white p-8 rounded-lg shadow-md ml-12" style={{ width: "1100px" }}>
                    <h2 className="text-2xl font-semibold mb-6">Edit Task</h2>
                    <hr className="mb-6 border-t-2 border-gray-300" />

                    <form>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                            <div className="mb-6">
                                <label htmlFor="task_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Category :</label>
                                <select id="task_category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="Routine">Routine</option>
                                    <option value="Routine">Routine</option>
                                    <option value="Routine">Routine</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="task_program" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Program :</label>
                                <select id="task_program" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option value="Mengelola Nilai">Mengelola Nilai</option>
                                    <option value="Mengelola Nilai">Mengelola Nilai</option>
                                    <option value="Mengelola Nilai">Mengelola Nilai</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="target_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Date :</label>
                                <input type="date" id="target_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description Task :</label>
                            <textarea id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                style={{ backgroundColor: "#001E42" }}
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </LayoutPage>
        </>
    );
}
