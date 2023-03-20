const kaverit = []


document.querySelector('#push').onclick = function(){
    if(document.querySelector('#uusinimi input').value.length == 0){
        alert("Et voi telepaattisesti lisätä nimeä!")
    }
    else {

      kaverit.push('#nimet'.innerHTML);
      
        if(kaverit.length > 10) {
            alert("Maksimimäärä saavutettu")
            return;
        }


        document.querySelector('#nimet').innerHTML += `
            <div class="nimi">
                <span id="nimi1">
                    ${document.querySelector('#uusinimi input').value}
                </span>
             
            </div>
        `;
    }
}