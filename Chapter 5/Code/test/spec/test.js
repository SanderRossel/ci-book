// Intentionally outside the scope of the tests...
var math = {
    add: function (a, b) {
        return a + b;
    }
};

(function () {
    'use strict';

    describe('sample tests', function () {
        describe('our first Jasmine tests', function () {
            it('should succeed', function () {
                expect(true).toBe(true);
            });
            it('should fail', function () {
                expect(false).toBe(true);
            });
            it('should be the same object', function () {
                var o1 = {
                firstName: 'Sander',
                lastName: 'Rossel'               
                };
                var o2 = {
                firstName: 'Sander',
                lastName: 'Rossel'
                };
                expect(o1).toEqual(o2);
            });
            it('should be the same array', function () {
                var arr1 = ['Hello', {}, 1, true];
                var arr2 = ['Hello', {}, 1, true];
                expect(arr1).toEqual(arr2);
            });
        });
        
        describe('setup and teardown tests', function () {
            var something;
            
            beforeEach(function () {
                something = 'Some value';
            });
            
            afterEach(function () {
                something = null;
            });
            
            it('should do stuff with something', function () {
                expect(something).toBe('Some value');
            });
        });
        
        describe('spy tests', function () {
            beforeEach(function () {
                spyOn(math, 'add').and.callThrough();                
            });
            
            it('should add 1 and 2 and call on the add function', function () {
                expect(math.add(1, 2)).toBe(3);
                expect(math.add).toHaveBeenCalled();
            });
        });
    });
})();
