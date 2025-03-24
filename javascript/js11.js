
function blockScopeExample() {
    if (true) {
        let x = 30;
        const y = 40;
        console.log(x, y); // ✅ 30 40
    }
    console.log(x); // ❌ ReferenceError: x is not defined
    console.log(y); // ❌ ReferenceError: y is not defined
}

blockScopeExample();