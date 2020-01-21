function Fighter(obj) {
    const name = obj.name;
    const damage = obj.damage;
    const strength = obj.strength;
    const agility = obj.agility;
    let hp = obj.hp;
    let wins = 0;
    let losses = 0;
  
  
    this.getName = function () {
      return name;
    }
  
    this.getDamage = function () {
      return damage;
    }
  
    this.getStrength = function () {
      return strength;
    }
  
    this.getAgility = function () {
      return agility;
    }
  
    this.getHealth = function () {
      return hp;
    }
  
  
    this.attack = function (enemy) {
  
      // let attackFlag = false;
      let attackSuccess = 100 - (strength + agility);
      let random = function () {
        return Math.floor(Math.random() * 101);
      }
  
      if (attackSuccess > random()) {
        // attackFlag = true;
        console.log(`${this.getName()} makes ${this.getDamage()} damage to ${enemy.getName()}`);
        enemy.dealDamage(this.getDamage());
  
      } else {
        // attackFlag = false;
        console.log(`${this.getName()} attack missed`);
      }
      // attackFlag;
  
    }
  
    this.addWin = function () {
      return wins++
    }
  
    this.addLoss = function () {
      return losses++
    }
  
    this.logCombatHistory = function () {
      console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`)
    }
  
    this.heal = function (addHeal) {
      hp += addHeal;
    }
  
    this.dealDamage = function (damage) {
      hp -= damage;
    }
  
  }



function battle(fighter, fighter2) {
      

function round () {
    
  fighter.attack(fighter2);
  fighter2.attack(fighter);
  if (fighter.getHealth() >= 0 && fighter2.getHealth() <= 0) {
      fighter2.addLoss();
      fighter.addWin();
      console.log(`${fighter.getName()} has Won!`);
  } else if (fighter2.getHealth() >= 0 && fighter.getHealth() <= 0) {
      fighter.addLoss();
      fighter2.addWin();
      console.log(`${fighter2.getName()} has Won!`);
  } 
}

while(fighter.getHealth() > 0 || fighter2.getHealth() > 0) {
    if (fighter.getHealth() <= 0) {
        console.log(`${fighter.getName()} is dead and can't fight`);
        break;
    }
    if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
        break;
    }
    
    round();
    if (!fighter.getHealth() > 0 || !fighter2.getHealth() > 0) {
        break;
    }
    
}
}

const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 150, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 30, hp: 100, strength: 40, agility: 15 });


battle(myFighter, myFighter2);