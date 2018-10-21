import { roundToNext5 } from "../src/js/index.js";

describe("Round to Multiple of Five", () => {
    test("should return 0 for n = 0", () => {
        expect(roundToNext5(0)).toBe(0);
    });
    test("should return 5 for n = 1", () => {
        expect(roundToNext5(1)).toBe(5);
    });
    test("should return 5 for n = 3", () => {
        expect(roundToNext5(3)).toBe(5);
    });
    test("should return 5 for n = 5", () => {
        expect(roundToNext5(5)).toBe(5);
    });
    test("should return 10 for n = 7", () => {
        expect(roundToNext5(7)).toBe(10);
    });
    test("should return 40 for n = 39", () => {
        expect(roundToNext5(40)).toBe(39);
    });
});