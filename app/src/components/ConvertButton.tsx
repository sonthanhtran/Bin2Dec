export function ConvertButton({
  setter, setValue,
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
