class Set() :
    def __init__(self, N) : 
        self.parent = [0] * N
        for i in range(0, N) :
            self.parent[i] = i
        
    def find(self, x) :        
        if self.parent[x] != x :
            return self.find(self.parent[x])
        return x
        
    def union(self, a, b) :
        a = self.find(a)
        b = self.find(b)
        
        if a < b :
            self.parent[b] = a
        else : 
            self.parent[a] = b
            
        print(self.parent)
    
s = Set(11)

s.union(1, 1)
s.union(1, 2)
s.union(1, 3)
s.union(1, 4)
s.union(1, 5)
s.union(2, 6)
s.union(2, 7)
s.union(8, 9)
s.union(8, 10)

print(s.find(10))