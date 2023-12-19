'use client';
import React, { useState } from "react";
import LayoutKs from "../../LayoutKs";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";

const Accordion = ({ title, children, nested = false, imageSrc }) => {
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
          <div className="flex-grow"> {/* Added container for title to take remaining space */}
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
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Page = () => {
  const commonImageSrc = "/images/kepsek/book.jpg";
  const pplg = "/images/kepsek/book.jpg";

  return (
    <>
      <LayoutKs>
      <h1 className="text-2xl font-bold mb-5 ml-[11.5em]">Guru Mapel</h1>
        <div className="flex items-center justify-center">
          <div className="card-accordion bg-white w-[510px] p-5 rounded-xl">
            {/* Main Accordions */}
            <Accordion title="Produktif" imageSrc={commonImageSrc}>
              {/* Nested Accordions */}
              <Accordion title="Pengembangan Perangkat Lunak dan Gim" imageSrc={commonImageSrc} nested>
                <p>Content for Matematika</p>
              </Accordion>
              <Accordion title="Desain Visual dan Komunikasi" imageSrc={commonImageSrc} nested>
                <p>Content for Bahasa Inggris</p>
              </Accordion>
              <Accordion title="Teknik Jaringan dan Komputer" imageSrc={commonImageSrc} nested>
                <p>Content for Bahasa Indonesia</p>
              </Accordion>
              <Accordion title="Manajemen Perkantoran dan Bisnis" imageSrc={commonImageSrc} nested>
                <p>Content for PP</p>
              </Accordion>
              <Accordion title="Pemasaran" imageSrc={commonImageSrc} nested>
                <p>Content for Sejarah</p>
              </Accordion>
              <Accordion title="Kuliner" imageSrc={commonImageSrc} nested>
                <p>Content for PP</p>
              </Accordion>
              <Accordion title="Perhotelan" imageSrc={commonImageSrc} nested>
                <p>Content for PP</p>
              </Accordion>
            </Accordion>

            <Accordion title="Matematika" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="Bahasa Inggris" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="Bahasa Indonesia" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="Bahasa Sunda" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="PABP" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="PP" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="PJOK" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="PKK" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>

            <Accordion title="PIPAS" imageSrc={commonImageSrc}>
              <p>Content for Nested 1</p>
            </Accordion>
          </div>
        </div>
      </LayoutKs>
    </>
  );
};

export default Page;
