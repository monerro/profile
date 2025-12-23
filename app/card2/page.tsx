"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function FramedCard() {
  return (
    <>
      <audio src="/44.mp4" autoPlay loop muted style={{ display: "none" }} />
      <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:mt-14">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] bg-black bg-opacity-85 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
              <Image
                src={"/banner11.png"}
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
                className="object-cover ml-4 absolute top-24 w-[108px] h-[108px] sm:top-20 rounded-full group-hover/card:shadow-xl mx-auto"
                alt="Avatar"
              />
            </div>
          </CardItem>

          <CardItem translateZ="80">
            <div className="w-[20rem] sm:w[24rem] md:w-[27rem] px-1">
              <div className="profile px-2 w-full mt-8 flex justify-between items-center">
                <div className="flex items-center">
                  <a className="font-semibold text-2xl">@parkaparkaparka</a>
                </div>
                <div className="badges ml-auto p-1 gap-1 flex items-center bg-neutral-950 bg-opacity-40 rounded-md">
                  {/* Your large SVGs go here */}
                  {/* You can copy them exactly as in your original file */}
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
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
                  <svg
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <g transform="matrix(1.9641 0 0 1.96342 19.541 5.281)">
                      <path
                        d="m.154 41.29 23.71 9.803a12.444 12.444 0 0 1 7.745-2.158l10.544-15.283-.001-.216c0-9.199 7.483-16.683 16.683-16.683 9.199 0 16.682 7.484 16.682 16.683S68.034 50.12 58.835 50.12c-.127 0-.253-.003-.379-.006l-15.038 10.73c.008.195.015.394.015.592 0 6.906-5.617 12.522-12.522 12.522-6.061 0-11.129-4.326-12.277-10.055l-16.956-7.01"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <ellipse cx="58.576" cy="33.435" rx="9.916" ry="9.922" fill="currentColor" />
                      <ellipse cx="31.079" cy="61.436" rx="7.437" ry="7.441" fill="currentColor" />
                    </g>
                  </svg>
                  Steam
                  <div className="arrow ml-[4rem] sm:ml-auto opacity-60 justify-end flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/933839896823619654"
                target="_blank"
                className="w-[48%]"
              >
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515... (rest of your Discord SVG path)" />
                  </svg>
                  Discord
                  <div className="arrow ml-auto opacity-60 justify-end flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10..." />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793..." />
                    </svg>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/knockemsockem" target="_blank" className="w-[48%]">
                <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..." />
                  </svg>
                  GitHub
                  <div className="arrow ml-[4rem] sm:ml-auto opacity-60 justify-end flex items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-up-right"
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5..." />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5..." />
                    </svg>
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

export default FramedCard;
