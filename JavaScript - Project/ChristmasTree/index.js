const taille = 6;
let n = 1

while(taille - n >= 0){
    const space = " ".repeat(taille - n)
    const star = "* ".repeat(n)
    console.log(space + star)
    n++;
}