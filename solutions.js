# Problem 1: Sum of distinct elements from two arrays

set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]

sum_distinct = 0

# Add elements from set1 not in set2
for i in range(len(set1)):
    found = False
    for j in range(len(set2)):
        if set1[i] == set2[j]:
            found = True
            break
    if not found:
        sum_distinct += set1[i]

# Add elements from set2 not in set1
for i in range(len(set2)):
    found = False
    for j in range(len(set1)):
        if set2[i] == set1[j]:
            found = True
            break
    if not found:
        sum_distinct += set2[i]

print("Sum of distinct elements:", sum_distinct)

Sum of distinct elements: 13

# Dot product PROCEDURE
def dot_product(v1, v2, ps):
    ps[0] = 0
    for i in range(len(v1)):
        ps[0] += v1[i] * v2[i]

        vectors1 = [[1, 2], [2, 3]]
vectors2 = [[-2, 1], [3, -2]]

for i in range(len(vectors1)):
    ps = [0]  # passed by reference
    dot_product(vectors1[i], vectors2[i], ps)

    if ps[0] == 0:
        print("Vectors", i + 1, "are orthogonal")
    else:
        print("Vectors", i + 1, "are not orthogonal")

        # Dot product FUNCTION
def dot_product(v1, v2):
    ps = 0
    for i in range(len(v1)):
        ps += v1[i] * v2[i]
    return ps

    for i in range(len(vectors1)):
    result = dot_product(vectors1[i], vectors2[i])

    if result == 0:
        print("Vectors", i + 1, "are orthogonal")
    else:
        print("Vectors", i + 1, "are not orthogonal")
