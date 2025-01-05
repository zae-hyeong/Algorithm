const solution = (s) => s.length % 2 !== 0 ? s[(s.length -1) / 2] : s[(s.length / 2) - 1] + s[s.length / 2];

const solution2 = (s) => s.slice(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2) + ((s.length % 2 !== 0) ? 0 : 1));