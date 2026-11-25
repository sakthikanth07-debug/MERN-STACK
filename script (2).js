document.getElementById("welcomeMessage").innerText =
    "Welcome to System Status Checker!";
const updateBanner = (message, color) => {
    let banner = document.getElementById("statusBanner");
    banner.innerText = message;
    banner.style.backgroundColor = color;
};
const checkStatus = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(false);
        }, 2000);
    });
};
function checkSystemStatus() {
    updateBanner("System is Checking...", "orange");
    checkStatus().then((status) => {
        if (status) {
            updateBanner("System is Online", "green");
        } else {
            updateBanner("System is Offline", "red");
        }

    });
}

