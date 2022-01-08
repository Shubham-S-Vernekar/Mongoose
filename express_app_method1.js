var app = require('./config/server.config');
var Register = require('./models/model.supplier');

app.get('/', function(req, res) {
    // res.send('Welcome to Express!');
    res.render('login', { "title": "User Login" });
});

app.post('/', function(req, res) {
    let Supplier_name = req.body.Supplier_name;
    res.send(Supplier_name + ' Welcome to MCA Dept!');
});

app.post('/add', function(req, res) {
    let operand1 = req.body.operand1;
    let operand2 = req.body.operand2;
    let result = operand1 + operand2;
    res.send('Result of Addition is : ' + result);
});

app.post('/register', function(req, res, next) {
    var registerSupplier = new Register(req.body);
    registerSupplier.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registerSupplier);
        }
    });
});


app.post('/update_Supplier', function(req, res, next) {
    var email = req.body.email;
    var Supplier_name = req.body.Supplier_name;
    Register.updateOne({ "email": email }, { "Supplier_name": Supplier_name }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});