import nightmare from "nightmare";
import INVALID_EXPRESSION from "../../errors/errors";

const Nightmare = nightmare({
  // show: true,
  executionTimeout: 4000,
  openDevTools: {
    mode: "detach"
  }
});

test("should display an error message to notify the user", async () => {
  expect.assertions(1);
  const result = await Nightmare.goto("http://localhost:3000")
    .wait(".calculator-user-input")
    .click("#one")
    .click("#multiply")
    .click("#two")
    .click("#dot")
    .click("#two")
    .click("#dot")
    .click("#equal")
    .evaluate(() => document.querySelector(".calculator-error").innerHTML)
    .end();

  expect(result).toEqual(INVALID_EXPRESSION);
});