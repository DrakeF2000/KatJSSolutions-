while (true) {
    let [sweet, sour] = readline().split(" ").map(x => parseInt(x));
    if (sweet == 0 && sour == 0){
        break;
    }
    if (sweet + sour == 13) {
        console.log("Never speak again.");
    }
    else if (sour > sweet){
        console.log("Left beehind.");
    }
    else if (sweet > sour){
        console.log("To the convention.")
    }
    else {
        console.log("Undecided.");
    }
}