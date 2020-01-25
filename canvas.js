let isPainting = false;
let width = 10;
let cap = "round";
let color = "red";

resize = () => {
    canvas.height = window.innerHeight - 24;
    canvas.width = window.innerWidth - 24;
}

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    resize();


    startPosition = e => {
        isPainting = true;
        draw(e)
    }

    finishPosition = () => {
        isPainting = false;
        context.beginPath();
    }

    draw = e => {
        if (!isPainting) return;
        context.lineWidth = width;
        context.lineCap = cap;
        context.strokeStyle = color;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener ("mouseout", finishPosition);
})

window.addEventListener("resize", () => {
    resize();
})