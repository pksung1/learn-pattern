let counter = 0;
let instance;

class Counter {

  constructor() {
    if (instance) {
      throw new Error("You can only create one instance")
    }
    instance = this
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// 객체를 수정하지 못하도록 Object.freeze를 수행
const singletonCounter = Object.freeze(new Counter())
export default singletonCounter