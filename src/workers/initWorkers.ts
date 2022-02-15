import { Worker } from "./types";
import logger from "lib/logger";

const defaultInterval = 1000 * 60; // 1 minutes

export default async function initWorkers(
  workers: Worker[],
  interval: number = defaultInterval
) {
  if (!workers.length) {
    throw "Cannot init workers because no workers are configured: check env vars";
  }

  logger.log(`starting ${workers.length} worker(s)...`);

  const runWorkers = async () => {
    const promises = workers.map(async (w) => {
      try {
        return await w.execute();
      } catch (e) {
        logger.warn(e);
      }
    });

    return Promise.all(promises);
  };

  const _ = runWorkers();
  setInterval(runWorkers, interval);
}
