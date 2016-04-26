/**
 * Created by jeppe on 25/04/16.
 */
(function () {
  'use strict';


  describe('Existly', function () {

    
    it("should return false for null",function() {

        expect(existy(null)).to.be.false;

    });

    it("should return false for undefined",function() {

      expect(existy(undefined)).to.be.false;

    });


    it("should return true for 0",function() {

      expect(existy(0)).to.be.true;

    });



  });


  describe('Truthy', function () {


      it('should return false for false', function () {

        expect(truthy(false)).to.be.false;


      });

      it('should return false for undefined', function () {

        expect(truthy(undefined)).to.be.false;


      });


      it('should return true for true', function () {

          expect(truthy(true)).to.be.true;


      });

      it('should return true for object', function () {

          expect(truthy({
            "key":"value"
          })).to.be.true;


      });

      it('should return true for string', function () {

          expect(truthy("key")).to.be.true;

      });

      it('should return true for function', function () {

        expect(truthy(function() {})).to.be.true;

      });

      it("should return false false true true false for mapping over array",function() {

        var arr = [null, undefined, 1, 2, false].map(truthy);
        expect(arr[0]).to.be.false;
        expect(arr[1]).to.be.false;
        expect(arr[2]).to.be.true;
        expect(arr[3]).to.be.true;
        expect(arr[4]).to.be.false;


      });

  });
})();
