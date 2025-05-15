class TrieNode {
    constructor() {
        this.end = false; // 해당 노드에서 끝나는 문자열이 있는지.
        this.children = {}; // 더 연결되는 문자열들의 노드를 저장.
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // root는 빈 노드를 하나 만든다.
    }

    insert(str) {
        let curNode = this.root;

        for (const char of str) {
            if (!curNode.children[char]) {
                curNode.children[char] = new TrieNode();
            }
            curNode = curNode.children[char];
        }

        curNode.end = true;
    }

    search(str) {
        let curNode = this.root;

        for (const char of str) {
            if (curNode.children[char]) {
                curNode = curNode.children[char];
            } else {
                console.log("false");
                return false;
            }
        }

        console.log("true");
        return true;
    }

    // 앞에 있던 말이 포함된게 있는지
    containsIn(str) {
        for (let i = 0; i < str.length; i++) {
            let curNode = this.root;

            for (let j = i; j < str.length; j++) {
                const char = str[j];

                if (!curNode.children[char]) break;

                curNode = curNode.children[char];

                if (curNode.end) return true;
            }
        }
        return false;
    }

    traversal() {
        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const curNode = queue.shift();

            if (!curNode.children) continue;

            for (const [k, val] of Object.entries(curNode.children)) {
                console.log(k);
                queue.push(val);
            }
        }
    }
}

(function test() {
    const trie = new Trie();

    trie.insert("good");
    trie.insert("gold");
    trie.insert("glink");
    trie.insert("cat");

    // trie.traversal();

    trie.search("good");
    trie.search("go");
    trie.search("gll");
    trie.search("old");

    console.log(trie.containsIn('kgood'));
    console.log(trie.containsIn('ood'))
    console.log(trie.containsIn('gll'))
    trie.search('kgood');
})();
