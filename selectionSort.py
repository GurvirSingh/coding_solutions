def selectionSort(array):
    currentIdx = 0
    while currentIdx < len(array) - 1:
        smallestIdx = currentIdx
        for i in range(currentIdx + 1, len(array)):
            if array[smallestIdx] > array[i]:
                smallestIdx = i
        array[smallestIdx], array[currentIdx] = array[currentIdx], array[smallestIdx]
        currentIdx += 1
    return array