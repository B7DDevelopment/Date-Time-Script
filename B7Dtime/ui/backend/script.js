$(".hud").hide();
// $(".b7d").hide();



window.addEventListener("message", function (event) {
    var v = event.data
    if (v.open == true || v.open === 'time') {
        $(".hud").show();
        $(".b7d").show();
        $(".b7d1").show();
        $(".b7d2").show();

        now = new Date();
        hours = String(now.getHours()).padStart(2, '0');
        minutes = String(now.getMinutes()).padStart(2, '0');
        seconds = String(now.getSeconds()).padStart(2, '0');
        timeString = hours + ':' + minutes + ':' + seconds;
   
        // Get day names and month names
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        dayOfWeek = dayNames[now.getDay()];
        day = String(now.getDate()).padStart(2, '0');
        monthName = monthNames[now.getMonth()];
        year = now.getFullYear();
        dateString = dayOfWeek + ' ' + monthName + ' ' + day + ' ' + timeString + ' ' + year;
   


        $('.b7d').html(dateString)

    }
});