# Time 5 minutes

problem = """
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
"""

def find_short(s):
    return len(sorted(s.split(" "), key=len)[0])

find_short("bitcoin take over the world maybe who knows perhaps")