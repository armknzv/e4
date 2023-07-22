function ElectricalAppliance (name, manufacturer, power, turn ){
  this.name= name,
  this.turn = function(){console.log(`The ${this.name} is switched ${turn}.`)}
  this.power = function(){console.log(`Power Consumption of the ${this.name} is ${power} W.`)}
  this.manufacturer = function(){

    console.log(`The ${name} is manufactured by ${manufacturer}.`)
  }
}

const iron1 = new ElectricalAppliance('iron', 'Tefal');
const power  = new ElectricalAppliance('iron', '', 650);
const turn = new ElectricalAppliance('iron', '', '', 'on');
iron1.manufacturer();
power.power();
turn.turn();


function Lighting (name, manufacturer, power, led){
  this.name= name,
  this.led = function(){console.log(`The ${this.name} is ${led}.`)}
  this.manufacturer = function(){console.log(`The ${this.name} is manufactured by ${manufacturer}.`)}
  this.power = function(){console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
}

const lamp1 = new Lighting('lamp',);
const power1  = new Lighting('lamp' );
const led = new Lighting('lamp', 'LED');
power1.power();
lamp1.manufacturer();
led.led();


function PC (name, manufacturer, display, power){
  this.name= name,
  this.display = display,
  this.power = power,
  this.manufacturer = function(){console.log(`The ${this.name} is manufactured by ${manufacturer}.
  Display is ${this.display}'. Power is ${this.power} W.`)}
}

const comp = new PC('computer', 'nvidia', 20);

comp.manufacturer();