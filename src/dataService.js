export function getData(page){
    if (page==1)
    return[
        {id:1,name:'mouse',price:400000,quantity:4},
        {id:2,name:'monitor',price:8000000,quantity:2},
        {id:3,name:'keyboard',price:50000,quantity:5},
        {id:4,name:'motherboard',price:350000,quantity:1},
    ]

    if (page==2)
        return[
            {id:5,name:'disk',price:34000,quantity:4},
            {id:6,name:'case',price:700000,quantity:6},
            {id:7,name:'flash',price:120000,quantity:15},
            {id:8,name:'keyboard 2',price:200000,quantity:5},
        ]
    if (page==3)
    return []

}
export function getTotalPageCount(){
    return 3
}