import type { StepsProgressBarProps } from "./type";

const StepsProgressBar: React.FC<StepsProgressBarProps> = ({ step = 1 }) => {
  return (
    <div className="flex items-center justify-end gap-3">
      <div className="w-5 text-center text-sm font-semibold leading-tight text-zinc-900 dark:text-white">{`0${step}`}</div>
      <div className="flex items-baseline justify-start gap-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`h-1 ${index + 1 === step ? "w-12" : "w-6"} rounded-[100px] ${index + 1 === step ? "bg-purple-500" : index + 1 < step ? "bg-[#3DD69E]" : "bg-zinc-300"}`}
          />
        ))}
      </div>
      <div className="w-5 text-center text-sm font-semibold leading-tight text-zinc-500">03</div>
    </div>
  );
};

export default StepsProgressBar;
