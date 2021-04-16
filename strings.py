string = "Hello world!"

print(len(string))

s = "h"

print(len(s))

string1 = list(string)

print(string1)

del string1[1:]

print(string1)

a = "Hey"
b = "Hey"

a1 = [1,2]
b1 = [1,2]

print( a is b )
print( id(a) , id(b) )

print( a1 is b1 )
print( id(a1) , id(b1) )

c1 = a1
print(a1 is c1)
print(id(a1), id(c1))