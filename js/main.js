const myRow = document.querySelector(".my-row");


for (let i = 1; i <= 100; i++) {
    const col = document.createElement("div");
    const box = document.createElement("div");
    const span = document.createElement("span");

    col.classList.add("my-square");
    box.classList.add("box");


    if (i % 3 == 0) {
        box.classList.add("fizz");
        span.append("fizz");
        box.append(span);
    } else if (i % 5 == 0) {
        box.classList.add("buzz");
        span.append("buzz");
        box.append(span);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        box.classList.add("fizzbuzz");
        span.append("fizzbuzz");
        box.append(span);
    }
    if (!(i % 3 == 0 || i % 5 == 0)) {
        span.append(i);
        box.append(span);
    }


    col.append(box);
    myRow.append(col);
}