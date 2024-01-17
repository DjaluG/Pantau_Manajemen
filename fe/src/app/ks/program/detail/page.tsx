// pages/ks/guru-mapel.tsx
import React from 'react';
import LayoutKs from '../../LayoutKs';
import Accordion from '../../../components/Accordion';
import { getDummyDataByDivision } from '../../../data/dummyDivision';

const GuruMapelPage = () => {
  const commonImageSrc = '/images/kepsek/book.jpg';
  const pplg = '/images/kepsek/book.jpg';

  // Gantilah ini dengan pemanggilan data dummy sesuai kebutuhan
  const dummyData = getDummyDataByDivision('Guru Mapel');

  return (
    <LayoutKs>
      <h1 className="text-2xl font-bold mb-5 ml-[11.5em]">{dummyData.name}</h1>
      <div className="flex items-center justify-center">
        <div className="card-accordion bg-white w-[510px] p-5 rounded-xl">
          {/* Main Accordions */}
          {dummyData.children.map((child) => (
            <Accordion key={child.id} title={child.name} imageSrc={commonImageSrc}>
              {/* Nested Accordions */}
              {child.children.map((nestedChild) => (
                <Accordion key={nestedChild.id} title={nestedChild.name} imageSrc={commonImageSrc} nested>
                  {/* Content for Nested Child */}
                  <p>{`Content for ${nestedChild.name}`}</p>
                </Accordion>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </LayoutKs>
  );
};

export default GuruMapelPage;
