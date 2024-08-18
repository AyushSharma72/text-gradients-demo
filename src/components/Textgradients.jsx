import { Popover } from "antd";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { useTheme } from "../context/Theme";
import GradientText from "./../../../package/src/components/GradientText";

const Textgradients = () => {
  const { Theme } = useTheme();

  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("copied to clipboard");
      });
    } catch (error) {
      toast.error("error in copying");
    }
  };
  const gradientTexts = [
    { color: "purple", text: "Text Gradients(purple)", direction: "right" },
    { color: "deepblue", text: "Text Gradients(deepblue)", direction: "left" },
    {
      color: "lightgreen",
      text: "Text Gradients(lightgreen)",
      direction: "top",
    },
    { color: "peach", text: "Text Gradients(peach)", direction: "top" },
    { color: "yellow", text: "Text Gradients(yellow)", direction: "right" },
    { color: "black", text: "Text Gradients(black)", direction: "right" },
    {
      color: "lightpink",
      text: "Text Gradients(lightpink)",
      direction: "left",
    },
    { color: "gray", text: "Text Gradients(gray)", direction: "left" },
    { color: "magenta", text: "Text Gradients(magenta)", direction: "bottom" },
    { color: "slate", text: "Text Gradients(slate)", direction: "bottom" },
    {
      color: "darkgreen",
      text: "Text Gradients(darkgreen)",
      direction: "right",
    },
    { color: "bluered", text: "Text Gradients(bluered)", direction: "right" },
    {
      color: "lightpurple",
      text: "Text Gradients(lightpurple)",
      direction: "left",
    },
    {
      color: "brightorange",
      text: "Text Gradients(brightorange)",
      direction: "left",
    },
    { color: "red", text: "Text Gradients(red)", direction: "top" },
    {
      color: "darkblue",
      text: "Text Gradients(darkblue)",
      direction: "top",
    },
    { color: "cyan", text: "Text Gradients(cyan)", direction: "right" },
    {
      color: "lightbluegreen",
      text: "Text Gradients(lightbluegreen)",
      direction: "bottom left",
    },
    {
      color: "ocean",
      text: "Text Gradients(ocean)",
      direction: "bottom right",
    },
    {
      color: "dimyellow",
      text: "Text Gradients(dimyellow)",
      direction: "top left",
    },
    {
      color: "bluepink",
      text: "Text Gradients(bluepink)",
      direction: "top right",
    },
    {
      color: "dashingblue",
      text: "Text Gradients(dashingblue)",
      direction: "left",
    },
  ];

  return (
    <>
      <div
        className={`${
          Theme ? "text-white" : "text-black"
        } text-center font-bold`}
      >
        Click on the gradient to view code
      </div>

      <div className="flex flex-wrap gap-8 justify-center  items-center pb-10">
        {gradientTexts.map(({ color, text, direction }) => (
          <Popover
            key={color}
            trigger="click"
            content={
              <>
                <div
                  onClick={() =>
                    copyToClipboard(
                      `<GradientText color="${color}" direction="${direction}">${text}</GradientText>`
                    )
                  }
                  style={{ cursor: "pointer" }}
                  className="flex items-center gap-1"
                >
                  <FaCopy /> Copy Code
                </div>
                <div className="font-bold">{`<GradientText color="${color}" direction="${direction}">${text}</GradientText>`}</div>
              </>
            }
          >
            <GradientText
              className="text cursor-pointer text-center "
              color={color}
              direction={direction}
            >
              {text}
            </GradientText>
          </Popover>
        ))}
      </div>
    </>
  );
};

export default Textgradients;
