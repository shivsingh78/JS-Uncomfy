// Singleton - singleton ensure only one connection is created and reuse across entire application.

//Object based Singleton 
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
//console.log(plateform1===plateform2)

//Module or iffe based singleton
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
     return instance
})()
// StationBell.ring()
// console.log(StationBell.ring())
// console.log("total ring count", StationBell.total())

class ClockMechanism {
     constructor(){
          if(ClockMechanism._instance){
               return ClockMechanism._instance
          }
          this.gears=42;
          this.wound=false
          ClockMechanism._instance=this;
          
     }
     wind(){
          this.wound= true;
          return `Changed the state to true`
     }

     status(){
          return `Gears ${this.gears}, Wound: ${this.wound}`
     }
     static getinstance(){
          if(!ClockMechanism._instance){
               new ClockMechanism()
          }
          return ClockMechanism._instance
     }
}

// ClockMechanism._instance=null
// const mech1= new ClockMechanism()
// const mech2 = new ClockMechanism()
// console.log("Same or not : ", mech1 === mech2)

//Real use case of singleton pattern
// import mongoose from 'mongoose'

class DB{
     static instance ;
     static async connect() {
          if(!DB.instance) {
               console.log("Connecting to MongoDB...");
               DB.instance= await mongoose.connect(ProcessingInstruction.env.MONGO_URL)
               
          }
          return DB.instance
     }
}

//module based singleton
function createStaticConfig(){
     const config = {
          plateform:9,
          tracks:12,
          junciton:"Satna"
     }
     return Object.freeze(config)
}
const stationConfig= createStaticConfig()
console.log("Plateform ", stationConfig.plateform);
stationConfig.plateform=444
console.log("Plateform ", stationConfig.plateform);
