
function testit() {
    //Rover.test=function() {return 'nono';};
    var Rover=global.Rover;
    var Alexa=global.Alexa;
    
    //Alexa.response=(Alexa.parameters[0] || 'nothing sent');
    //Alexa.response+=(Alexa.parameters[1] || 'nothing sent');    
    //Rover.message=function() { return 'sdf';};
    
    Rover.runRover('http://api.metro.net/agencies/lametro/routes/' + Alexa.parameters[0] + '/',function(res) {
        if (res.error || res.failure) {
            Alexa.response=res.error || res.failure;
        }
        else {
            Alexa.response=res.display_name;
        }
        global.finished();
    }
    );

}

function test2() {
    return 'test2 was here';
}


testit();