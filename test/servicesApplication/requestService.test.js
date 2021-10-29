const {
  RequestService,
} = require("../../src/servicesApplication/requestService");

describe("RequestService", () => {
  let requestService;
  beforeEach(() => {
    requestService = new RequestService();
  });

  it("Requisition Users", async () => {
    const received = await requestService.request(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        }),
      ])
    );
  });

  it("Requisition User 2", async () => {
    const received = await requestService.request(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    expect(received).toEqual(
      expect.objectContaining({
        id: 2,
        name: "Ervin Howell",
      })
    );
  });
});
