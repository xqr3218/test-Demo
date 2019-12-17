
const fs = require('fs');
// const states = require('./states.js');
// console.log(states)



fs.readFile('./countries-iso2.json', 'utf8', (err, data) => {
    if (err) throw err;
    const fommatData = JSON.parse(data);
    const countries = {
        "1": 1,
        "3": 1,
        "4": 1,
        "6": 1,
        "7": 1,
        "10": 1,
        "11": 1,
        "12": 1,
        "14": 1,
        "15": 1,
        "16": 1,
        "17": 1,
        "18": 1,
        "19": 1,
        "20": 1,
        "21": 1,
        "22": 1,
        "23": 1,
        "24": 1,
        "26": 1,
        "27": 1,
        "28": 1,
        "29": 1,
        "31": 1,
        "33": 1,
        "34": 1,
        "35": 1,
        "36": 1,
        "37": 1,
        "38": 1,
        "39": 1,
        "40": 1,
        "42": 1,
        "43": 1,
        "44": 1,
        "45": 1,
        "48": 1,
        "49": 1,
        "50": 1,
        "51": 1,
        "53": 1,
        "54": 1,
        "55": 1,
        "56": 1,
        "57": 1,
        "58": 1,
        "59": 1,
        "60": 1,
        "61": 1,
        "62": 1,
        "63": 1,
        "64": 1,
        "65": 1,
        "66": 1,
        "67": 1,
        "68": 1,
        "69": 1,
        "70": 1,
        "73": 1,
        "74": 1,
        "75": 1,
        "79": 1,
        "80": 1,
        "81": 1,
        "82": 1,
        "83": 1,
        "85": 1,
        "87": 1,
        "90": 1,
        "92": 1,
        "93": 1,
        "94": 1,
        "95": 1,
        "97": 1,
        "99": 1,
        "100": 1,
        "101": 1,
        "102": 1,
        "103": 1,
        "104": 1,
        "105": 1,
        "106": 1,
        "107": 1,
        "108": 1,
        "109": 1,
        "111": 1,
        "112": 1,
        "113": 1,
        "114": 1,
        "115": 1,
        "116": 1,
        "117": 1,
        "118": 1,
        "119": 1,
        "120": 1,
        "121": 1,
        "122": 1,
        "123": 1,
        "124": 1,
        "125": 1,
        "126": 1,
        "127": 1,
        "129": 1,
        "130": 1,
        "131": 1,
        "132": 1,
        "133": 1,
        "134": 1,
        "135": 1,
        "137": 1,
        "139": 1,
        "140": 1,
        "142": 1,
        "143": 1,
        "144": 1,
        "146": 1,
        "147": 1,
        "149": 1,
        "150": 1,
        "151": 1,
        "152": 1,
        "153": 1,
        "154": 1,
        "156": 1,
        "158": 1,
        "159": 1,
        "160": 1,
        "161": 1,
        "165": 1,
        "166": 1,
        "167": 1,
        "168": 1,
        "170": 1,
        "171": 1,
        "172": 1,
        "173": 1,
        "174": 1,
        "176": 1,
        "177": 1,
        "179": 1,
        "181": 1,
        "182": 1,
        "183": 1,
        "185": 1,
        "186": 1,
        "188": 1,
        "191": 1,
        "192": 1,
        "193": 1,
        "194": 1,
        "195": 1,
        "196": 1,
        "197": 1,
        "198": 1,
        "199": 1,
        "200": 1,
        "201": 1,
        "202": 1,
        "203": 1,
        "204": 1,
        "206": 1,
        "207": 1,
        "208": 1,
        "209": 1,
        "210": 1,
        "212": 1,
        "213": 1,
        "214": 1,
        "215": 1,
        "216": 1,
        "217": 1,
        "218": 1,
        "219": 1,
        "220": 1,
        "222": 1,
        "223": 1,
        "224": 1,
        "225": 1,
        "226": 1,
        "228": 1,
        "229": 1,
        "230": 1,
        "231": 1,
        "232": 1,
        "233": 1,
        "235": 1,
        "236": 1,
        "237": 1,
        "239": 1,
        "240": 1,
        "245": 1,
        "246": 1,
        "247": 1
    }
    const arr = [];
    fommatData.forEach((d, i) => {
        if(!countries[d.id]){
            arr.push(d)
        }
    });

    writeFiles('without-states.txt', arr)
});


fs.readFile('../states.json', 'utf8', (err, data) => {
    if (err) throw err;
    const fommatData = JSON.parse(data);

    const arr = fommatData.RECORDS;
    const statesObj = {};
    const contriesIdObj = {};
    arr.forEach((d, i) => {
        const countryISO2 = d.country_code;
        if( statesObj[countryISO2] ){
            statesObj[countryISO2].states.push({
                name:d.name,
                iso2:d.iso2,
                fips_code: d.fips_code
            });
        }else{
            contriesIdObj[d.country_id] = 1;
            statesObj[countryISO2] = {
                country_id:d.country_id,
                states: [{
                    name:d.name,
                    iso2:d.iso2,
                    fips_code: d.fips_code
                }]
            };
        }
    });
    writeFiles('countriesId.txt', contriesIdObj)

    // writeFiles('countries-iso2.json', fommatData)
    writeFiles('states-iso2.txt', statesObj)

});

function writeFiles (name, data){
    fs.writeFile(name, JSON.stringify(data, null, 4), 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
}

