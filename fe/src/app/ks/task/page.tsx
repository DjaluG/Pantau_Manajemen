"use client";
import React, { useState } from "react";
import { Metadata } from 'next';
import LayoutPage from '../LayoutKs';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { dummyKurikulum, dummyKesiswaan, dummySarpras, dummyTu, bkkHubinak, pelayananData, manajemenMutu, kesehatanLingkungan } from '../../data/dummyDivision';

const taskMetadata: Metadata = {
    title: 'My Task',
}

export default function TaskPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');

    const openModal = (cardName) => {
        setSelectedCard(cardName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCard('');
        setIsModalOpen(false);
    };

    const getDummyDataByDivision = (division) => {
        switch (division) {
            case 'Kurikulum':
                return dummyKurikulum;
            case 'Kesiswaan':
                return dummyKesiswaan;
            case 'Sarana dan Prasarana':
                return dummySarpras;
            case 'Tata Usaha dan Humas':
                return dummyTu;
            case 'BKK dan Hubinak':
                return bkkHubinak;
            case 'Pelayanan Data dan Informasi':
                return pelayananData;
            case 'Manajemen Mutu':
                return manajemenMutu;
            case 'Kesehatan dan Lingkungan':
                return kesehatanLingkungan;
            default:
                return [];
        }
    };

    return (
        <>
            <LayoutPage>
                <div className='bg-white shadow-md mx-5 px-3 py-5 rounded-3xl'>
                    {['Kurikulum', 'Kesiswaan', 'Sarana dan Prasarana', 'Tata Usaha dan Humas', 'BKK dan Hubinak', 'Pelayanan Data dan Informasi', 'Manajemen Mutu', 'Kesehatan dan Lingkungan'].map((cardName) => (
                        <div key={cardName} className='flex flex-row border-b-[1px] mt-[10px]' onClick={() => openModal(cardName)}>
                            <div className='flex pr-3 items-center'>
                                <Image src={`/images/kepsek/${cardName.toLowerCase().replace(/\s/g, '-')}.png`} alt={cardName} height={40} width={40} />
                            </div>
                            <div>
                                <p className='text-l font-bold'>{cardName}</p>
                                <p className='text-[#838383] text-sm py-1 overflow-ellipsis max-w-[calc(100% - 70px)]'>
                                    {truncateText(getDummyDataByDivision(cardName).map((item) => item.name).join(', '), 150)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </LayoutPage>

            {isModalOpen && (
                <motion.div
                    id="popup-modal"
                    className="fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                    <motion.div
                        id="authentication-modal"
                        className="fixed inset-0 overflow-y-auto flex items-center justify-center backdrop-filter backdrop-blur-sm z-50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        {/* Modal content */}
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="relative p-4 max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700" style={{ minWidth: "700px" }}>
                                <div className="flex flex-col items-center justify-center">
                                    {/* Modal header */}
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 w-full">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {selectedCard}
                                        </h3>
                                        <motion.button
                                            type="button"
                                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            data-modal-hide="authentication-modal" data-aos="zoom-in"
                                            onClick={closeModal}
                                            whileHover={{ scale: 1.2 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.1, ease: "easeInOut" }}
                                        >
                                            {/* Close button */}
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </motion.button>
                                    </div>

                                    {/* Modal */}
                                    <div className="grid gap-4 p-4 md:p-5 max-w-screen-xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {getDummyDataByDivision(selectedCard).map((item, index) => (
                                            <a key={index} href="#" className="block max-w-xs p-3 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center flex-col flex-grow">
                                                        <Image src={item.image} alt="Profile Image" height={40} width={40} className="rounded-full mb-2" />
                                                        <p className="mb-0 text-sm text-center font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}

export { taskMetadata };
