import { handler } from "../services/hello";

// Testing "handler" function in "hello.ts" file
describe("Testing handler method", () => {
  test("handler should return 200", async () => {
    const result = await handler({}, {});
    expect(result.statusCode).toBe(200);
  });
});
