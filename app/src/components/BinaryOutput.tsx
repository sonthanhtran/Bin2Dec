export function BinaryOutput({ displayValue }: { displayValue: string; }) {
  return (
    <>
      <div className="text-primary font-inter font-medium">
        {`>>`} {displayValue}
      </div>
    </>
  );
}
