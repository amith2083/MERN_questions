function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching for:", query);
}

const debounceSearch = debounce(search, 2000); // 2000ms = 2 seconds delay
debounceSearch("a");
debounceSearch("p"); // Called after 1 second
debounceSearch("p"); // Called after 2.5 seconds

//---------------------------------------------------------------------------------------------------------------------------------------
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

function onResize() {
    console.log("Window resized!",new Date().toLocaleTimeString());
}

const throttledResize = throttle(onResize, 2000); // 2000ms = 2 seconds interval
window.addEventListener('resize', throttledResize);