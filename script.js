let musiclist = [];
let id = 0;
let ul = document.getElementById("myList");


(async () => {




    let response = await fetch('https://api.airtable.com/v0/apptJFmVAcNBtsfQb/tblgOHvSNrRhUH9NW', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer patKzCjJ9VEHr7omt.a741bf47ff2bdbb1c34d0b65fd825bd1578c6da6ac5d18216132440e71e122f5",
        },
    })
    response.json()
    .then(list => list.records
        .forEach((item)=>{
            // , "url": new Audio(item.fields.url)
            musiclist.push({"name": item.fields.name, "id": id, "url": item.fields.sound})
            ul.innerHTML += '<li class="music" onclick=play(' + id + ")>" + item.fields.name + "</li>";
            id++;
            //console.log(item.fields.sound);
            // var audio = new Audio("");
            // audio.play();
            
        }
        
        
        
        )
        
        
        
        
        )
        
        
        

            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    })();
    