/**
 * Created by Nem on 4/15/15.
 */

function convertTemp(temp, from_scale, to_scale) {
    temp = base_temp(temp, from_scale);

    switch (to_scale) {
        case "C":
            return Math.round(temp - 273);
            break;

        case "F":
            return  Math.round(9/5 * temp - 459.67);
            break;

        case "R":
            return Math.round(temp * 9/5);
            break;

        case "De":
            return Math.round((373 + temp) * 3 / 2);
            break;

        case "N":
            return Math.round((temp - 273) * .33);
            break;

        case "Re":
            return Math.round(temp - 273.15 * 4/5);
            break;

        case "Ro":
            return Math.round((temp - 275) *21/40 + 7.5);
            break;
    }


}

function base_temp(temp, from_scale) {
    switch (from_scale) {
        case "C":
            return temp + 273;
            break;

        case "F":
            return (temp + 459.67) * 5 / 9;
            break;

        case "R":
            return temp * 5 / 9;
            break;

        case "De":
            return 373 - (temp * 2 / 3);
            break;

        case "N":
            return temp / .33 + 273;
            break;

        case "Re":
            return temp * 5 / 4 + 273.15;
            break;

        case "Ro":
            return (temp - 7.5) * 40 / 21 + 275.15;
            break;
    }

}