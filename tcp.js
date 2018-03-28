var net=require('net');
var server=net.createServer((socket)=>
    {
        var datetime = new Date();
        var curMonth= datetime.getMonth() + 1;
        var curDate=datetime.getDate();
        if(curMonth.toString().length==1) curMonth='0'+curMonth.toString();
        if(curDate.toString().length==1) curDate='0'+curDate.toString();
        var curYear=datetime.getFullYear();
        var curhHour=datetime.getHours();
        var curMinute=datetime.getMinutes();
        socket.write(curYear+'-'+curMonth+'-'+curDate+' '+curhHour+':'+curMinute+'\n');
        socket.end()
    });
server.listen(process.argv[2]);
