import { Popover } from "antd";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { GradientText } from "text-gradients";

const Textgradients = () => {
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
    { color: "purple", text: "Text Gradients(purple)" },
    { color: "deepblue", text: "Text Gradients(deepblue)" },
    { color: "lightgreen", text: "Text Gradients(lightgreen)" },
    { color: "peach", text: "Text Gradients(peach)" },
    { color: "yellow", text: "Text Gradients(yellow)" },
    { color: "black", text: "Text Gradients(black)" },
    { color: "lightpink", text: "Text Gradients(lightpink)" },
    { color: "gray", text: "Text Gradients(gray)" },
    { color: "magenta", text: "Text Gradients(magenta)" },
    { color: "slate", text: "Text Gradients(slate)" },
    { color: "darkgreen", text: "Text Gradients(darkgreen)" },
    { color: "bluered", text: "Text Gradients(bluered)" },
    { color: "lightpurple", text: "Text Gradients(lightpurple)" },
    { color: "brightorange", text: "Text Gradients(brightorange)" },
    { color: "red", text: "Text Gradients(red)" },
    { color: "darkblue", text: "Text Gradients(darkblue)" },
    { color: "cyan", text: "Text Gradients(cyan)" },
    { color: "lightbluegreen", text: "Text Gradients(lightbluegreen)" },
    { color: "ocean", text: "Text Gradients(ocean)" },
    { color: "dimyellow", text: "Text Gradients(dimyellow)" },
    { color: "bluepink", text: "Text Gradients(bluepink)" },
    { color: "dashingblue", text: "Text Gradients(dashingblue)" },
  ];
  return (
    <>
      <div className="text-blue-600 text-center font-bold">
        Click on the gradient to view code
      </div>

      <div className="flex flex-wrap gap-8 justify-center  items-center ">
        {gradientTexts.map(({ color, text }) => (
          <Popover
            key={color}
            trigger="click"
            content={
              <>
                <div
                  onClick={() =>
                    copyToClipboard(
                      `<GradientText color="${color}">${text}</GradientText>`
                    )
                  }
                  style={{ cursor: "pointer" }}
                  className="flex items-center gap-1"
                >
                  <FaCopy /> Copy Code
                </div>
                <div className="font-bold">{`<GradientText color="${color}">${text}</GradientText>`}</div>
              </>
            }
          >
            <GradientText
              className="text cursor-pointer text-center"
              color={color}
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
