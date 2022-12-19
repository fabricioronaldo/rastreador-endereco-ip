/*API LeafletJS*/
/*var map = L.map('map').setView([-22.88333, -43.10361], 13);
var marker = L.marker([-22.88333, -43.10361]).addTo(map);
var teste = "ssss";

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

/*API IP Geolocation API 

    var ip = "138.117.54.4";
    var api_key = "at_ycQeForGoXHTrty2ERE46JTJ2VmnP";
    
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
               $("footer").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           }
       });
    });*/
 

    
    var api_key = "at_ycQeForGoXHTrty2ERE46JTJ2VmnP";
    


    $(function () {
        $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
            );

        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: JSON.ip},
            success: function(data) {
              
                a = JSON.stringify(data,"",2);
                b = JSON.parse(a);
                console.log(a);
                console.log(b);
                $("#ip_return").append(b.ip);
                $("#location_return").append(b.location.region);
                $("#timezone_return").append(b.location.timezone);
                $("#isp_return").append(b.isp);
              
                map = L.map('map').setView([b.location.lat, b.location.lng], 13);
                marker = L.marker([b.location.lat, b.location.lng]).addTo(map);
              
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
            
                marker.bindPopup("<b>" + b.location.city + "</b><br>" + b.as.domain).openPopup();             

            }

        });
});



$("#button__search").click(function () {
    
    var search_ip = document.querySelector("#ip").value;
    

    
    if($.isNumeric(search_ip)) {
        
            $.ajax({
                url: "https://geo.ipify.org/api/v1",
                data: {apiKey: api_key, ipAddress: search_ip},
                success: function(data) {
                
                    a = JSON.stringify(data,"",2);
                    b = JSON.parse(a);
                    console.log(a);
                    console.log(b);
                    $("#ip_return").html(b.ip);
                    $("#location_return").html(b.location.region);
                    $("#timezone_return").html(b.location.timezone);
                    $("#isp_return").html(b.isp);
                    
                    map = map.off()
                    map = map.remove()
        
                    map = L.map('map').setView([b.location.lat, b.location.lng], 13);
                    marker = L.marker([b.location.lat, b.location.lng]).addTo(map);
                
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);
                
                    marker.bindPopup("<b>" + b.location.city + "</b><br>" + b.as.domain).openPopup();             
        
                }
        
            });
        
    } else {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, domain: search_ip},
            success: function(data) {
              
                a = JSON.stringify(data,"",2);
                b = JSON.parse(a);
                console.log(a);
                console.log(b);
                $("#ip_return").html(b.ip);
                $("#location_return").html(b.location.region);
                $("#timezone_return").html(b.location.timezone);
                $("#isp_return").html(b.isp);
                
                map = map.off()
                map = map.remove()
    
                map = L.map('map').setView([b.location.lat, b.location.lng], 13);
                marker = L.marker([b.location.lat, b.location.lng]).addTo(map);
              
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
            
                marker.bindPopup("<b>" + b.location.city + "</b><br>" + b.as.domain).openPopup();             
    
            }
    
        });
    }

});
            /*$("#ip_return").val('');
            $("#location_return").val('');
            $("#timezone_return").append('');
            $("#isp_return").append('');*/

    /*$.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: search_ip},
        success: function(data) {
          
            a = JSON.stringify(data,"",2);
            b = JSON.parse(a);
            console.log(a);
            console.log(b);
            $("#ip_return").html(b.ip);
            $("#location_return").html(b.location.region);
            $("#timezone_return").html(b.location.timezone);
            $("#isp_return").html(b.isp);
            
            map = map.off()
            map = map.remove()

            map = L.map('map').setView([b.location.lat, b.location.lng], 13);
            marker = L.marker([b.location.lat, b.location.lng]).addTo(map);
          
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        
            marker.bindPopup("<b>" + b.location.city + "</b><br>" + b.as.domain).openPopup();             

        }

    });
});

*/