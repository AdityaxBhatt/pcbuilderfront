"use client";
import { useState } from "react";

export default function PcBuilds() {
  const intelCards = [
    { id: 1, img: "/Intel Builds.png", isTitle: true },
    { id: 2, title: "i5 Build", img: "/i5build.png" },
    { id: 3, title: "i9 Beast 2", img: "/i9Build.jpg" },
    { id: 4, title: "Gaming master", img: "/pcMaster.png" },
  ];
  const ryzenCards = [
    { id: 1, img: "/RYZEN.png", isTitle: true },
    { id: 2, title: "Ryzen 5 Build", img: "/i5build.png" },
    { id: 3, title: "Ryzen 9 Beast", img: "/i9Build.jpg" },
    { id: 4, title: "Gaming pro", img: "/pcMaster.png" },
  ];
  const budgetCards = [
    { id: 1, img: "/budget.png", isTitle: true },
    { id: 2, title: "Ryzen 5 Build", img: "/i5build.png" },
    { id: 3, title: "Ryzen 9 Beast", img: "/i9Build.jpg" },
    { id: 4, title: "Gaming pro", img: "/pcMaster.png" },
  ];


  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  

  const slidecards = (cards,hover) =>{
    return (
      <div className="p-6 m-4">
        <div
          className="relative w-[300px] h-[400px]"
          onMouseEnter={() => {setHovered1(true)}}
          onMouseLeave={() => setHovered1(false)}
        >
          {cards.map((card, i) => {
            const isTitle = card.isTitle;
            const nonTitleIndex = cards.filter(c => !c.isTitle).indexOf(card);

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 w-[300px] h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
                  isTitle ? "" : "bg-gray-900 text-white border border-white/10"
                }`}
                style={{
                  zIndex: cards.length - i,
                  transform: isTitle
                    ? "translateX(0)"
                    : hover
                    ? `translateX(${(nonTitleIndex + 1) * 320}px)` // 👉 slide right on hover
                    : `translateX(${(nonTitleIndex + 1) * 20}px)`, // slight stack
                }}
              >
                <img
                  src={card.img}
                  alt={card.title || "Title"}
                  className="w-full h-full object-cover"
                />
                {!isTitle && (
                  <div className="absolute bottom-0 w-full bg-black/70 p-4 text-xl font-bold">
                    {card.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    );
  }

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Title */}
      <div className="text-3xl font-bold text-center py-6 flex flex-col">
        Builds Worth Checking Out !!!
      </div>

      {/* Stack aligned top-right */}
      <div className="flex space-x-10 bg-black p-10">
      <div className="p-6 m-4">
        <div
          className="relative w-[300px] h-[400px]"
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          {intelCards.map((card, i) => {
            const isTitle = card.isTitle;
            const nonTitleIndex = intelCards.filter(c => !c.isTitle).indexOf(card);

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 w-[300px] h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
                  isTitle ? "" : "bg-gray-900 text-white border border-white/10"
                }`}
                style={{
                  opacity: hovered2 || hovered3 ? 0:1,
                  zIndex: intelCards.length - i,
                  transform: isTitle
                    ? "translateX(0)"
                    : hovered1
                    ? `translateX(${(nonTitleIndex + 1) * 320}px)` // 👉 slide right on hover
                    : `translateX(${(nonTitleIndex + 1) * 20}px)`, // slight stack
                }}
              >
                <img
                  src={card.img}
                  alt={card.title || "Title"}
                  className="w-full h-full object-cover"
                />
                {!isTitle && (
                  <div className="absolute bottom-0 w-full bg-black/70 p-4 text-xl font-bold">
                    {card.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-6 m-4">
        <div
          className="relative w-[300px] h-[400px]"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          {ryzenCards.map((card, i) => {
            const isTitle = card.isTitle;
            const nonTitleIndex = ryzenCards.filter(c => !c.isTitle).indexOf(card);

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 w-[300px] h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
                  isTitle ? "" : "bg-gray-900 text-white border border-white/10"
                }`}
                style={{
                  opacity: hovered1 || hovered3 ?0:1,
                  zIndex: ryzenCards.length - i,
                  transform: isTitle && hovered2
                    ? "translateX(-350px)"
                    : hovered2
                    ? `translateX(${(nonTitleIndex + 1) * 320-350}px)` // 👉 slide right on hover
                    : `translateX(${(nonTitleIndex + 1) * 20}px)`, // slight stack
                }}
              >
                <img
                  src={card.img}
                  alt={card.title || "Title"}
                  className="w-full h-full object-cover"
                />
                {!isTitle && (
                  <div className="absolute bottom-0 w-full bg-black/70 p-4 text-xl font-bold">
                    {card.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-6 m-4">
        <div
          className="relative w-[300px] h-[400px]"
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          {budgetCards.map((card, i) => {
            const isTitle = card.isTitle;
            const nonTitleIndex = budgetCards.filter(c => !c.isTitle).indexOf(card);

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 w-[300px] h-[400px] rounded-xl overflow-hidden transition-all duration-500 ease-in-out shadow-xl ${
                  isTitle ? "" : "bg-gray-900 text-white border border-white/10"
                }`}
                style={{
                  opacity: hovered1 || hovered2 ?0:1,
                  zIndex: budgetCards.length - i,
                  transform: isTitle && hovered3
                    ? "translateX(-700px)"
                    : hovered3
                    ? `translateX(${(nonTitleIndex + 1) * 320-700}px)` // 👉 slide right on hover
                    : `translateX(${(nonTitleIndex + 1) * 20}px)`, // slight stack
                }}
              >
                <img
                  src={card.img}
                  alt={card.title || "Title"}
                  className="w-full h-full object-cover"
                />
                {!isTitle && (
                  <div className="absolute bottom-0 w-full bg-black/70 p-4 text-xl font-bold">
                    {card.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}