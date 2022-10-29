describe('POST request', () => {
    var titleOfPost = new Array();

    var result;
    it('Created a new post via /posts API', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                title: 'Sunshine', 
                author: 'Jason'
            },
            headers:{
                accept: 'application/json'
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    });

    it('Validate title of latest post', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers:{
                accept: 'application/json'
            }
        }).then(response =>{
            let body = JSON.parse(JSON.stringify(response.body)); //save all title data to var titleOfPost
            body.forEach(function(item){
                titleOfPost.push(item['title']);
            })
        }).then(() => {
            var latestPost = titleOfPost[titleOfPost.length - 1]; //save the latest data in response body
            expect(latestPost).to.eql('Sunshine');
        })
    })
});