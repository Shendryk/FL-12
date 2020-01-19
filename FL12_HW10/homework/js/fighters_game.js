function Fighter(obj){
    this._obj = obj;

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

    Fighter.prototype.getHealth = function () {
        return this._obj.hp;
    };

    // Fighter.prototype.attack = function () {

        
    // };
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
