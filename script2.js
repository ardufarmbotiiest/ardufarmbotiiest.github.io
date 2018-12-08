channelID="647079";
var readKey="24U77OIZAISOMV9G";
var dataField1;
var dataField2;
var dataField3;
var dataField4;
function gettemparature()
{
           
        $.getJSON('https://api.thingspeak.com/channels/'+channelID+'/field/3/last.json?apikey='+readKey+'&callback=?', function(data) {          
            dataField1 = data.field3;
            if (dataField1) {
                
            }          
        });
        document.getElementById("tempval").innerHTML=dataField1+"℃";
        console.log(dataField1);
}
function gethumidity()
{
    $.getJSON('https://api.thingspeak.com/channels/'+channelID+'/field/1/last.json?apikey='+readKey+'&callback=?', function(data) {          
        dataField2 = data.field1;
        if (dataField2) {
            
        }      
    });
    document.getElementById("humval").innerHTML=dataField2+"%";    
}
function changecolour(){
    $.getJSON('https://api.thingspeak.com/channels/'+channelID+'/field/2/last.json?apikey='+readKey+'&callback=?', function(data) {          
        dataField3 = data.field2;
        if (dataField3=="0") {
            document.getElementById("on").style.backgroundColor = "green";
            document.getElementById("off").style.backgroundColor="";
        }      
        else{
               document.getElementById("off").style.backgroundColor="red";
               document.getElementById("on").style.backgroundColor="";
        }
    });

}
function changecolour2(){
    $.getJSON('https://api.thingspeak.com/channels/'+channelID+'/field/2/last.json?apikey='+readKey+'&callback=?', function(data) {          
        dataField4 = data.field2;
        if (dataField4=="1") {
            document.getElementById("on1").style.backgroundColor = "green";
            
        }      
        else{
               document.getElementById("off1").style.backgroundColor="red";
        }
    });
}