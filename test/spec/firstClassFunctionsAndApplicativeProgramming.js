/**
 * Created by jeppe on 25/04/16.
 */
(function () {

  'use strict';


  describe('Chapter 2: First-Class Functions and Applicative Programming', function () {

    function existy(x) { return x != null; }
    function truthy(x) { return (x !== false) && existy(x);}


    describe('Collection-Centric Programming',function() {

      describe('map & reduce ', function() {


          it("should be possible to convert object to array",function() {

            var arr =  _.map({a: 1, b: 2}, _.identity);
            expect(arr.length).to.equal(2);
            expect(arr[0]).to.equal(1);
            expect(arr[1]).to.equal(2);

          });

          it("should be possible to calculate average with reduce ",function() {

              var nums = [100,2,25];
              function div(x,y) { return x/y };
              var e = _.reduce(nums, div);
              expect(e).to.equal(2)

          });


      });


      describe("use allOf & AnyOf ",function() {



        var truuee = function() {
          return true;
        };


        var faaaalse = function() {
          return false;
        };


        describe("allOf", function() {

          function allOf() {

            return _.reduceRight(arguments, function(truth, f) {
              return truth && f(); }, true);
          }

          it("should return true for functions returns true",function() {

            expect(allOf(truuee,truuee)).to.be.true;

          });

          it("should return false if one function returns false",function() {

            expect(allOf(truuee,faaaalse)).to.be.false;

          });

        });


        describe("anyOf", function() {

          function anyOf(/* funs */) {
            return _.reduceRight(arguments, function(truth, f) {
              return truth || f(); }, false);
          }

          it("should return true for functions returns true",function() {

            expect(anyOf(truuee,truuee)).to.be.true;

          });

          it("should return false if one function returns false",function() {

            expect(anyOf(truuee,faaaalse)).to.be.true;

          });

        });


      });


      describe("find and search in collection",function() {


        it("should be possible to find a number in a collection",function() {


          expect(_.find(['a', 'b', 3, 'd'], _.isNumber)).to.equal(3);

        });

        it("should be possible to filter out numbers from collection",function() {

          expect(_.reject(['a', 'b', 3, 'd'], _.isNumber).length).to.equal(3);

        });

        it("should be good to mention other predicates .isEqual, _.isEmpty, _.isElement, _.isArray, _.isObject, _.isArguments, _.isFunction, _.isString, _.isNumber, _.isFinite, _.isBoolean, _.isDate, _.isRegExp, _.isNaN, _.isNull,",function() {

        });

      });

      describe("reverse a predicate",function() {

        function complement(pred) { return function() {
          return !pred.apply(null, _.toArray(arguments)); };
        }


        it("complement should reverse isNumber predicate",function() {

          expect(_.filter(['a', 'b', 3, 'd'], complement(_.isNumber)).length).to.equal(3);

        })

      });


      describe("sortBy, groupBy, and countBy",function() {


            describe("sortBy",function() {

                  it("should be possible to sort an array of people by age",function() {

                      var people = [{name: "Rick", age: 30}, {name: "Jaka", age: 24}];
                      var sortedArrayOfPeople = _.sortBy(people, function(p) { return p.age });

                      expect(sortedArrayOfPeople[0].name).to.equal("Jaka");
                      expect(sortedArrayOfPeople[1].name).to.equal("Rick");


                  });

            });


            describe("groupBy",function() {

                  it("should be possible to group an array by obj.value",function() {

                      var unsorted = [{title: "Sabbath Bloody Sabbath", genre: "Metal"}, {title: "Scientist", genre: "Dub"},
                      {title: "Undertow", genre: "Metal"}];

                      var albums =  _.groupBy(unsorted, function(a) { return a.genre });

                      expect(albums.Metal.length).to.equal(2);
                      expect(albums.Dub.length).to.equal(1);


                  });



            });


            describe("countBy",function() {


            });

      });

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
