import initWorkers from "./initWorkers";
import { Worker } from "./types";

jest.useFakeTimers();
jest.spyOn(global, "setInterval");

describe("initWorkers", () => {
  async function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  test("run", () => {
    const mockWorker: Worker = {
      async execute() {},
    };
    jest.spyOn(mockWorker, "execute");

    initWorkers([mockWorker]);

    expect(mockWorker.execute).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();

    expect(mockWorker.execute).toHaveBeenCalledTimes(2);
  });

  test("run after recover from error", () => {
    const mockWorker: Worker = {
      async execute() {
        await sleep(20);
        throw "error";
      },
    };
    jest.spyOn(mockWorker, "execute");

    initWorkers([mockWorker]);

    expect(mockWorker.execute).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();

    expect(mockWorker.execute).toHaveBeenCalledTimes(2);
  });
});
