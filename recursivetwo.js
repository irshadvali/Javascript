const items = [{
    id: 1, name: "USA", values: [{
        id: 2, name: "Chevy", values: [
            {
                id: 3,
                name: "Suburban"
            },
            {
                id: 4,
                name: "Camaro",
                values: []
            }
        ]
    },
    {
        id: 5,
        name: "Ford",
        values: []
    }
    ]
}
];
// find name

function getData(items){
    
    // if(items[0].values){
    //     getData(items[0].values)
    //   console.log(items[0].name)
    // }
    
    if(items&& items.length){
         for(var i=0; i<items.length;i++){
        //console.log(items[i])
        if(items[i].values){
            getData(items[0].values) 
            if(items[0].name!==undefined){
               console.log(items[0].name)  
            }
            
        }
    }   
    }

    
}


