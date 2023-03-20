

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#uusinimi input').value.length == 0){
        alert("Et voi telepaattisesti lisätä nimeä!")
    }
    else{
        document.querySelector('#nimet').innerHTML += `
            <div class="nimi">
                <span id="nimi1">
                    ${document.querySelector('#uusinimi input').value}
                </span>
             
            </div>
        `;
    }
}