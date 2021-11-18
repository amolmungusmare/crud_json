const fs = require("fs");
const a = require("readline-sync");
function post() {
  var file = fs.readFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    "utf-8"
  );
  list = JSON.parse(file);
  var user = a.question("Enter your user name ");
  var name = a.question("Enter your first name ");
  var l_name = a.question("Enter your last name ");
  var obj = {};
  obj["U_name"] = user;
  obj["F_name"] = name;
  obj["L_name"] = l_name;
  list.push(obj);
  const str = JSON.stringify(list);
  fs.writeFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    str
  );
  console.log("your data has been saved successfuly");
}
function delite() {
  var file = fs.readFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    "utf-8"
  );
  var list = JSON.parse(file);
  const u_name = a.question("Enter your register user name ");
  for (i of list) {
    if (i["U_name"] === u_name) {
      list.pop(i);
    }
  }
  var str = JSON.stringify(list);
  fs.writeFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    str
  );
  console.log("Thanks.....! Your data has been deleted successfuly ");
}
function put() {
  var list = fs.readFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    "utf-8"
  );
  var user = a.question("Enter your user name ");
  var str = JSON.parse(list);
  for (i of str) {
    if (i["U_name"] === user) {
      var name = a.question("Enter your updated first name ");
      var s_name = a.question("Enter your updated last name ");
      i["F_name"] = name;
      i["L_name"] = s_name;
      console.log("your updated data is", i);
    }
  }
  var asd = JSON.stringify(str);
  fs.writeFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    asd
  );
}
function get() {
  var file = fs.readFileSync(
    "/home/navgurukul/Desktop/amol/node/node_cruddata.json",
    "utf-8"
  );
  var list = JSON.parse(file);
  const u_name = a.question("Enter your register user name ");
  for (i of list) {
    if (i["U_name"] === u_name) {
      console.log("This is your data:-", i);
    }
  }
}
var iput = a.question(
  "Enter which operation do you want:-\n1.POST ghel\n2.GET\n3.PUT update\n4.DELETE "
);
if (iput == "post") {
  post();
} else if (iput == "get") {
  get();
} else if (iput == "put") {
  put();
} else if (iput == "delete") {
  delite();
} else {
  console.log("Plz... enter valid operation");
}
