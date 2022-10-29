describe('Get request', () => {
    var result;
    it('Validate status code of the /post API', () => {
        result = cy.request('http://localhost:3000/posts');
        result.its('status').should('equal', 200)
    })

    it('Validate /post api contains the correct key and values', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers:{
                accept: 'application/json'
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body);

            expect(body[0]).has.property('title','Example Json Server')

            body.forEach(function(item) {
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + item["author"] + " & Title: " + item["title"]);
            })
        })
    })
});