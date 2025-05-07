let givenInput = [];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline
    .on("line", function (line) {
        givenInput.push(line.trim());
    })
    .on("close", function () {
        solution(givenInput);
        process.exit();
    });

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const c = word[i];

            if (!node.children[c]) node.children[c] = new TrieNode();

            node = node.children[c];
        }

        node.isEnd = true;
    }

    containIn(word) {
        for (let i = 0; i < word.length; i++) {
            let node = this.root;

            for (let j = i; j < word.length; j++) {
                const c = word[j];

                if (!node.children[c]) break;

                node = node.children[c];

                if (node.isEnd) return true;
            }
        }
        return false;
    }
}

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
    const [, ...inputs] = inputLines;

    const trie = new Trie();
    const result = [];

    inputs.forEach((v) => {
        if (trie.containIn(v)) result.push(v);

        trie.insert(v);
    });

    console.log(result.join("\n"));
}
