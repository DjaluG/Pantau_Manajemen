// src/app/ks/task/detail/guru-mapel/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LayoutKs from "../../../LayoutKs";
import Accordion from "../../../../components/Accordion";

const GuruMapelDetailPage = () => {
    const commonImageSrc = "/images/kepsek/book.jpg";
    const router = useRouter();
    const [id, setId] = useState(null);

    useEffect(() => {
        if (router.query && router.query.id) {
            setId(router.query.id as string);
        }
    }, [router.query]);

    const produktifData = [
        {
            title: "Produktif",
            subItems: [
                "Pengembangan Perangkat Lunak dan Gim",
                "Desain Visual dan Komunikasi",
                "Teknik Jaringan dan Komputer",
                "Manajemen Perkantoran dan Bisnis",
                "Pemasaran",
                "Kuliner",
                "Perhotelan",
            ],
        },
    ];

    const umumData = [
        "Matematika",
        "Bahasa Inggris",
        "Bahasa Indonesia",
        "Bahasa Sunda",
        "Pendidikan Agama dan Budi Pekerti (PABP)",
        "Pendidikan Pancasila (PP)",
        "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
        "PKK",
        "PIPAS",
    ];

    const getImageSrc = (title, isProduktif = false) => {
        if (isProduktif) {
            return `/images/kepsek/produktif-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
        } else {
            return `/images/kepsek/${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
        }
    };

    return (
        <LayoutKs>
            <h1 className="text-2xl font-bold mb-5 ml-[11.5em]">Guru Mapel</h1>
            <div className="flex items-center justify-center">
                <div className="card-accordion bg-white w-[510px] p-5 rounded-xl">
                    {/* Render Accordion for produktif */}
                    {produktifData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            imageSrc={commonImageSrc}
                            subImageSrc={getImageSrc(item.title, true)}
                        >
                            {/* Render sub accordions for produktif */}
                            {item.subItems.map((subItem, subIndex) => (
                                <Accordion
                                    key={subIndex}
                                    title={subItem}
                                    imageSrc={commonImageSrc}
                                    subImageSrc={getImageSrc(subItem, true)}
                                >
                                    <p>{`Content for ${subItem}`}</p>
                                </Accordion>
                            ))}
                        </Accordion>
                    ))}

                    {/* Render Accordion for umum */}
                    {umumData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item}
                            imageSrc={commonImageSrc}
                            subImageSrc={getImageSrc(item)}
                        >
                            <p>{`Content for ${item}`}</p>
                        </Accordion>
                    ))}
                </div>
            </div>
        </LayoutKs>
    );
};

export default GuruMapelDetailPage;
