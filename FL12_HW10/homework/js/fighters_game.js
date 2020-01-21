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
    // return
  }

  this.dealDamage = function (damage) {
    hp -= damage;
     // return
  }

}




function battle(attacker, defender) {

  function isDead(...fighters) {
    for (let fighter of fighters) {
      if (fighter.getHealth() === 0) {
        return console.log(`${fighter.getName()} is dead and can't fight.`);
      }
    }
  }
  isDead(attacker, defender);




  function attack() {
    attacker.attack(defender);
    defender.attack(attacker);
    if (attacker.getHealth() <= 0 && defender.getHealth() >= 0) {
      attacker.addLoss();
      defender.addWin();
      console.log(`${defender.getName()} has Won!`);
    } else if (defender.getHealth() <= 0 && attacker.getHealth() >= 0) {
      defender.addLoss();
      attacker.addWin();
      console.log(`${attacker.getName()} has Won!`);
    }
  }
  while (attacker.getHealth() > 0 || defender.getHealth() > 0) {
    if (attacker.getHealth() <= 0) {
      console.log(`${attacker.getName()} is dead and can't fight`);
      break;
    }
    if (defender.getHealth() <= 0) {
      console.log(`${defender.getName()} is dead and can't fight`);
      break;
    }
    attack();
    if (!attacker.getHealth() > 0 || !defender.getHealth() > 0) {
      break;
    }
  }
}


const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 150, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Commodus', damage: 30, hp: 100, strength: 40, agility: 15 });
// console.log(myFighter.getName());
// console.log(myFighter.getDamage());
// console.log(myFighter.getStrength());
// console.log(myFighter.getAgility());
// console.log(myFighter.getHealth());

myFighter.attack(myFighter2);
myFighter2.attack(myFighter);
myFighter.heal(50);
myFighter.getHealth();
myFighter.logCombatHistory();
myFighter2.logCombatHistory();
myFighter.dealDamage(20);
myFighter.getHealth();

// battle(myFighter, myFighter2);