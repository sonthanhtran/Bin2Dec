import { useState } from "react";
import { convertBinaryToDecimal } from "./utils";
import { BinaryOutput, ConvertButton, Description, Logo } from "./components";

function Bin2Dec() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  return (
    <div className="flex flex-col gap-3 items-center">
      <label className="flex flex-row gap-3 font-inter">
        <input
          name="binary"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          className="w-64 h-12
          bg-secondary 
          text-primary
          text-2xl 
          px-3 border-4 border-primary
          font-semibold"
        />

        <ConvertButton setter={setDisplayValue} setValue={value} />
      </label>

      <BinaryOutput displayValue={convertBinaryToDecimal(displayValue)} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <div className="w-full h-screen bg-background flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-5 items-center">
          <Logo />
          <Description />
        </div>
        <Bin2Dec />
      </div>
    </>
  );
}
