import { getTempStatus } from "./helper";

describe("helper.js", () => {

	it("getTempStatus() ", () => {
		expect(getTempStatus(3)).toBe("cold");
		expect(getTempStatus(7)).toBe("average");
		expect(getTempStatus(11)).toBe("hot");
	});
});
