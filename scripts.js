
function selectorPlan(){
    const basic = document.getElementById('basic');
    const professional = document.getElementById('professional');
    const master = document.getElementById('master');

        if(basic.textContent === "19.99"){
            basic.textContent = "199.99";
            professional.textContent = "249.99";
            master.textContent = "399.99";
        }
        else{
            basic.textContent = "19.99"
            professional.textContent = "24.99"
            master.textContent = "39.99"
        }
}

    addEventListener('onclick', selectorPlan);