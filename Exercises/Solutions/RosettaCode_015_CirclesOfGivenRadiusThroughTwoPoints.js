function getCircles(...args) {
    // validation of arguments
    // returns true if A is a 2D point
    function is2DPoint(A) {
        return Array.isArray(A) && A.length === 2 && !isNaN(A[0]) && !isNaN(A[1]);
    }
    if (args.length !== 3) throw Error('Error. Expected 3 arguments, got ', args.length, '.');
    if (!is2DPoint(args[0])) throw Error('Error. First argument should be a 2D point.');
    if (!is2DPoint(args[1])) throw Error('Error. Second argument should be a 2D point.');
    if (isNaN(args[2]) || args[2]< 0) throw Error('Error. Radius should be a positive number or zero.');
    
    // calculates Euclidean distance between two 2D points
    function distance(p1,p2) {
        return Math.sqrt((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2);
    }
    // calculates the mid point between p1 and p2
    // that is, the point that lies in the segment joining p1 and p2 equidistant to them
    function midPoint(p1,p2) {
        return [((p1[0]+p2[0]) / 2),((p1[1]+p2[1]) / 2)];
    }

    // return a vecotr that is the normalization of vector v
    function normalize(v) {
        // calculaets the norm of the vector v
        function norm(v) {
            return Math.sqrt(v[0]**2 + v[1]**2);
        }
        
        let n = norm(v);
        return [v[0] / n, v[1]/ n];
    }

    // rounds the coordinates to 4 digits
    function to4Digits(p) {
        return [Math.round(p[0]*10000)/10000,Math.round(p[1]*10000)/10000];
//        return [p[0].toFixed(4),p[1].toFixed(4)];  toFixed puts always the decimals e.i. 1.0000 while using round does not
    }

    if (args[2] == 0) return 'Radius Zero';
    let d = distance(args[0],args[1]);
    if (d == 0) return 'Coincident point. Infinite solutions';
    if (d > 2 * args[2]) return 'No intersection. Points further apart than circle diameter';
    if (d === 2 * args[2]) return midPoint(args[0],args[1]);

    // and now a little bit of Euclidean geometry
    let p1 = args[0];
    let p2 = args[1];
    let radius = args[2];
    let p = midPoint(p1,p2);
    let lambda = Math.sqrt(radius**2 - (d/2)**2);
    let [a,b]= [p2[0]-p1[0],p2[1]-p1[1]];
    let v = normalize([-b,a]);
    // sol 1 = p + lambda * v
    // sol 2 = p - lambda * v
    let sol1 = [p[0] + lambda * v[0], p[1] + lambda * v[1]];
    let sol2 = [p[0] - lambda * v[0], p[1] - lambda * v[1]]; 
    return [to4Digits(sol1), to4Digits(sol2)];
}

//console.log(getCircles([3, 1], [3, 7], 5));
console.log(getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0));
console.log(getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0));
console.log(getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0));
console.log(getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5));
console.log(getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0));