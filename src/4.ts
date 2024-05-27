class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];
  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }
  comeIn(person: Person): Person[] {
    if (this.door) {
      this.tenants.push(person);
    }
    return this.tenants;
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(door: boolean, key: Key) {
    super(door, key);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key();

const house = new MyHouse(true, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
