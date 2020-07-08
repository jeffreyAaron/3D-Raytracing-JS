var node0 = [-100, -100, -100];
var node1 = [-100, -100, 100];
var node2 = [-100, 100, -100];
var node3 = [-100, 100, 100];
var node4 = [100, -100, -100];
var node5 = [100, -100, 100];
var node6 = [100, 100, -100];
var node7 = [100, 100, 100];
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

var edge0 = [0, 1];
var edge1 = [1, 3];
var edge2 = [3, 2];
var edge3 = [2, 0];
var edge4 = [4, 5];
var edge5 = [5, 7];
var edge6 = [7, 6];
var edge7 = [6, 4];
var edge8 = [0, 4];
var edge9 = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];
var edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

var tri0 = [4, 0, 2];
var tri1 = [4, 2, 6];
var tri2 = [7, 4, 6];
var tri3 = [4, 7, 5];
var tri4 = [5, 7, 1];
var tri5 = [3, 1, 7];
var tri6 = [0, 4, 1];
var tri7 = [4, 5, 1];
var tri8 = [0, 3, 2];
var tri9 = [3, 0, 1];
var tri10 = [6, 7, 3];
var tri11 = [2, 3, 6];
var triangles = [tri0, tri1, tri2, tri3, tri4, tri5, tri6, tri7, tri8, tri9, tri10, tri11];

var backgroundColor = "white";
var nodeColor = "red";
var edgeColor = "black";
var nodeSize = 4;
var width = 500;
var height = 500;
var focalLength = 400;

var camera = [0,0,-550];
var rot = [0, 0, 0];
var lightVector = [0.5, -0.2, -2];




var subtractVectors = function (v1, v2) {
    return [[v1[0] - v2[0]],
    [v1[1] - v2[1]],
    [v1[2] - v2[2]]];
};

var normaliseVector = function (v) {
    var d = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    return [v[0] / d, v[1] / d, v[2] / d];
};

var normalOfPlane = function (a) {
    var n1 = nodes[a[0]];
    var n2 = nodes[a[1]];
    var n3 = nodes[a[2]];
    
    var v1 = subtractVectors(n1, n2);
    var v2 = subtractVectors(n1, n3);
    
    var v3 = [[v1[1] * v2[2] - v1[2] * v2[1]],
    [v1[2] * v2[0] - v1[0] * v2[2]],
    [v1[0] * v2[1] - v1[1] * v2[0]]];
    
    return v3;
};

var dotProduct = function (v1, v2) {
    // Assume everything has 3 dimensions
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
};

var lightVector = normaliseVector(lightVector);


window.onload = () =>{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    setInterval(() => {
        rotateY3D(0.01);
        //rotateX3D(0.01);
        //rotateZ3D(0.01);
        draw(ctx, backgroundColor);
        
        
    }, 16);
    
}
function avgZ (a){
    return (nodes[a[0]][2] + nodes[a[1]][2] + nodes[a[2]][2]) / 3;
}

function compareZ(a, b) {
    var AVGtriA = avgZ(a);
    var AVGtriB = avgZ(b);

    if (AVGtriA > AVGtriB) {
        return -1;
    }
    if (AVGtriA < AVGtriB) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function rotatePoints(node) {
    var cX = Math.cos(rot[0]);
    var cY = Math.cos(rot[1]);
    var cZ = Math.cos(rot[2]);
    var sX = Math.sin(rot[0]);
    var sY = Math.sin(rot[1]);
    var sZ = Math.sin(rot[2]);
    var eX = 0;
    var eY = 0;
    var eZ = focalLength;
    var x = node[0]-camera[0];
    var y = node[1] - camera[1];
    var z = node[2] - camera[2];
    var dX = cY*(sZ*y+cZ*x) - sY*z;
    var dY = sX*(cY*z + sY*(sZ*y + cZ*x)) + cX*(cZ*y-sZ*x)
    var dZ = cX*(cY * z + sY*(sZ * y + cZ * x)) - sX*(cZ * y - sZ * x)
    var point = [0,0]
    point[0] = (eZ / dZ) * dX + eX;
    point[1] = (eZ / dZ) * dY + eY;
    return point;

}

function draw(ctx, backgroundColor) {
    console.log("Render");
    // Clear the Screen
    ctx.translate(width / 2, height / 2);
    ctx.fillStyle = backgroundColor
    ctx.fillRect(-width/2, -height/2, width, height);

    // Draw Nodes 
    ctx.fillStyle=nodeColor;
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x0 = rotatePoints(node)[0];
        var y0 = rotatePoints(node)[1];
        ctx.beginPath();
        ctx.arc(x0, y0, nodeSize, 0, Math.PI*2);
        ctx.fillText(n, x0 + 10, y0)
        ctx.fill();
        
    }
    
    // Draw Edges
    ctx.strokeStyle = edgeColor;
    for (var e = 0; e < edges.length; e++) {
        var n0 = edges[e][0];
        var n1 = edges[e][1];
        var node0 = nodes[n0];
        var node1 = nodes[n1];
        if (node0[2]<= camera[2]){
            continue;
        }
        if (node1[2] <= camera[2]) {
            continue;
        }
        ctx.beginPath();
        ctx.moveTo(rotatePoints(node0)[0], rotatePoints(node0)[1]);
        ctx.lineTo(rotatePoints(node1)[0], rotatePoints(node1)[1]);
        ctx.stroke();
    }

    // Draw Faces
    triangles.sort(compareZ);
    //triangles.reverse();
    for (var e = 0; e < triangles.length; e++) {
        var n0 = nodes[triangles[e][0]];
        var n1 = nodes[triangles[e][1]];
        var n2 = nodes[triangles[e][2]];
        
        var normalVector = normaliseVector(normalOfPlane(triangles[e]));
        if (normalVector[2] >= 0){
            continue;
        }
        var lightIntensity = Math.abs(dotProduct(normalVector, lightVector))*180;
        console.log(lightIntensity);

        var light = lightIntensity / 180;

        var r = 10 * light;
        var g = 120 * light;
        var b = 255 * light;
        ctx.fillStyle = 'rgb('+r+','+g+','+b+')';

        ctx.beginPath();
        ctx.moveTo(rotatePoints(n0)[0], rotatePoints(n0)[1]);
        ctx.lineTo(rotatePoints(n1)[0], rotatePoints(n1)[1]);
        ctx.lineTo(rotatePoints(n2)[0], rotatePoints(n2)[1]);
        ctx.closePath();
        ctx.fill();
    }

    

    ctx.setTransform(1, 0, 0, 1, 0, 0);
};

var rotateZ3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cosTheta - y * sinTheta;
        node[1] = y * cosTheta + x * sinTheta;
    }
};

var rotateX3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var y = node[1];
        var z = node[2];
        node[1] = y * cosTheta - z * sinTheta;
        node[2] = z * cosTheta + y * sinTheta;
    }
};

var rotateY3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var z = node[2];
        node[0] = x * cosTheta + z * sinTheta;
        node[2] = z * cosTheta - x * sinTheta;
    }
};

