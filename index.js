const select = document.querySelector('select');
const para = document.querySelector('p');
const swtich = document.querySelector('switch');

select.addEventListener('change', setAttitude)

function setAttitude() {
    const choice = select.value

    if(choice==="sometimes") {
        para.textContent = "fair enought"; 
        }
        
        else if (choice ==="") {
            para.textContent = "no kanye bad!!!";
         }
         
         else if (choice==="should") {
            para.textContent = "ah but -ought- we...?"
         }
}




const html = document.querySelector('html');
document.body.style.padding= "10px";

function update(bigColor, textColor) {
    html.style.backgroundColor = bigColor;
    html.style.color = textColor;
}



select.addEventListener ("change", e => {
(select.value === "grey")? update("black", "darkgrey")}
)

// need to figure out how to do this with all the colors