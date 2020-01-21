function Fighter(obj){
	this._obj = obj;
			this._losses = 0;
			this._wins = 0;
//         this._logCombatHistory = `Name: ${this._obj.name}, Wins: ${this._wins}, Losses: ${this._losses}`;


	Fighter.prototype.getName = function () {
			return this._obj.name;
	};
		
	Fighter.prototype.getDamage = function () {
			return this._obj.damage;
	};
		
	Fighter.prototype.getStrength = function () {
			return this._obj.strength;
	};
		
	Fighter.prototype.getAgility = function () {
			return this._obj.agility;
	};
		
	Fighter.prototype.getHealth = function () {
			return this._obj.hp;
	};

	Fighter.prototype.attack = function (enemy) {
		let attackSuccess = 100-(this._obj.strength + this._obj.agility); 
		let attackFlag = false;
		let random = function (){
			return Math.floor(Math.random() * 101);
		}
					
					if (attackSuccess > random() ? attackFlag = true : attackFlag = false){
						console.log(`${this.getName()} makes ${this.getDamage()} damage to ${enemy.getName()}`);
						
					} else {
						console.log(`${this.getName()} attack missed`);
					}
		

		
		console.log('attackSuccess', attackSuccess);
		console.log('attackFlag', attackFlag);
		console.log('random()', random());
	};

	Fighter.prototype.logCombatHistory = function (enemy){
		
	}
	
	Fighter.prototype.addLoss = function (){
		return this._losses+=1;
		console.log(this._losses);
	}
	
	Fighter.prototype.addWin = function (){
		return this._wins+=1;
		console.log(this._wins);
	}
	
	Fighter.prototype.logCombatHistory = function (){
		return console.log(this._logCombatHistory);
	}
	
}




const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name: 'Commodus', damage: 30, hp: 90, strength: 40, agility: 15});

let attack2 = myFighter.attack(myFighter2);
myFighter.addLoss();
console.log(myFighter.addLoss());
myFighter.logCombatHistory();
console.log(myFighter.addLoss());




// ES6
// class Fighter {
	
// 			constructor(obj) {
// 				this._obj = obj;
// 			}
	
// 			get getName() {
// 					return this._obj.name;
// 			}
				
			
// 	}
	
// 	const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});

// 	console.log(myFighter.getName());
	
	
	