interface ServiceChipProps {
  label: string;
}

export default function ServiceChip({ label }: ServiceChipProps) {
  return (
    <div
      className="h-14 px-6 bg-white text-black rounded-full flex items-center justify-center
                 border border-gray-300 shadow-md"
    >
      {label}
    </div>
  );
}
