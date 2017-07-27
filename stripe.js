var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");
var _ = require("underscore");
//console.log(stripe._api)

//createProduct() //prod_B5P5u0d9RfymZI, prod_B5P8y1zAN2XK3h

// var prods = listProducts();
listOrders2()

//, gte: 1500492706  created: 1500492706, ,  created: {lt: 1500492706}
//1500492706 1499115536

function listOrders() {
  stripe.orders.list({ limit: 1, status: 'paid', created: {gt: 1500492706} }, function(err, orders) {
    // asynchronously called
    console.log(err);
    console.log(orders);
   
  });
}

function listOrders2() {
  stripe.orders.list({ limit: 2, status: 'paid',  created: {gt: 1499115536} }, function(err, orders) {
    // asynchronously called
    console.log(err);
    console.log(orders);
   
  });
}

function listLatestOrder() {
  stripe.orders.list({  limit: 2, created: {gt: 1500492706}}, function(err, orders) {
    // asynchronously called
    console.log(err);
    console.log(orders);
   
  });
}


function listProducts() {
  stripe.products.list({ limit: 1}, function(err, products) {
    // asynchronously called
    console.log(products.data);
    var prods = _.pluck(products.data, "name");
    var ids = _.pluck(products.data, "id");

    // console.log(prods);
    // console.log(ids);

    // var result = _.zip(prods, ids);
    // console.log(result);

    // _.each(products.data, function(data) {
    //   var result = _.zip(data.name, data.id);
    //   // console.log(result);
    //   console.log("%s", data.name);
    // });

   var result =  _.map(products.data, function(data, key) {
      // console.log(result);
      var platform = 'stripe'
      var result = console.log("{platform: %s, id: %s, prod_name: %s}",
       platform, data.id, data.name)
       return  result
    });

   
  });
}

function createProduct() {
  stripe.products.create(
    {
      name: "prod 2",
      description: "prod 2 desc",
      attributes: ["size", "gender"]
    },
    function(err, product) {
      // asynchronously called
      console.log(product);
      console.log(err);
    }
  );
}
