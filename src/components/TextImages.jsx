import React from "react";
import { Popover } from "antd";
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";
import nature from "../assets/nature.jpeg";
import beach from "../assets/beach.jpeg";
import lake from "../assets/lake.jpeg";

const TextImages = () => {
  const codeExamples = [
    `import { TextImage } from "text-gradients";
import nature from "../assets/nature.jpeg";

return (
  <TextImage imageUrl={nature}>
    TEXT IMAGES
  </TextImage>
);`,
    `import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg";

return (
  <TextImage imageUrl={lightning} cover={true}>
    TEXT IMAGES
  </TextImage>
);`,
    `import { TextImage } from "text-gradients";
import beach from "../assets/beach.jpeg";

return (
  <TextImage imageUrl={beach} pos={"50%"}>
    TEXT IMAGES
  </TextImage>
);`,
    `import { TextImage } from "text-gradients";
import lake from "../assets/lake.jpeg";

return (
  <TextImage imageUrl={lake} pos={"50%"} cover={true}>
    TEXT IMAGES
  </TextImage>
);`,
  ];

  const codeBlockStyle = "bg-gray-800 text-white p-4 rounded-md";

  return (
    <>
      <p className="text-blue-600 text-center font-bold">
        Click text to view code
      </p>

      <div className="flex justify-center gap-x-20 flex-wrap flex-col items-start ">
        {[
          { imageUrl: nature, code: codeExamples[0] },
          { imageUrl: lightning, code: codeExamples[1], cover: true },
          { imageUrl: beach, code: codeExamples[2], pos: "50%" },
          { imageUrl: lake, code: codeExamples[3], pos: "50%", cover: true },
        ].map(({ imageUrl, code, pos, cover }, index) => (
          <Popover
            key={index}
            content={ 
              <div>
                <pre className={codeBlockStyle}>
                  <code>{code}</code>
                </pre>
              </div>
            }
          >
            <TextImage
              imageUrl={imageUrl}
              pos={pos}
              cover={cover}
              className="text2 cursor-pointer"
            >
              TEXT IMAGES
            </TextImage>
          </Popover>
        ))}
      </div>
    </>
  );
};

export default TextImages;
