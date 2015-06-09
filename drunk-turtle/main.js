var TurtleUtil = {
                  
    randInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    generateRandomPath: function(){
        var directions = TurtleUtil.getValidDirections();
        var res = [];
        var str = "";
        
        for(var i = 0; i < TurtleUtil.randInt(25, 100); i++){
            str = directions[ TurtleUtil.randInt(0, directions.length - 1) ] + " " + TurtleUtil.randInt(5, 25);
            res.push( str );
        }
        
        return res.join("\n");        
    },
    
    processTurtle: function(input){   
        var parsedMovements = _(input).split("\n").map(TurtleUtil.processLine).value();        
        var maxDims = _.reduce(parsedMovements, TurtleUtil.reduceMovement, {l: 0, r: 0, u: 0, d: 0});        
        
        var gridSize = {w: _.max([maxDims.r, maxDims.l]) * 2, h: _.max([maxDims.u, maxDims.d]) * 2};
        var turtleGrid = TurtleUtil.initializeArray(gridSize.w, gridSize.h);
        
        TurtleUtil.drawTurtle(gridSize, parsedMovements);
    },
    
    drawTurtle: function(gridSize, parsedMovements){
        var canvas = document.getElementById('turtleGrid');
        var ctx = canvas.getContext("2d");
        
        canvas.width = $("#turtleGrid").parent("div:first").width();
        canvas.height = $("#turtleGrid").parent("div:first").height() - 20;
        
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#cccccc";
        ctx.fill(); 
        ctx.closePath();
        
        var gridW = gridSize.w, gridH = gridSize.h;
        var canvasW = canvas.width - 10, canvasH = canvas.height - 10;
        
        var isFlipped = false;
        
        if( canvasW / canvasH > 1 && gridSize.w / gridSize.h > 1 ){
            canvasH = Math.floor( (gridH * canvasW) / gridW );            
        }else if( canvasW / canvasH > 1 && gridSize.w / gridSize.h < 1 ){           
            canvasW = Math.floor( (gridW * canvasH) / gridH );            
        }               
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.rect(5, 5, canvasW, canvasH);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.stroke();        
        
        console.log( gridSize );
        console.log( canvas.width + ", " + canvas.height );
        console.log( canvasW + ", " + canvasH );
    },
    
    initializeArray: function(w, h){
      return _(_.range(0, h)).map(function(i){return new Array(w);}).value();      
    },
    
    reduceMovement: function(result, mv) {        
        var k = {"LEFT": "l", "RIGHT": "r", "UP": "u", "DOWN": "d"};
        
        result[ k[mv._direction] ] += mv._length;        
        return result;
    },
    
    processLine: function(line){        
        var components = line.split(" ");
        
        if(components.length != 2 || _.indexOf(TurtleUtil.getValidDirections(), components[0]) == -1){
            return null;
        }
        
        return new TurtleUtil.Move(components[0], parseInt(components[1]));
    },
    
    getValidDirections: function(){
        return ["LEFT", "RIGHT", "UP", "DOWN"];
    },
    
    Move: function(direction, length){
        this._length = length;
        this._direction = direction;
    },    
};

TurtleUtil.Move.prototype.move = function(){ 
        
};

$(document).ready(function(){
    
    $("[data-provide='turtleForm'] [data-provide='generate']").click(function(e){                
        var type = $(this).attr("href").replace("#", "");
        var fns = {random: TurtleUtil.generateRandomPath};
            
        var generatedDirection = fns[type].call();
        $("[data-provide='turtleForm'] [name='turtleMovement']").val(generatedDirection);
        
        e.preventDefault();
    });
    
    $("[data-provide='turtleForm'] [data-provide='process']").click(function(e){        
        var input = $("[data-provide='turtleForm'] [name='turtleMovement']").val();
        TurtleUtil.processTurtle(input);        
        return false;
    });
    
});