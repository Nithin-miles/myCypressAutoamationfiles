


it("Get APPSOS Health Status", () => {
    cy.api({
      method: "GET",
      url: `https://qa-onapi.appsos.com/v1/health`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.status).to.equal("pass");
    });
  });