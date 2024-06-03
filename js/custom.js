document.addEventListener("click", function(e) {
    closeAllSelect(e.target);
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
customSelects.forEach(function(select) {
    var selectSelected = select.querySelector(".select-selected");
    var selectItems = select.querySelector(".select-items");

    selectSelected.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        selectItems.classList.toggle("select-show");
    });

    selectItems.addEventListener("click", function(e) {
        var target = e.target;
        if (!target.matches(".select-items div")) return;
        selectSelected.textContent = target.textContent;
        selectItems.classList.remove("select-show");
    });
});
