const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on page {string}", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 50000,
  });
});

When("user choose date {int}", async function (number) {
  return await clickElement(this.page, `body nav a:nth-child(${number})`);
});

When("user choose time of a movie {int} {int}", async function (one, two) {
  return await clickElement(this.page, `body main section:nth-child(${one}) div:nth-child(${two}) ul li a`);
});

When("user choose a sit {int} {int}", async function (one, two) {
  return await clickElement(
    this.page,
    ".buying-scheme__wrapper div:nth-child(3) span:nth-child(7)"
  );
});

When("user click on the booking button", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

When("user click on the button to get booking code", async function () {
  return await clickElement(this.page, "button.acceptin-button");
});

Then("user get the code and text {string}", async function (string) {
  const actual = await getText(this.page, "h2.ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("button for booking is inactive {string}", async function (string) {
  const actual = String(
    await this.page.$eval("button", (button) => {
      return button.disabled;
    })
  );
  const expected = await string;
  expect(actual).contains(expected);
});