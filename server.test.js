const request = require("supertest");
 
var app = require("./server").app;
 
it("filter should return status 200", function(done){
     
    request(app)
        .get("/api/base/filter")
        .expect(200)
        .end(done);
});

it("hotel data should return status 200", function(done){
     
      request(app)
          .get("/api/base/hotel")
          .expect(200)
          .end(done);
  });

it("hotels data should return status 200", function(done){
     
      request(app)
          .get("/api/base/hotels")
          .expect(200)
          .end(done);
  });

it("tour data should return status 200", function(done){
     
      request(app)
          .get("/api/base/tour")
          .expect(200)
          .end(done);
  });

it("country data should return status 200", function(done){
     
      request(app)
          .get("/api/base/country")
          .expect(200)
          .end(done);
  });

it("post data should return status 200", function(done){
     
      request(app)
          .get("/api/base/post")
          .expect(200)
          .end(done);
  });