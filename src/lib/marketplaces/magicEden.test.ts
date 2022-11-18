import magicEden from "./magicEden";

jest.mock("lib/solana/NFTData", () => {
  return {
    fetchNFTData: () => {
      return {};
    },
  };
});

describe("magicEden", () => {
  test("itemUrl", () => {
    expect(magicEden.itemURL("xxx1")).toEqual(
      "https://magiceden.io/item-details/xxx1"
    );
  });
});
