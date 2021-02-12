const imageContainer = document.getElementById("imageContainer");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

let pointer = 1;

nextBtn.addEventListener("click", () => {
    switch (pointer){
        case 1:
            imageContainer.style.transform = "translateX(-101%)";
            break;
        case 2:
            imageContainer.style.transform = "translateX(-202%)";
            break;
        case 3:
            imageContainer.style.transform = "translateX(-302%)";
            break;
        case 4:
            imageContainer.style.transform = "translateX(0%)";
            pointer = 0;
            break;
    }
    pointer++;
    console.log(pointer);
})

prevBtn.addEventListener("click", () => {
    switch (pointer){
        case 1:
            imageContainer.style.transform = "translateX(-302%)";
            pointer = 5;
            break;
        case 2:
            imageContainer.style.transform = "translateX(0%)";
            break;
        case 3:
            imageContainer.style.transform = "translateX(-101%)";
            break;
        case 4:
            imageContainer.style.transform = "translateX(-202%)";
            break;
    }
    pointer--;
    console.log(pointer);
})