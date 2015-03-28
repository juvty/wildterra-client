var nodegit = require('nodegit');
var Status = nodegit.Status;

var path = require('path');


document.write("Checking updates....");
nodegit.Repository.open(
        path.resolve(__dirname, '../.git')
    ).then(function(repo) {
        document.write("Loading.....");
        return nodegit.Remote.load(repo, "origin");
    }).then(function(remote) {
        remote.connect(0);
        document.write("Begin downloads updates....");
        return remote.download();
    })
    .done(function() {
        document.write("It now updated");
    });