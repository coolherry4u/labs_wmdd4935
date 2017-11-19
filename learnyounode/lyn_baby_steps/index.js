let slen=process.argv.length
let sum=0
    for(let i=2;i<slen;i++) {//console.log(process.argv[i])
sum=sum+Number(process.argv[i])
}
console.log(sum)