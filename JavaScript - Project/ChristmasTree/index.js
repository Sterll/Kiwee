taille = 6;

//OLD VERSION
x = 1
while(taille-x>=0){
    console.log(" ".repeat(taille - x)+"* ".repeat(x))
    x++;
}

//VERSION TWO
for(n=1; n<=taille;n++){
    console.log(" ".repeat(taille-n) + "* ".repeat(n))
}

//VERSION THREE
Array.from({length: taille}, (_, n) => console.log(" ".repeat(taille - n) + "* ".repeat(n + 1)));
