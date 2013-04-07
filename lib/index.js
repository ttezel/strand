/**
 * Determines the largest sequence of sequential characters
 * in two strings
 * 
 * @param  {String} x   first string
 * @param  {String} y   second string
 * @return {String}     string representing the match
 */
exports.sequenceMatch = function (x, y) {
    
}

/**
 * Determines the minimum Levenshtein (edit) distance between two strings
 * 
 * cost: 1 for deletions, insertions, or subsitutions
 *
 * @param  {String} x   first string
 * @param  {String} y   second string
 * @return {Number}     levenshtein distance
 */
exports.editDistance = function (x, y) {
  //our distance matrix
  var dist = []

  var xlen = x.length
    , ylen = y.length

  //if one word is empty, the distance is the length of the other word
  if (!xlen) return ylen
  if (!ylen) return xlen

  /*
      initialize our distance matrix (first row and column)
   */

  //generate the first column of the distance matrix
  //matrix[i][0] = i ; the cost of deleting i characters
  for (var i = 0; i <= xlen; i++) {
    dist[ i ] = [ i ]
  }

  //generate the first row of the distance matrix
  //matrix[0][j] = j ; the cost of deleting j characters
  for (var j = 0; j <= ylen; j++) {
    dist[ 0 ][ j ] = j
  }

  /*
      generate the rest of the distance matrix
      using the recurrence relation
   */ 
  
  //iterate thru string x (rows)
  for (var i = 1; i <= xlen; i++) {
    //iterate thru string y (columns)
    for (var j = 1; j <= ylen; j++) {

      var deletion = dist[i-1][j] + 1
      var insertion = dist[i][j-1] + 1

      //substitution cost is:
      // -> 0 if we have a character match in x[i-1] and y[j-1]
      // -> 1 if we don't
      var substitution = dist[i-1][j-1] + (x[i-1] === y[j-1] ? 0: 1)

      //levenshtein distance of this cell is
      //the minimum cost of the 3 operation choices
      dist[i][j] = Math.min(deletion, insertion, substitution)
    }
  }

  //levenshtein distance is last cell in the distance matrix
  return dist[xlen][ylen]
}