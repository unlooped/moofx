describe('requestFrame/cancelFrame', function (){

    it('should get the same time argument', function(done){

        var time = null
        var length = 0

        var next = function(now){
            length++
            if (time == null) time = now
            if (time != now) isSuccess = false
            if (length == 4) done()
        }

        moofx.requestFrame(next)
        moofx.requestFrame(next)
        moofx.requestFrame(next)
        moofx.requestFrame(next)
    })

    it('should only cancel one callback', function(done){

        var iter = 0

        var next = function(){
            ++iter
        }

        moofx.requestFrame(next)
        moofx.requestFrame(next)
        moofx.requestFrame(next)
        moofx.requestFrame(next)

        moofx.cancelFrame(next)

        moofx.requestFrame(function(){
            expect(iter).to.be(3)
            done()
        })


    })

    it('should cancel the requestFrame(s)', function(done){

        var isSuccess = true

        var next = function(){
            isSuccess = false
        }

        var next2 = function(){
            isSuccess = false
        }

        moofx.requestFrame(next)
        moofx.requestFrame(next)
        moofx.requestFrame(next2)
        moofx.requestFrame(next2)

        moofx.cancelFrame(next)
        moofx.cancelFrame(next)
        moofx.cancelFrame(next2)
        moofx.cancelFrame(next2)


        moofx.requestFrame(function(){
            expect(isSuccess).to.be(true)
            done()
        })


    })

    it('should not have a race condition :~)', function(done){

        var nextCalled = false
        var next2Called = false

        var next = function(now){
            nextCalled = true
            moofx.cancelFrame(next2)
        }

        var next2 = function(now){
            next2Called = true
        }

        var next3 = function(){
            expect(nextCalled).to.be(true)
            expect(next2Called).to.be(false)
            done()
        }

        moofx.requestFrame(next)
        moofx.requestFrame(next2)
        moofx.requestFrame(next3)

    })


})
