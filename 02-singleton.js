
const StationClock={
     _hour: 12,
     _minute:0,
     tick(){
          this._minute+=1;
          if(this._minute>=5){
               this._minute=0
               this._hour=(this._hour%12)+1
          }
     },
     time(){
          const h=String(this._hour).padStart(2,"0")
          const m=String(this._minute).padStart(2,"0")
          return `${h} hour : ${m} minutes`
     }
}

// console.log("Sharma ji check time :", StationClock.time())
// StationClock.tick()
// StationClock.tick()
// StationClock.tick()
// console.log("time now ", StationClock.time());

const plateform1=StationClock
const plateform2=StationClock
console.log(plateform1===plateform2)

const StationBell =(function (){
     let ringCount = 0 
     const instance = {
          ring(){
               ringCount++
               return `SharmaJi rings bell ${ringCount}`
          },
          total(){
               return ringCount
          }
          
     }
     return {instance}
})()
