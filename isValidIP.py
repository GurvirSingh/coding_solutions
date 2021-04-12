def validIPAddresses(string):
    ipAddressesFound = []

    for i in range(1, max(len(string), 4)):
        currentIPAddressesParts = ["", "", "", ""]
        
        currentIPAddressesParts[0] = string[:i]
        if not isValidPart(currentIPAddressesParts[0]):
            continue

        for j in range(i + 1, i + min(len(string) - i, 4)):
            currentIPAddressesParts[1] = string[i:j]

            if not isValidPart(currentIPAddressesParts[1]):
                continue

            for k in range(j + 1, j + min(len(string) - k, 4)):
                currentIPAddressesParts[2] = string[j:k]
                currentIPAddressesParts[3] = string[k:]

                if isValidPart(currentIPAddressesParts[2]) and isValidPart(currentIPAddressesParts[3]):
                    ipAddressesFound.appen(".".join(currentIPAddressesParts))
    return ipAddressesFound


def isValidPart(string):
    strToInt = int(string)
    if strToInt > 255:
        return False

    return len(string) == len(str(strToInt))   