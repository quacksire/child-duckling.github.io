var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
function format_time(s) {
  const dtFormat = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'medium',
    timeZone: 'America/Los_Angeles'
  });
  
  return dtFormat.format(new Date(s * 1e3));
}


var client = new HttpClient();
client.get(`http://api.511.org/transit/StopMonitoring?api_key=9c28322d-ed96-47b2-b775-115008fd1ac1&agency=SM&stopCode=315039`, function (response) {
    response = JSON.parse(response).ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit
    console.log(response)
    
    let nextBus = new Date(response[0].MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)
    const dtFormat = new Intl.DateTimeFormat('en-US');
    let nextBusETA = dtFormat.format(new Date(nextBus * 1e3));
    
    console.log(`Next Bus is @ ${nextBusETA}`)
})
