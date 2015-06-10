var TurtleUtil = {
                  
    randInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    generateRandomPath: function(){
        var directions = TurtleUtil.getValidDirections();
        var res = [];
        var str = "";
        
        for(var i = 0; i < TurtleUtil.randInt(400, 500); i++){
            str = directions[ TurtleUtil.randInt(0, directions.length - 1) ] + " " + TurtleUtil.randInt(5, 25);
            res.push( str );
        }
        
        return res.join("\n");        
    },
    
    processTurtle: function(input){   
        var parsedMovements = _(input).split("\n").map(TurtleUtil.processLine).value();
        
        var pointList = _.reduce(parsedMovements, function(list, el, index){
            var lastPoint = list[index];
            var newPoint = el.move(lastPoint);           
            list.push(newPoint);
            return list;
         }, [{x: 0, y: 0}]);
        
        var maxX = _.max(pointList, function(e){return Math.abs(e.x);});
        var maxY = _.max(pointList, function(e){return Math.abs(e.y);});                              
        var maxSize = _.max([maxX.x, maxY.y]) * 2;
        
        var gridSize = {w: maxSize, h: maxSize};
        var turtleGrid = TurtleUtil.initializeArray(gridSize.w, gridSize.h);
        
        TurtleUtil.drawTurtle(gridSize, parsedMovements);
    },
    
    drawTurtle: function(gridSize, parsedMovements){
        var canvas = document.getElementById('turtleGrid');
        var ctx = canvas.getContext("2d");
        
        canvas.width = $("#turtleGrid").parent("div:first").width();
        canvas.height = $("#turtleGrid").parent("div:first").height() - 20;
                
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#cccccc";
        ctx.fill(); 
        ctx.closePath();
        
        var gridW = gridSize.w, gridH = gridSize.h;
        var canvasW = canvas.width - 10, canvasH = canvas.height - 10;
        
        var isFlipped = false;
        
        if( canvasW / canvasH >= gridSize.w / gridSize.h ){
            canvasW = Math.floor( (gridW * canvasH) / gridH );
        }else if( canvasW / canvasH < gridSize.w / gridSize.h ){                       
            canvasH = Math.floor( (gridH * canvasW) / gridW );
        }               
        
        canvasW = canvas.width - 10;
        canvasH = canvas.height - 10;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.rect(5, 5, canvasW, canvasH);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.stroke();    
        ctx.closePath();        
        
        // Use an off-screen canvas at 1-1 size and then copy it in
        
        var lineToList = _.reduce(parsedMovements, function(list, el, index){
           var lastPoint = list[index];
           var newPoint = el.move(lastPoint);           
           list.push(newPoint);
           return list;
        }, [ {x: Math.floor(gridSize.w / 2), y: Math.floor(gridSize.h / 2), } ]);
        
        ctx.scale(canvasW / gridSize.w, canvasH / gridSize.h);
                
        ctx.beginPath();
        ctx.strokeStyle = "#FF0000";
        ctx.moveTo(gridSize.w / 2, gridSize.h / 2);
        ctx.lineWidth = 1;                          

        _.forEach(lineToList, function(el){ ctx.lineTo(el.x, el.y); });
        
        ctx.stroke();    
        ctx.closePath();        
        
    },
    
    initializeArray: function(w, h){
      return _(_.range(0, h)).map(function(i){return new Array(w);}).value();      
    },
    
    reduceMovement: function(result, mv) {        
        var k = {"LEFT": "l", "RIGHT": "l", "UP": "u", "DOWN": "u"};
        var len = (mv._direction == "DOWN" || mv._direction == "LEFT") ? mv._length * -1 : mv._length;

        
        result[k[mv._direction]] = Math.abs(result[k[mv._direction]] + len) > Math.abs(result[k[mv._direction]]) 
                                    ? result[k[mv._direction]] + len : result[k[mv._direction]] + len;
        
        
        // result[k[mv._direction]] += len;
        
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

TurtleUtil.Move.prototype.move = function(px){
    
    var point = _.extend({}, px);
    
    switch( this._direction ){
        case "LEFT": point.x -= this._length; break;
        case "RIGHT": point.x += this._length; break;
        case "UP": point.y += this._length; break;
        case "DOWN": point.y -= this._length; break;        
        default: break;
    }
    
    return point;
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