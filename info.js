var info;

function advertise(f){
    fetch(`${f}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        info=data;
    });
    setTimeout(function() {
    let hd = info.hd;
    let TNB = info.TNB;
    let IMG = info.IMG;
    var h='';
    var g='';
    let j='';
    if(hd!=null)
    for(let i of hd){
        h+=
        `
        <li><a href="${i.link}">${i.val}</a></li>
        `;
    }
    if(TNB!=null)
    for(let i of TNB){
        g+=
        `
        <li><a href="${i.link}">${i.val}</a></li>
        `;
    }
    if(IMG!=null)
    for(let i of IMG){
        j+=
        `
        <div class="item">
            <a href=${i.link}><img src=${i.img} alt=""></a>
        </div>
        `;
    }
    let e1 = document.getElementById('cont');
    let e2 = document.getElementById('TNB');
    let e3 = document.querySelector('.list');
    if(e1!=null){
        e1.innerHTML+=h;
    }
    if(e2!=null){
        e2.innerHTML+=g;
    }
    if(e3!=null){
        e3.innerHTML+=j;
    }
    }, 800);
}