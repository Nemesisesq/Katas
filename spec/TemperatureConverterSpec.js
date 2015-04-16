/**
 * Created by Nem on 4/15/15.
 */

describe('convertTemp', function(){
    it('converts one temperature to another', function(){
        expect(convertTemp(32, "F", "C")).toBe(0);
        expect(convertTemp(7.5, "Ro", "C")).toBe(0);
        expect(convertTemp(80, "Re", "C")).toBe(100);
        expect(convertTemp(33, "N", "C")).toBe(100);
        expect(convertTemp(0, "De", "C")).toBe(100);
        expect(convertTemp(-459.67, "R", "K")).toBe(0);
        expect(convertTemp(0, "K", "C")).toBe(273);

    })

});

describe('test base temp converter', function () {
    it('converts celcius to kelvin', function () {
        expect(base_temp(0, "C")).toBe(273);

    });
});
