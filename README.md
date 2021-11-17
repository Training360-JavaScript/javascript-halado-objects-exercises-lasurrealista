# Feladatok

**A 18-objects -> 01 -> solution mappában dolgozz!**  
**A HTML fájlokat ne módosítsd!**  
**Az export utasításokat hagyd a fájlok végén!**  
**Az `npm run test:objects` parancs futtatásával tudod futtatni a teszteket!**  

1. Adott az alábbi objektum:  
```javascript
const Walker = {
    name: 'John Doe',
    state: 'dead',
    walk: function(speedInMph) {
        return this.name + ' the ' + this.state + ' walks with ' + speedInMph + ' mph!'
    },
    eat: function(foodName) {
        return this.name + ' the ' + this.state + ' eats ' + foodName + '!'
    },
    speak: function(sound){
        return this.name + ' the ' + this.state + ' says ' + sound + '!'
    }
}
```

Alakítsd át a következőket figyelembe véve:
- Legyen külön konstruktorfüggvény, amelynek neve: `Walker`
- A konstruktorfüggvény paraméterként kapja meg a `name` és a `state` értékeket
- A `name` alapértelmezett értéke: "John Doe"
- A `state` alapértelmezett értéke: "dead"
- Készítsd el a  `walk`, `eat` és `speak` metódusokat a `Walker` `prototype`-hoz rendelve
- A metódusoknál a shorthand megadási módot használd
- Mindenhol template string-et használj
- A metódusparaméternek legyen alapértelmezett értéke az alábbiak szerint:
    - `walk()`: speedInMph = 10
    - `eat()`:  foodName = "meat"
    - `speak()`: sound = "grrrrrr"
- Legyen egy `firstName` és egy `lastName` getter/setter. A `firstName` a név első felét adja vissza/módosítja, míg a `lastName` a név második felét adja vissza/módosítja. Ezeket a `defineProperties` metódus segítségével add hozzá a objektumhoz a konstruktor függvényen belül.  
