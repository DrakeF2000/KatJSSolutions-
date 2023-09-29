let [classroom_count, total_bottles] = readline().split(' ').map(x=>parseInt(x))
let needed = 0
for (let i = 0; i < classroom_count; i++){
    needed = needed + parseInt(readline())
}
if (needed <= total_bottles){
    print("Jebb")
}else{
    print("Neibb")
}