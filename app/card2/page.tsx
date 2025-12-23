"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function FramedCard() {
  return (
    <>
      <audio src="/44.mp4" autoPlay loop muted style={{ display: "none" }} />

      <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:mt-14">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] bg-black bg-opacity-85 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
              <Image
                src="/banner11.png"
                width={960}
                height={240}
                alt="Banner"
                className="object-cover rounded-lg w-full h-[168px]"
              />
            </div>

            <div className="avatar">
              <Image
                src="/avatar3.png"
                height={108}
                width={108}
                className="object-cover ml-4 absolute top-24 sm:top-20 w-[108px] h-[108px] rounded-full group-hover/card:shadow-xl mx-auto"
                alt="Avatar"
              />
            </div>
          </CardItem>

          <CardItem translateZ="80">
            <div className="w-[20rem] sm:w-[24rem] md:w-[27rem] px-1">
              <div className="profile px-2 w-full mt-8 flex justify-between items-center">
                <div className="flex items-center">
                  <a className="font-semibold text-2xl">@parkaparkaparka</a>
                </div>
                <div className="badges ml-auto p-1 gap-1 flex items-center bg-neutral-950 bg-opacity-40 rounded-md">
                  {/* SVGs here */}
                </div>
              </div>
            </div>
          </CardItem>

          <CardItem translateZ="60" className="px-2 mt-5">
            <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">
              About me
            </h3>
            <div className="aboutme mt-2 text-white text-opacity-90">
              <p>
                inquiries:{" "}
                <a
                  href="mailto:oohokay@proton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#87CEEB" }}
                >
                  here
                </a>
                <br />
                html python nextjs
                <br />
              </p>
            </div>
          </CardItem>

          <CardItem translateZ="80" className="px-2 mt-8">
            <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">
              Connections
            </h3>
            <div className="gap-2 md:flex flex-wrap w-full">
              {/* Steam */}
              <a
                href="https://steamcommunity.com/id/v_models/"
                target="_blank"
                className="w-[48%]"
              >
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2">
                  {/* Steam SVG */}
                  Steam
                  <div className="arrow ml-auto sm:ml-auto opacity-60 justify-end flex items-end">
                    {/* Arrow SVG */}
                  </div>
                </div>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/933839896823619654"
                target="_blank"
                className="w-[48%]"
              >
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2">
                  {/* Discord SVG */}
                  Discord
                  <div className="arrow ml-auto opacity-60 justify-end flex items-end">
                    {/* Arrow SVG */}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/knockemsockem"
                target="_blank"
                className="w-[48%]"
              >
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2">
                  {/* GitHub SVG */}
                  GitHub
                  <div className="arrow ml-auto sm:ml-auto opacity-60 justify-end flex items-end">
                    {/* Arrow SVG */}
                  </div>
                </div>
              </a>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
}
