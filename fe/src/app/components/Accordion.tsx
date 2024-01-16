// components/Accordion.tsx
import React, { useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

interface AccordionProps {
    title: string;
    children?: React.ReactNode;
    nested?: boolean;
    imageSrc: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, nested = false, imageSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-none rounded-2xl mb-4 overflow-hidden ${nested ? 'ml-4' : ''}`}>
            {/* Accordion Header */}
            <>
                <div
                    className={`bg-white p-4 cursor-pointer flex items-center justify-start hover:bg-gray-200 transition-all border-b border-gray-300`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Image */}
                    <img
                        src={imageSrc}
                        alt="Accordion Image"
                        className="w-8 h-8 mr-4"
                    />
                    <div className="flex-grow">
                        {/* Title */}
                        <h2 className="font-semibold text-base">
                            {title}
                        </h2>
                    </div>
                    {/* Chevron Icon */}
                    <div>
                        {isOpen ? (
                            <HiChevronDown className="text-gray-700" />
                        ) : (
                            <HiChevronRight className="text-gray-700" />
                        )}
                    </div>
                </div>
            </>
            {/* Accordion Content */}
            {children && isOpen && <div className="p-4">{children}</div>}
        </div>
    );
};

export default Accordion;
