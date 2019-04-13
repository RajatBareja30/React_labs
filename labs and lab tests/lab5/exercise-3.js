


setInterval(function(){


    process.stdin.resume();
    
    process.on('SIGINT', function (signal) {
        signal = process.uptime();
        console.log(`Process uptime on signal interrupt ${signal}`);
      });

    function handle(signal) {
        signal = process.uptime();
        console.log(`Process uptime on exit ${signal}`);
        process.exit();
        }


    process.on('SIGINT', handle);      
    

    
    
} ,1000);

