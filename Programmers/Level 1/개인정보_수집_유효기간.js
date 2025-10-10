function solution(today, terms, privacies) {
    today = today.split('').map(v => {
            if(v === '.') return '-'
            else return v
        }).join('');
    today = new Date(today);

    const termHash = new Map();
    terms.forEach(v => {
        const tmp = v.split(' ');
        termHash.set(tmp[0], parseInt(tmp[1]));
    });

    const result = [];
    privacies.forEach((v, i) => {
        const [tmp, term] = v.split(' ');
        const dayStr = tmp.split('').map(v => {
            if(v === '.') return '-'
            else return v
        }).join('');
        const startDay = new Date(dayStr);

        startDay.setMonth(startDay.getMonth() + termHash.get(term));

        if(!isBig(startDay, today)) result.push(i + 1);
    });

    return result;
}

function isBig(day1, day2) {
    if(day1.getYear() < day2.getYear()) return false;
    else if (day1.getYear() === day2.getYear()) {
        if(day1.getMonth() < day2.getMonth()) return false;
        else if(day1.getMonth() === day2.getMonth()){
            if(day1.getDay() <= day2.getDay()) return false;
        }
    }

    return true;
}

// solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]);
solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]);