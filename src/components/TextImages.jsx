import React from "react";
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";
import nature from "../assets/nature.jpeg";
import beach from "../assets/beach.jpeg";
import lake from "../assets/lake.jpeg";

const TextImages = () => {
  const codeBlockStyle = "bg-gray-800 text-white p-4 rounded-md w-full my-4";
  const codeExamples = [
    `import { TextImage } from "text-gradients";
import nature from "../assets/nature.jpeg";

return (
  <TextImage imageUrl={nature} className="text">
    Text Images
  </TextImage>
);
    `,
    `import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";

return (
  <TextImage imageUrl={lightning} className="text2" cover={true}>
   Text Images
  </TextImage>
);
    `,
    `import { TextImage } from "text-gradients";
import beach from "../assets/beach.jpeg";

return (
  <TextImage imageUrl={beach} className="text2" pos={"50%"}>
   Text Images
  </TextImage>
);
    `,
    `import { TextImage } from "text-gradients";
import lake from "../assets/lake.jpeg";

return (
 <TextImage imageUrl={lake} className="text2" pos={"50%"} cover={true}>
  Text Images
 </TextImage>
);
    `,
  ];

  return (
    <>
      <p className="text-blue-600 text-center font-bold">
        You can apply images in text like this:
      </p>
      <div className="flex justify-center gap-x-20 flex-wrap flex-col items-start ">
        <div className=" flex flex-col  items-center w-full">
          <TextImage imageUrl={nature} className="text2">
            Text Images
          </TextImage>
          <pre className={codeBlockStyle}>
            <code>{codeExamples[0]}</code>
          </pre>
        </div>

        <div className=" flex flex-col  items-center w-full">
          {" "}
          <TextImage imageUrl={lightning} className="text2" cover={true}>
            Text Images
          </TextImage>
          <pre className={codeBlockStyle}>
            <code>{codeExamples[1]}</code>
          </pre>
        </div>

        <div className=" flex flex-col  items-center w-full">
          {" "}
          <TextImage imageUrl={beach} className="text2" pos={"50%"}>
            Text Images
          </TextImage>
          <pre className={codeBlockStyle}>
            <code>{codeExamples[2]}</code>
          </pre>
        </div>

        <div className=" flex flex-col  items-center w-full">
          {" "}
          <TextImage imageUrl={lake} className="text2" pos={"50%"} cover={true}>
            Text Images
          </TextImage>
          <pre className={codeBlockStyle}>
            <code>{codeExamples[3]}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default TextImages;
