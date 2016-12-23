def get_enumerate_elements(el, elementIndex):
    for k,i in enumerate(el):
        if elementIndex == k:
            print(i)
            print(k)



get_enumerate_elements(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'], 4)
