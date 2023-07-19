let users = [
    {
        "name" : "Bunthita" ,
        "lastname" : "Ongboon" ,
        "email" : "Bunthitao64@nu.ac.th" ,
        "form" : "Thailand"
    },{
        "name" : "Mark" ,
        "lastname" : "Tuan" ,
        "email" : "MarkT64@nu.ac.th" ,
        "form" : "Korea"
    }
    ]

    let userA = 
        {
            "name" : "Nataya" ,
            "lastname" : "YaKaYaa" ,
            "email" : "NatayaY@nu.ac.th" ,
            "form" : "Thailand"
        }
        
    let userB =
        {
            "name" : "Violet" ,
            "lastname" : "Purple" ,
            "email" : "Violet64@nu.ac.th" ,
            "form" : "Thailand"
        
        }

    users.push(userA)
    users.push(userB)

  //delete users.splice(0,1)  


for (let i = 0; i < users.length; i++) {
    console.log('Name : ' + users[i].name + ' ' + users[i].lastname)
}

delete users.splice(0,1)

console.log('\n*** After Delete\n')

for (let i = 0; i < users.length; i++) {
    console.log('Name : ' + users[i].name + ' ' + users[i].lastname)
}

