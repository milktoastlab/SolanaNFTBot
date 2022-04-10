import { loadConfig } from "./config";

jest.spyOn(console, "error");

describe("config", () => {
  test("load single subscription", () => {
    const config = loadConfig({
      SUBSCRIPTION_MINT_ADDRESS: "add123",
      SUBSCRIPTION_DISCORD_CHANNEL_ID: "discord123",
    });
    expect(config.subscriptions.length).toEqual(1);
    const { type, discordChannelId, mintAddress } = config.subscriptions[0];
    expect(type).toEqual("NFTSale");
    expect(mintAddress).toEqual("add123");
    expect(discordChannelId).toEqual("discord123");
  });
  test("load multiple subscriptions", () => {
    const config = loadConfig({
      SUBSCRIPTION_MINT_ADDRESS: "add123,add456",
      SUBSCRIPTION_DISCORD_CHANNEL_ID: "discord123,discord456",
    });
    expect(config.subscriptions.length).toEqual(2);
    const subscription0 = config.subscriptions[0];

    expect(subscription0.type).toEqual("NFTSale");
    expect(subscription0.mintAddress).toEqual("add123");
    expect(subscription0.discordChannelId).toEqual("discord123");

    const subscription1 = config.subscriptions[1];
    expect(subscription1.type).toEqual("NFTSale");
    expect(subscription1.mintAddress).toEqual("add456");
    expect(subscription1.discordChannelId).toEqual("discord456");
  });
  test("load multiple subscriptions with one address", () => {
    const config = loadConfig({
      SUBSCRIPTION_MINT_ADDRESS: "add123,add456",
      SUBSCRIPTION_DISCORD_CHANNEL_ID: "discord123",
    });
    expect(config.subscriptions.length).toEqual(2);
    const subscription0 = config.subscriptions[0];

    expect(subscription0.type).toEqual("NFTSale");
    expect(subscription0.mintAddress).toEqual("add123");
    expect(subscription0.discordChannelId).toEqual("discord123");

    const subscription1 = config.subscriptions[1];
    expect(subscription1.type).toEqual("NFTSale");
    expect(subscription1.mintAddress).toEqual("add456");
    expect(subscription1.discordChannelId).toEqual("discord123");
  });

  test("do not load invalid subscription", () => {
    const config = loadConfig({
      SUBSCRIPTION_MINT_ADDRESS: "",
      SUBSCRIPTION_DISCORD_CHANNEL_ID: "discord123",
    });
    expect(config.subscriptions.length).toEqual(0);
  });
});
