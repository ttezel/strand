var assert  = require('assert'),
    strand = require('../lib/index')

describe('editDistance', function () {
    it('between `intention` and `execution` is 5', function (done) {
      var x = 'execution'
      var y = 'intention'

      assert.equal(5, strand.editDistance(x,y))

      done()
    })

    it('between `kitten` and `sitten` is 2', function (done) {
      var x = 'kitten'
      var y = 'sitten'

      assert.equal(1, strand.editDistance(x,y))

      done()
    })

    it('between `kitten` and `sitting` is 3', function (done) {
      var x = 'kitten'
      var y = 'sitting'

      assert.equal(3, strand.editDistance(x,y))

      done()
    })
})

describe('sequenceMatch', function () {
    it('between `x` and `y` is correct', function (done) {
        var x = 'execution'
        var y = 'intention'

        assert.equal('tion', strand.sequenceMatch(x,y))

        done()
    })
})