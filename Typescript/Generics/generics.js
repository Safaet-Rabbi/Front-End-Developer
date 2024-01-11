"use strict";
const printUserInfo = (userId, userAge) => {
    console.log(`ID: ${userId},Age:${userAge}`);
};
printUserInfo("101", 21);
printUserInfo("101", "21");
printUserInfo(101, "21");
printUserInfo(101, 21);
