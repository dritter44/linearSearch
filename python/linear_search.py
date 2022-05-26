#array_to_search_through = []
#for number in range(1, 1001):
#    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    index_match = 0
    for i, x in enumerate(array_to_search_through):
        if x == value_to_find:
            index_match = i
            return index_match
            