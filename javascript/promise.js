const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected due to an error.");
        }
    }, 2000);
});





async function handlePromise() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Done processing promise.");
    }
}

handlePromise();
