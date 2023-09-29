let rods = parseInt(readline());
let rod_lengths = [];
for (let i = 0; i < rods; i++){
    rod_lengths.push(parseInt(readline()));
}
let output = 0;
for (let i = 0; i < rod_lengths.length; i++){
    if (i == 0){
        output = output + rod_lengths[i];
    }
    else {
        output = output + rod_lengths[i] - 1;
    }
}
print(output);