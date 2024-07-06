const form = document.querySelector(".form-class")
const form2 = document.querySelector(".mascara-formulario")


function CliqueiNoBotao() {
    form.style.left ="50%"
    form.style.transform ="translateX(-50%)"
    form.visibility = "visible"
};

function cliqueiNaMascara() {

    form2.style.left= "-300px"
    form2.style.transform ="translateX(0)"
    form2.visibility = "hidden"
};