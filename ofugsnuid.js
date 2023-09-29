const n = parseInt(readline())
let arr = new Array(n)
for (let i = 0; i < n; i++) {
    arr.push(readline())
}
arr = arr.reverse()
for (let i = 0; i < n; i++){
    print(arr[i])
}