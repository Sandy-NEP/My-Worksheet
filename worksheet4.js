//worksheet4.js loops

let a=10;

for(let i=1; i<=a; i++){
        console.log(i);
}
console.log("End of loop");
// output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// End of loop
console.log("\n\n\n");

let b=0;
while(b<=10){
    console.log("Incrementing b:", b);
    b++;
}
// output:
// Incrementing b: 0
// Incrementing b: 1
// Incrementing b: 2
// Incrementing b: 3
// Incrementing b: 4
// Incrementing b: 5
// Incrementing b: 6
// Incrementing b: 7
// Incrementing b: 8
// Incrementing b: 9
// Incrementing b: 10

console.log("\n\n\n");

let c;
        do {
            alert("Sandesh");
            c = prompt("Do you want to continue?\nPress 1 to continue");
        } while (c === "1");

        alert("Loop ended. Bye Sandesh!");
// output:
// First alert: "Sandesh"
// Second alert: "Do you want to continue? Press 1 to continue"
// If user enters "1", the loop continues, otherwise it ends with "Loop ended. Bye Sandesh!"
