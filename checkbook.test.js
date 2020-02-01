const balancer = require("./index");

const testValue =
  "100.00\n125 Manga;! 5.00?;\n123 Skateboard 5.00\n127 Pogs 5.00";

describe("Checkbook Balancer", () => {
  test("Function is called", () => {
    const spy = jest.spyOn(balancer, "scrubScrub");
    const result = balancer.scrubScrub(testValue);

    expect(balancer.scrubScrub).toHaveBeenCalled();
    expect(balancer.scrubScrub).toHaveBeenCalledWith(testValue);
  });
});
