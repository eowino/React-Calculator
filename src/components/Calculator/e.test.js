import nightmare from "nightmare";
import INVALID_EXPRESSION from "../../errors/errors";

const Nightmare = nightmare({
//   show: true,
  executionTimeout: 10000,
  openDevTools: {
    mode: "detach"
  }
});

test("should display the correct answer", async () => {
  expect.assertions(1);
  const result = await Nightmare.goto("http://localhost:3000")
    .wait(".calculator-user-input")
    .click("#one")
    .click("#two")
    .click("#multiply")
    .click("#one")
    .click("#two")
    .click("#equal")
    .evaluate(() => document.querySelector(".calculator-answer").value)
    .end();

  expect(result).toEqual("144");
});

