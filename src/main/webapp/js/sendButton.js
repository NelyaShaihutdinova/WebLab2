let button = document.getElementById('checkButton')

button.onclick = handleButtonClick;
table = document.getElementById("result");

function handleButtonClick() {
    let flag = true;
    let option = document.getElementById("select").value;
    let x;
    let y;
    let r;
    if (option.includes(option)) {
        x = option;
    } else {
        flag = false;
        alert("x should be one of the following values: -5, -4, -3, -2, -1, 0, 1, 2, 3");
    }

    let coordinatesY = document.getElementById("inputText").value;
    if (coordinatesY !== '') {
        let checkY = Number(coordinatesY);
        if (!isNaN(checkY)) {
            if (3 > checkY && checkY > -3) {
                y = checkY;
            } else {
                flag = false;
                alert("y belongs to (-3; 3)");
            }
        } else {
            flag = false;
            alert("y should contain only digits");
        }
    } else {
        flag = false;
        alert("y cannot be empty");
    }

    let radius = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < radius.length; i++) {
        if (radius[i].checked) {
            r = radius[i].value;
            break;
        }
    }
    if (flag) {
        rValue = parseInt(r);
        localStorage.setItem("rValue", rValue);
        send(x, y, rValue);
        redrawGraph(rValue);
        redrawPoint();
    }
}

async function send(x, y, r) {
    console.log("SENDING");
    const form = $('<form>', {
        action: "controller",
        method: "post"
    });
    const args = {X: x, Y: y, R: r};
    Object.entries(args).forEach(entry => {
        const [key, value] = entry;
        $('<input>').attr({
            type: "hidden",
            name: key,
            value: value
        }).appendTo(form);
    });
    form.appendTo('body').submit()
}

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('rValue')) {
        localStorage.setItem('rValue', "5")
        rValue = "5"
    } else {
        rValue = localStorage.getItem('rValue')
    }
    redrawGraph(rValue)
    redrawPoint()

});
function redrawPoint(){
    const table = document.getElementById("result");
    if (table) {
        for (let item of table.rows) {
            const x = parseFloat(item.children[0].innerText.trim());
            const y = parseFloat(item.children[1].innerText.trim());
            const r = parseFloat(item.children[2].innerText.trim());
            if (isNaN(x) || isNaN(y) || isNaN(r)) continue;
            drawPoint(x, y, item.children[3].innerText.trim() === "true");
        }
    }
}
$('input[name="radiobutton"]').on('change', function () {
    let rBox = document.querySelectorAll('input[name=radiobutton]');
    let countR = 0;
    for (let i = 0; i < rBox.length; i++) {
        let check = rBox[i];
        if (check.checked) {
            var r = check.value;
            countR++;
        }
    }
    if (countR === 1) {
        rValue = parseInt(r)
        localStorage.setItem("rValue", rValue)
        redrawGraph(rValue)
        redrawPoint()
    }
});