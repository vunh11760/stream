const openStream = require('./openStream');
const playVideo = require('./playVideo')
const SimplePeer = require('simple-peer');
const $ = require('jquery');

openStream(function (stream) {
    playVideo(stream, 'localStream')
    const p = new SimplePeer({
        initiator: location.hash === '#1',
        trickle: false,
        stream: stream
    })
    p.on('signal', token => {
        console.log('SIGNAL', token)
        $('#txtMySignal').val(JSON.stringify(token))
        // document.querySelector('#outgoing').textContent = JSON.stringify(token)
    })
    $('#btnConnect').click(() => {
        const friendSignal = JSON.parse($('#friendSignal').val());
        console.log(friendSignal)
        p.signal(friendSignal)
    })
    p.on('connect', () => {
        console.log('CONNECT')
        setInterval(() => p.send(Math.random()), 2000);
    })
    p.on('data', data => {
        console.log('Nhan du lieu ' + data);
    })
    p.on('stream', fristream => {
        playVideo(stream, 'friStream')
    })
})

console.log("Hello") 