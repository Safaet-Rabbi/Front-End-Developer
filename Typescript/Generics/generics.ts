const printUserInfo = <X,Y> (userId:X,userAge:Y)=>{
    console.log(`ID: ${userId},Age:${userAge}`);
    
}
printUserInfo("101",21);
printUserInfo("101","21");
printUserInfo(101,"21");
printUserInfo(101,21);