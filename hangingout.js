let count = 0; let cur = 0;
let terrace_data = readline().split(" ").map(x=>parseInt(x))

for (let i = 0; i < terrace_data[1]; i++){
    let action = readline().split(' ')
    if (action[0] == "enter"){
        if (cur + parseInt(action[1]) > terrace_data[0]){
            count = count + 1
        }else{
            cur = cur + parseInt(action[1])
        }
    }
    else {
        cur = cur - action[1]
    }
}
print(count)