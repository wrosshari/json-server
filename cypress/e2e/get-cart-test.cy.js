describe('Get request', () => {
    it('Validate get cart list', () => {
        cy.request({
            method: 'GET',
            url: 'https://api-staging.kulina.id/api/v11/cart',
            headers:{
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpbmRhLnJvc3NoYXJpQGt1bGluYS5pZCIsImV4cCI6NjA0ODAwMDAwMDAwMDAwLCJoYXNoIjoiJDJhJDA4JFY5M1I3eGJEcERTOWpnWGxHZWhLMXUvcVZYd2FkUWdhc3hLemVIUTB1aDdoZGV3bW5vanllIiwicm9sZSI6Im91dGxldCIsInVzZXJfaWQiOjE1NTY3M30.Wfy-W4-ZVUkn1fY_WxG1nSMw3uWbxWUqLRdS97_CZS7LPFXR_Ib1HcqLQmk2cLH4e79s1ro64GjcoFEshNuIPw'
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body);

            expect(body.product_list[0]).to.have.property('cart_detail_id',18716)

            Array.from(body).forEach(item => {
                expect(item).to.have.all.keys('product_list', 'promocode', 'cart_ucode')
                cy.log("product_list: " + item["product_list"] + " & cart_ucode: " + item["cart_ucode"]);
            })
        })
    })
});