import React from "react";
import { CompareMinSpec } from "./CompareMinSpec";

import "./styles.scss";

function WeightSelect({
  weight,
  setWeight
}: {
  weight: Weight;
  setWeight: React.Dispatch<React.SetStateAction<Weight>>;
}) {
  const handleClickWeight = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const clickedWeight = e.currentTarget.getAttribute("href") as Weight;
    setWeight(clickedWeight);
  };

  return (
    <ul className="select-weight">
      <li>
        <a
          href="air"
          className={weight === "air" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Air
        </a>
      </li>
      <li>
        <a
          href="thin"
          className={weight === "thin" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Thin
        </a>
      </li>
      <li>
        <a
          href="light"
          className={weight === "light" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Light
        </a>
      </li>
      <li>
        <a
          href="regular"
          className={weight === "regular" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Regular
        </a>
      </li>
      <li>
        <a
          href="medium"
          className={weight === "medium" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Medium
        </a>
      </li>
      <li>
        <a
          href="bold"
          className={weight === "bold" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Bold
        </a>
      </li>
      <li>
        <a
          href="black"
          className={weight === "black" ? "active" : ""}
          onClick={handleClickWeight}
        >
          Black
        </a>
      </li>
    </ul>
  );
}

type Weight =
  | "air"
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "bold"
  | "black";

export default function App() {
  const [isItalic, setIsItalic] = React.useState<boolean>(false);
  const [weight, setWeight] = React.useState<Weight>("regular");
  const [text, setText] = React.useState<string>("");
  const defaultText =
    "A single embedded subset of latin ligatures in woff2 (24kb)";

  const handSetItalic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsItalic(e.target.checked);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = e.currentTarget.value;
    setText(textValue);
  };

  const italicClass = isItalic ? "italic" : "";

  return (
    <div className="App">
      <WeightSelect weight={weight} setWeight={setWeight} />
      <p>
        <label>
          Italic:
          <input type="checkbox" onChange={handSetItalic} />
        </label>
      </p>
      <input
        type="text"
        placeholder="Enter any custom text here"
        size={80}
        onChange={handleTextChange}
      />
      <div className={"aeonik-pro" + " " + italicClass + " " + weight}>
        <p>
          abcdefghijklmnopqrstuvwxyzåäö
          <br />
          ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ
          <br />
          0123456789.:,;()*!?'@#&lt;&gt;$%&amp;^+-=~
        </p>
        <p style={{ fontSize: "24px" }}>✕…⁝‣•← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ↩ ↪ ↺</p>
        <p style={{ fontSize: "10px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "11px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "12px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "14px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "18px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "24px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "30px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "36px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "48px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "60px" }}>{text || defaultText}</p>
        <p style={{ fontSize: "72px" }}>{text || defaultText}</p>
      </div>

      <p>
        <strong>Variable Font:</strong>
      </p>
      <CompareMinSpec
        Chrome={62}
        Safari={11}
        EdgeChromium={94}
        Firefox={62}
        SamsungInternetChromium={63}
      />

      <p>
        <strong>WOFF Font Format:</strong>
      </p>
      <CompareMinSpec
        Chrome={5}
        Safari={5.1}
        EdgeChromium={12}
        Firefox={3.6}
        SamsungInternetChromium={44}
      />
    </div>
  );
}
