import React from "react";
import { Popover } from "antd";
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";
import nature from "../assets/nature.jpeg";
import beach from "../assets/beach.jpeg";
import lake from "../assets/lake.jpeg";
import { useTheme } from "../context/Theme";

const TextImages = () => {
  const { Theme } = useTheme();

  const codeExamples = [
    `import { TextImage } from "text-gradients";
import nature from "../assets/nature.jpeg";

export const Component = () => {
  return (
    <TextImage imageUrl={nature}>
      TEXT IMAGES
    </TextImage>
  );
};
`,
    `import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";
export const Component = () => {
return (
  <TextImage imageUrl={lightning} 
  cover={true}>
    TEXT IMAGES
  </TextImage>
);
}`,
    `import { TextImage } from "text-gradients";
import beach from "../assets/beach.jpeg";
export const Component = () => {
return (
  <TextImage imageUrl={beach} pos={"50%"}>
    TEXT IMAGES
  </TextImage>
);
}`,
    `import { TextImage } from "text-gradients";
import lake from "../assets/lake.jpeg";
export const Component = () => {
return (
  <TextImage imageUrl={lake} 
  pos={"50%"} cover={true}>
    TEXT IMAGES
  </TextImage>
);
}`,
  ];
  const notes = [
    `Basic usage`,
    `usage of  "cover"(true or false) prop that completely
      covers the element's content box`,
    ` usage of  "pos" prop to adjust the placement of the image in the text`,
    `usage of both "pos" and "cover"`,
  ];

  const codeBlockStyle = "bg-gray-800 text-white p-4 rounded-md";

  return (
    <>
      <p
        className={`${
          Theme ? "text-white " : "text-black"
        } text-center font-bold`}
      >
        Click text to view code
      </p>

      <div className="flex justify-center gap-x-20 gap-y-20 flex-wrap  items-start m-6 pb-10">
        {[
          { imageUrl: nature, code: codeExamples[0], note: notes[0] },
          {
            imageUrl: lightning,
            code: codeExamples[1],
            cover: true,
            note: notes[1],
          },
          {
            imageUrl: beach,
            code: codeExamples[2],
            pos: "50%",
            note: notes[2],
          },
          {
            imageUrl: lake,
            code: codeExamples[3],
            pos: "50%",
            cover: true,
            note: notes[3],
          },
        ].map(({ imageUrl, code, pos, cover, note }, index) => (
          <Popover
            key={index}
            trigger={"click"}
            content={
              <div>
                <pre className={codeBlockStyle}>
                  <code>{code}</code>
                </pre>
              </div>
            }
          >
            <div
              className={`flex flex-col justify-center items-center border  ${
                Theme ? "border-white" : "border-black"
              }  rounded-md p-3 sm:w-[42%] w-full `}
            >
              <p
                className={`${
                  Theme ? "text-white" : "text-black"
                } font-bold text-center p-2 flex flex-wrap`}
              >
                {note}
              </p>
              <TextImage
                imageUrl={imageUrl}
                pos={pos}
                cover={cover}
                className="text2 cursor-pointer"
              >
                TEXT IMAGES
              </TextImage>
            </div>
          </Popover>
        ))}
      </div>
    </>
  );
};

export default TextImages;
