"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Red;
// enum example
// helps us to store constants
// numeric enum
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 0] = "ReadData";
    // ReadData = 2,
    UserRequest[UserRequest["SaveData"] = 1] = "SaveData";
    UserRequest[UserRequest["UpdateData"] = 2] = "UpdateData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
// string enum
(function (UserRequest) {
    UserRequest["readData"] = "READ_DATA";
    // ReadData = 2,
    UserRequest["saveData"] = "SAVE_DATA";
    UserRequest["updateData"] = "UPDATE_DATA";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log(UserRequest['UpdateData']);
// Heterogeneous enum
var User;
(function (User) {
    User[User["id"] = 101] = "id";
    User["name"] = "Safaet";
})(User || (User = {}));
console.log(User.name);
