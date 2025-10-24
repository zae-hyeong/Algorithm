for(let i = 0; i < 30; i++) {
    const response = await fetch('/api/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: "박재형이 이기면", content : "개추" })
                });
}