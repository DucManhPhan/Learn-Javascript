

let eventSource = null;

function onStart() {
    // http://dev.travelcells.com.vn
    eventSource = new EventSource("http://dev.travelcells.com.vn:8088/com.viettel.vocs-service/sse/notifications/service");
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