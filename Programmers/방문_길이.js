const moveDir = (currentP, dir) => {
    let nextP = [];
    let path = [];

    switch (dir) {
        case "U":
            if (currentP[1] >= 5) return [currentP, null];
            nextP = [currentP[0], currentP[1] + 1];
            path = [...currentP, ...nextP];
            break;
        case "D":
            if (currentP[1] <= -5) return [currentP, null];
            nextP = [currentP[0], currentP[1] - 1];
            path = [...nextP, ...currentP];
            break;
        case "L":
            if (currentP[0] <= -5) return [currentP, null];
            nextP = [currentP[0] - 1, currentP[1]];
            path = [...nextP, ...currentP];
            break;
        case "R":
            if (currentP[0] >= 5) return [currentP, null];
            nextP = [currentP[0] + 1, currentP[1]];
            path = [...currentP, ...nextP];
            break;
    }

    return [nextP, path.join('')];
 }

function solution(dirs) {
    const movedPaths = new Set();

    let currentP = [0, 0];
    let path = "";

    for (const dir of dirs) {
        [currentP, path] = moveDir(currentP, dir);
        path && movedPaths.add(path);
    }
    return movedPaths.size;
}

const test = () => {
    console.log(solution("ULURRDLLU"));  //7
    console.log(solution("LULLLLLLU"));  //7
}

test();