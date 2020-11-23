describe('Blog', () => {
    it('Can navigate to a blog post', () => {
        cy.visit('http://localhost:9000/');
        cy.contains("blog").click();
        cy.get("[data-post-link]").eq(0).click();
        cy.contains("go back").click();
        cy.contains("About this Blog");
    })
})