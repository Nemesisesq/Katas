/**
 * Created by manifest on 4/13/15.
 */
describe('RemoveZeros', function () {
    it('should remove the zero\'s and put them at the end of the array', function () {
        var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
            solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

        expect(JSON.stringify(removeZeros(input))).toEqual(JSON.stringify(solution));
    });
});