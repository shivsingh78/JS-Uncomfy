const kiranaStore=(function (){
     let itemCount=0;
     const godown=[]

     return {
          add(name){
               itemCount++
               godown.push(name)
               return `sharma ji stocked item : ${name}`
          },
          count(){
               return itemCount
          },
          list(){
               return godown.slice()
          }
     }
 })()
// console.log(kiranaStore.count())
// console.log(kiranaStore.add("add 10kg flour"))

const accountBooks=(function(){
     let records=[]
     let accessLogs=[]
     function logAccess(action){
          accessLogs.push(`[${new Date().toISOString().slice(0,10)}] - ${action}`)
     }
     function store(doc){
          logAccess(`Stored : ${doc}`)
          records.push(doc)
     }
     function retrive(index){
          logAccess(`Retrived index ${index}`)
          return records[index] || "Not found"

     }
     function getRecordsCount(){
          return records.length
     }
     function getAcessLogs(){
          return accessLogs.slice()
     }
     return {
          store,
          retrive,
          count:getRecordsCount,
          logs:getAcessLogs

     }
})()
// accountBooks.store("peanut butter")
// console.log(accountBooks.retrive(0))
// console.log( accountBooks.count())

//Simulation

const kiranaMart={}
kiranaMart.Inventory=(function(){
     function unitPrice(totalPrice,quantity){
          return totalPrice/quantity
     }
     function totalWeight(weightPerItem,quantity){
          return weightPerItem*quantity
     }
     return {unitPrice,totalWeight}
})()

//Dipendency Injection
kiranaMart.BillingCounter=(function(Inv){
     function bulkDiscount(pricePerKg,kgs){
          const totalWeight = Inv.totalWeight(pricePerKg,kgs)
     return  `${(totalWeight*0.95).toFixed(1) } after 5% bulk discount` 
}
return {bulkDiscount}
})(kiranaMart.Inventory)

// console.log(kiranaMart.BillingCounter.bulkDiscount(60,10))

console.log(Object.keys(kiranaMart))
console.log(Object.keys(kiranaMart.Inventory))


