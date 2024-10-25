class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }

  static createId() {
    return "123";
  }
}

const iqra = new User("iqraa");
// console.log((iqra.createId()));

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teaches = new Teacher("iqra", "khan@xhu");
teaches.logMe();



