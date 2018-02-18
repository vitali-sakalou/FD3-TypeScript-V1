var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["YELLOW"] = 6] = "YELLOW";
    Color[Color["RED"] = 8] = "RED";
    Color[Color["GREEN"] = 9] = "GREEN";
})(Color || (Color = {}));
;
var col1 = Color.BLACK;
console.log(col1);
console.log(Color.YELLOW);
console.log(Color.GREEN);
console.log(Color[8]);
console.log(Color.BLACK);
//# sourceMappingURL=app.js.map