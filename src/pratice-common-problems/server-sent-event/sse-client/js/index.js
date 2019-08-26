

let eventSource = null;

function onStart() {
    eventSource = new EventSource("http://localhost:8088/notifications/123");
    eventSource.addEventListener('message', onMessage, false);
    eventSource.onerror = onError;
    eventSource.onopen = onOpen;
}

function onStop() {
    if (eventSource) {
        eventSource.close();
    }
}

function onMessage(res) {
    console.log(res.data);
}

function onError() {
    console.log('Error!');
}

function onOpen() {
    console.log('Connected with server!');
}