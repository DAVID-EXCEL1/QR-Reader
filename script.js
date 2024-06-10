function domReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(fn, 1)
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

domReady(function () {
    // Your code here
    let myqr = document.getElementById('qrResult');
    let lastResult, countResults = 0;


    // Already found code
    function onScanSuccess(decodedText, decodedResult) {
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;

            alert("You Qr is :" + decodedText, decodedResult);

            myqr.innerHTML = `you can scan ${countResults}: ${decodedText}`;
        }
    }

    let htmlscanner = new Html5QrcodeScanner(
        "qrReader", {
        fps: 10,
        qrbox: 250
    }
    )
    htmlscanner.render(onScanSuccess);
})