import { calculateRewardPoints } from "../utils/rewardPoints";

describe("calculateRewardPoints", () => {
    test("calculates points for 150 transaction (Expected = 150)", () => {
        expect(calculateRewardPoints(150)).toBe(150);
    });

    test("calculates points for 100 transaction (Expected = 50)", () => {
        expect(calculateRewardPoints(100)).toBe(50);
    });

    test("calculates points for 50 transaction (Expected = 0)", () => {
        expect(calculateRewardPoints(50)).toBe(0);
    });

    test("calculates points for 0 transaction (Expected = 0)", () => {
        expect(calculateRewardPoints(0)).toBe(0);
    });
});
