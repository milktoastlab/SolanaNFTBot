import { Worker } from "./types";

const defaultInterval = 1000 * 60; // 1 minutes

export default function initWorkers(
  workers: Worker[],
  interval: number = defaultInterval
) {
  if (!workers.length) {
    throw "Cannot init workers because no workers are configured: check env vars";
  }

  console.log(`starting ${workers.length} worker(s)...`);

  const runWorkers = () => {
    try {
      workers.forEach((w) => {
        w.execute();
      });
    } catch (e) {
      console.warn(e);
    }
  };

  runWorkers();
  setInterval(runWorkers, interval);
}
