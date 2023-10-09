##############################################
##Challenge Recap
#True Love
name1 = input("Enter your name? ")
name2 = input("Enter their name? ")

combinedName1 = name1.lower() + name2.lower()
print(combinedName1)
t = combinedName1.lower().count("t") 
r = combinedName1.lower().count("r")
u = combinedName1.lower().count("u")
e = combinedName1.lower().count("e")
true_count = t + r + u + e
print(true_count)
l = combinedName1.count("l") 
o = combinedName1.count("o")
v = combinedName1.count("v")
e = combinedName1.count("e")
love_count = l + o + v + e
print(love_count)

love_result = int(str(true_count) + str(love_count))
print(love_result)