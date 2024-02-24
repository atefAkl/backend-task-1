const myData = require("./data.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "lll0",
  builder: {
    id: {
      describe: "The User's id",
      type: "int",
    },
    lname: {
      describe: "The User's First Name",
      type: "string",
      demandOption: true,
    },
    fname: {
      describe: "The User's Last Name",
      type: "stribg",
    },
  },
  handler: (x) => {
    myData.saveUser(x.id, x.fname, x.lname, x.age, x.city);
  },
});

yargs.command({
  command: "findPerson",
  describe: "to read data",
  builder: {
    id: {
      describe: "the item id to read data according to",
      type: "string",
      demandOption: true,
    },
  },
  handler: (x) => {
    myData.findPerson(x.id);
  },
});

yargs.command({
  command: "listAll",
  describe: "to read All Stored Data",

  handler: () => {
    myData.listAll();
  },
});

yargs.command({
  command: "destroy",
  describe: "to read data",
  builder: {
    id: {
      describe: "the item id to be deleted",
      type: "string",
      demandOption: true,
    },
  },
  handler: (x) => {
    myData.destroy(x.id);
  },
});

yargs.parse();
