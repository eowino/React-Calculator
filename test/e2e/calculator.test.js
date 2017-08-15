const expect = require("chai").expect;
const Nightmare = require("nightmare");
const nightmare = Nightmare({
  show: true,
  executionTimeout: 2000
});


describe("Test", () => {
  it("should work", done => {
    nightmare
      .goto("http://localhost:3000")
      .wait(".calculator-user-input")
      .click("#one")
      .click("#two")
      .click("#multiply")
      .click("#one")
      .click("#two")
      .click("#equal")
      .evaluate(() => document.querySelector(".calculator-answer").value)
      .end()
      .then(answer => {
        expect(answer).to.equal("144");
        done();
      })
      .catch(err => {
        console.log("Error: ", err);
        done();
      });
  });
});
