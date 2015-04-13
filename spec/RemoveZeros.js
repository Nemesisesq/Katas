/**
 * Created by manifest on 4/13/15.
 */
function removeZeros(array) {
    var string = "",
        count = 0;

    for (var t = 0; t < array.length; t++) {

        var g = array[t];
        if (g !== 0) {
            if (string[string.length - 1] !== g) {
                string += g + ',';
            }
        }else {
            count ++;
        }
    }

    var arrayCount = 0;

    var stagedNumber = "";
    for(var q = 0; q < string.length; q++){
        if(string[q] !== ','){

            stagedNumber += string[q];


        } else if(string[q] === ','){
            if(/\./.test(stagedNumber)){
                array[arrayCount] = parseFloat(stagedNumber);
            } else {
                array[arrayCount] = parseInt(stagedNumber);
            }

            arrayCount++;
            stagedNumber = "";

        }
    }




    for (var i = 0; i < count; i++) {
        array[arrayCount+i] = 0;
    }
    return array;
}