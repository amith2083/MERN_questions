let x = 10;

function test() {
    var x = 20; // ❌ Illegal shadowing (Cannot redeclare a `let` with `var` in the same scope)
    console.log(x);
}

test();
