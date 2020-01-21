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