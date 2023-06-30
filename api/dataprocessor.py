from nameparser import HumanName
from nameparser.config import CONSTANTS

class Person(dict):
    _properties = dict()
    def __init__(self, old_dict, initials):
        self._properties['title'] = old_dict['title']
        self._properties['firstname'] = old_dict['first']
        self._properties['lastname'] = old_dict['last']
        self._properties['intials'] = initials
    def __getitem__(self):
        return self._properties

class DataProcessor:

    def splitNames(self, row: str) -> list:
        """Returns list of 1 to many names split by 'and'"""
        splitValues = ['and', '&', '+']
        names = []
        containsSplit = False

        for splitValue in splitValues:
            if splitValue in row:
                containsSplit = True
                # Check for two people with no firstname
                bothNames = row.split(splitValue)
                # if first name does not contain a first name
                if len(bothNames[0].split(' ')) < 3:
                    # construct first name with second name of person 2
                    firstName = bothNames[0] + row.split(' ')[-1]
                    names.append(firstName)
                    names.append(*bothNames[1:])
                    break
                else:
                    # There is probably a first name for both people
                    names.append(bothNames[0])
                    names.append(*bothNames[1:])
        if not containsSplit:
            names.append(row)
        return names

    def categoriseName(self, name: str) -> dict:
        """Returns person dict"""
        Human = HumanName(name)
        person = Human.as_dict()
        initials = Human.initials()

        newPerson = Person(person, initials)
        return newPerson.__getitem__()
