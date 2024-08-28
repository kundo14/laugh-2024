// components/Loader.tsx
import * as React from "react";

export const Loader = () => {
  const [progress, setProgress] = React.useState(0);
  const [randomIntervals, setRandomIntervals] = React.useState<number[]>([]);

  React.useEffect(() => {
    const generateRandomIntervals = () => {
      // Generates random intervals between 100ms and 500ms
      const intervals = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 400) + 100
      );
      setRandomIntervals(intervals);
    };

    generateRandomIntervals();

    let progressValue = 0;
    let step = 0;
    let timeoutId: NodeJS.Timeout;

    const updateProgress = () => {
      if (step < randomIntervals.length) {
        progressValue += Math.floor(Math.random() * 20) + 10; // Random jump between 10% and 29%
        if (progressValue > 100) {
          progressValue = 100;
        }
        setProgress(progressValue);
        step++;
        setTimeout(updateProgress, randomIntervals[step]);
      } else {
        setProgress(100);
      }
    };

    updateProgress();

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 fixed top-0 left-0 z-50">
      <div className="text-center">
        <div className="text-32 mb-4">{progress}%</div>
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="bg-yellow h-full transition-width duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
