const paymentSuccessful = true;
const marks = 70;

function enroll(callback) {
    console.log('Course enrollment is in progress');
    setTimeout(function () {
        if(paymentSuccessful){
            callback();
        }
        else{
            console.log('Payment failed');
        }
    },2000);
}

function progress(callback) {
    console.log('Course on progress...');
    setTimeout(function () {
        if (marks>=80) {
            callback();
            
        }
        else{
            console.log('Sorry!you couldnot get enough marks');
        }
        
    },3000);
}

function getCertificate() {
    console.log('Preparing your certificate');
    
    setTimeout(function () {
        console.log('Congrats!you got the certificate');
        
    },1000);
}

enroll(function () {
    progress(getCertificate);
    
});