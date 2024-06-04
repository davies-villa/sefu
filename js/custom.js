document.addEventListener("click", function (e) {
    closeAllSelect(e.target);
});

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const loaderImage = document.getElementById('loaderImage');
    const images = ['img/loader1.png', 'img/loader2.png'];
    let currentIndex = 0;
    const intervalTime = 500;
    const duration = 10000;

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        loaderImage.src = images[currentIndex];
    }, intervalTime);

    setTimeout(() => {
        clearInterval(interval);
        loader.classList.add('hidden');
    }, duration);
});

function closeAllSelect(elmnt) {
    var selects = document.getElementsByClassName("select-items");
    for (var i = 0; i < selects.length; i++) {
        var items = selects[i];
        if (elmnt != items && elmnt != items.previousElementSibling) {
            items.classList.remove("select-show");
        }
    }
}

var customSelects = document.querySelectorAll(".select-wrapper");
customSelects.forEach(function (select) {
    var selectSelected = select.querySelector(".select-selected");
    var selectItems = select.querySelector(".select-items");

    selectSelected.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        selectItems.classList.toggle("select-show");
    });

    selectItems.addEventListener("click", function (e) {
        var target = e.target;
        if (!target.matches(".select-items div")) return;
        selectSelected.textContent = target.textContent;
        selectItems.classList.remove("select-show");
    });
});
