const mesBoutons = document.querySelectorAll(".btn");

mesBoutons.forEach((unBouton) => {
    unBouton.addEventListener("click", (e) => {
        e.preventDefault();

        const card = e.target.closest(".card");
        const pouce = card.querySelector(".bi");

        if (pouce.classList.contains("bi-hand-thumbs-up")) {
            pouce.classList.remove("bi-hand-thumbs-up");
            pouce.classList.add("bi-hand-thumbs-up-fill");
            unBouton.style.color = "cornflowerblue";
        } else {
            pouce.classList.remove("bi-hand-thumbs-up-fill");
            pouce.classList.add("bi-hand-thumbs-up");
            unBouton.style.color = "";
        }
    });
});
