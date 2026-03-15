# Time 5 minutes

problem = """
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
"""

def solution(s):
    res = ""
    for letter in s:
        if letter == letter.upper():
            res += " "
        res += letter
    return res

print(solution("helloWorld"))