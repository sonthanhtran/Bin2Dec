import { useState } from "react";
import { Description } from "./components/Description";
import { Logo } from "./components/Logo";

function isNumeric(variable: string) {
  return !isNaN(parseFloat(variable));
}

function isBinaryFormat(variable: string) {
  console.log(variable.length);
  for (let i = 0; i < variable.length; i++) {
    if (!(variable.charAt(i) == "1" || variable.charAt(i) == "0")) return false;
  }
  return true;
}

function convertBinaryToDecimal(variable: string): string {
  if (variable == "") return "";
  if (!isNumeric(variable)) return "INVALID INPUT";
  if (!isBinaryFormat(variable)) return "THAT IS NOT A BINARY NUMBER";
  return String(parseInt(variable, 2));
}

function BinaryOutput({ displayValue }: {displayValue: string}) {
  return (
    <>
      <div className="text-primary font-inter font-medium">
        {`>>`} {displayValue}
      </div>
    </>
  );
}

function ConvertButton({
  setter,
  setValue,
}: {
  setter: React.Dispatch<React.SetStateAction<string>>;
  setValue: string;
}) {
  return (
    <>
      <button
        onClick={() => setter(setValue)}
        className="bg-primary text-secondary rounded-lg font-semibold w-20"
      >
        Convert
      </button>
    </>
  );
}

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
