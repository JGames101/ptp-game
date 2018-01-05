var peer = new Peer({key: 'lwjd5qra8257b9'});

peer.on('open', function(id) {
    var playerId = id;
    document.querySelector('#idDisplay').innerHTML = playerId;
});

peer.on('connection', function(conn) {
    console.log('I have been connected ' + conn);
});

document.querySelector('#hostGameButton').addEventListener("click",function(){
    document.querySelector('#hostGame').className = 'open';
    var role = 'host';
});

document.querySelector('#joinGameButton').addEventListener("click",function(){
    document.querySelector('#joinGame').className = 'open';
    var role = 'join';
});

document.querySelector('#joinFormIdButton').addEventListener("click",function(){
    peerId = document.querySelector('#gameId').value;
    var conn = peer.connect(peerId);
});
