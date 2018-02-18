function test1(arg1, arg2) {
    console.log("test1: arg1=" + arg1 + " arg2=" + arg2);
}
test1(11, "f");
// test1(11); - ошибка
function test2(arg1, arg2, arg3) {
    console.log("test2: arg1=" + arg1 + " arg2=" + arg2 + " arg3=" + arg3);
}
test2(22, "sss", false);
test2(22, "sss");
test2(22);
function test3(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "hello"; }
    console.log("test3: arg1=" + arg1 + " arg2=" + arg2 + " arg3=" + arg3);
}
test3(33, "sss", false);
test3(33, "sss");
test3(33);
function test4(arg1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log("test4: arg1=" + arg1 + " rest=");
    console.log(rest);
}
test4(44, "b", "e", "m");
//# sourceMappingURL=app.js.map