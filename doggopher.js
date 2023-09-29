let [gox, goy, dox, doy] = readline().split(' ').map(x => parseFloat(x));
function dis(x, y, x2, y2) {
    return Math.sqrt((x - x2)*(x - x2) + (y - y2) * (y - y2));
}
let esc = false;
while (true) {
    let data = readline();
    if (data == null) break;
    else {
        let [x, y] = data.split(' ').map(x => parseFloat(x));
        if (2 * dis(gox, goy, x, y) <= dis(dox, doy, x, y)){
            console.log('The gopher can escape through the hole at (' + x.toFixed(3) + "," + y.toFixed(3) + ").");
            esc = true;
        }
    }
}
if (esc == false) {
    console.log("The gopher cannot escape.")
}