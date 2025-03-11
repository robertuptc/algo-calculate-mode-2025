def calculate_mode(list):
    items_dict = create_dict(list)
    answer = loop_dict(items_dict)
    print(answer)
    return answer

def create_dict(l):
    sorted_l = list(reversed(sorted(l)))
    new_dict = {}

    for element in sorted_l:
        if element in new_dict:
            new_dict[element] += 1
        else:
            new_dict[element] = 1
    return new_dict

def loop_dict(d):
    count = 0
    answer = []
    for key, value in d.items():
        if value > count:
            count = value
            answer = []
            answer.append(key)
        elif value == count:
            count = value
            answer.append(key)
    return answer