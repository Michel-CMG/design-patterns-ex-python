class TestClassA:
    pass

if __name__ == '__main__':
    a = TestClassA()
    b = TestClassA()
    print(id(a) == id(b))
    print(a, b)