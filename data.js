const fs = require("fs");

function saveUser(id, fname, lname, age = 30, city = "Cairo") {
  const myData = getAll();
  const II = myData.find((el) => {
    return el.id == id;
  });

  if (!II) {
    const newUser = {
      id: id,
      firstName: fname,
      lastName: lname,
      the_age: age,
      the_city: city,
    };

    myData.push(newUser);
    save_data(myData);
  } else {
    const msg = `The id '${id}' is already in use, try another id`;
    console.log(msg);
  }
}

function getAll() {
  try {
    const jsonObj = fs.readFileSync("data.json").toString();
    return JSON.parse(jsonObj);
  } catch {
    return [];
  }
}

const save_data = (x) => {
  const jsonData = JSON.stringify(x);
  fs.writeFileSync("data.json", jsonData);
};

const findPerson = (id) => {
  const data = getAll();
  const found = data.filter((el) => {
    return el.id == id;
  });
  if (found.length > 0) {
    console.log(found);
  } else {
    const msg = `Thre's no users exists with the id '${id}'`;
    console.log(msg);
  }
};

const listAll = () => {
  const data = getAll();
  if (data) {
    data.forEach((el) => {
      console.log(el.firstName, el.lastName);
    });
  } else {
    console.log(
      "thers's no saved users yet, you can add your first record now!"
    );
  }
};
const destroy = (id) => {
  const data = getAll();
  const filtered = data.filter((el) => {
    return el.id != id;
  });
  save_data(filtered);
};

module.exports = {
  saveUser,
  findPerson,
  getAll,
  listAll,
  destroy,
};
