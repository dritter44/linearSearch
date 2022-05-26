#array_to_search_through = []
#for number in range(1, 1001):
#    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    index_match = 0
    for i, x in enumerate(array_to_search_through):
        if x == value_to_find:
            #print(i,x)
            index_match = i
            return index_match
            #print(index_match)



#print(linear_search(3, [1,2,3]) == 2)
#print(linear_search(4, [1,2,3]) == None)
#print(linear_search(13, [1,2,3]) == None)