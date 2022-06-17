const Point = function(x, y) {
    this.x = x;
    this.y = y;
  };
  Point.prototype.getX = function() {
    return this.x;
  };
  Point.prototype.getY = function() {
    return this.y;
  };
  
  function getClosestPair(pointsArr) {
      if (arguments.length !== 1) throw Error('Error. Expected exactly one argument; found ', arguments.length,'.');
      if(!Array.isArray(pointsArr)) throw Error('Error. pointsArr should be an array.');
      if(pointsArr.some(elem =>!( elem instanceof Point))) throw Error('Error. pointsArr should be an array of Point.');
      let obj = _closestPair(pointsArr);
      // to make it a little bit more efficient, in _closestPair and in _bruteForceClosestPair
      // I use the manhattan distance. Only at the end calculate the euclidean distance
      obj.distance = _euclideandDistance(...obj.pair);
      return obj;

      function _bruteForceClosestPair(pointsArr) {
        if (pointsArr.length < 2) return Infinity;
        let minDistance = Infinity;
        let minPoints;
        for (let i = 0; i < pointsArr.length; i++)
          for (let j = i+1; j < pointsArr.length; j++) {
            let md = _manhattanDistance(pointsArr[i], pointsArr[j]);
            if (md < minDistance) {
              minDistance = md;
              minPoints = [pointsArr[i],pointsArr[j]];
            }
          }
        return {
          distance: minDistance,
          pair: minPoints
        };
      }

      function _manhattanDistance(p1,p2) {
        return Math.abs(p1.getX() - p2.getX()) + Math.abs(p1.getY() - p2.getY());
      }

      function _euclideandDistance(p1,p2) {
        return Math.sqrt((p1.getX() - p2.getX())**2 + (p1.getY() - p2.getY())**2);
      }

      function _closestPair(pointsArr) {
        if (pointsArr.length <= 3) return _bruteForceClosestPair(pointsArr);
        let xP = Array.from(pointsArr).sort((A,B) => A.getX() - B.getX());
        let yP = Array.from(pointsArr).sort((A,B) => A.getY() - B.getY());
        let n = Math.round(xP.length/2);
        let xL = xP.slice(0,n);
        let xR = xP.slice(n);
        let xm = xP[n].getX();
        let yL = yP.filter(elem => elem.getX() <= xm);
        let yR = yP.filter(elem => elem.getX() > xm);
        let resultL = _closestPair(xL);
        let resultR = _closestPair(xR);
        let resultMin = resultR;
        if (resultL.distance < resultR.distance) resultMin = resultL;
        let yS = yP.filter(elem => Math.abs(xm - elem.getX())< resultMin.distance);
        let nS = yS.length;
        let closest =resultMin;
        for (let i = 0; i <= nS - 1; i++) {
          let k = i + 1;
          while (k < nS && yS[k].getY() - yS[i].getY() < resultMin.distance) {
            let md = _manhattanDistance(yS[k],yS[i]);
            if (md < resultMin.distance) {
              resultMin.distance = md;
              resultMin.pair = [yS[k], yS[i]];
            } 
            k++;
          }
        }
        return resultMin;
      }
  }
