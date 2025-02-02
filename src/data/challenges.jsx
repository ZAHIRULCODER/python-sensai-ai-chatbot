export const challenges = [
  {
    id: 1,
    title: "Print Hello World",
    description:
      "Write a Python program that prints 'Hello, World!' to the console.",
    solution: 'print("Hello, World!")',
  },
  {
    id: 2,
    title: "Calculate Sum",
    description:
      "Write a function that adds two numbers and returns the result.",
    solution: "def add_numbers(a, b):\n    return a + b",
  },
  {
    id: 3,
    title: "Create a List",
    description: "Create a list of your favorite colors and print each one.",
    solution:
      'colors = ["red", "blue", "green"]\nfor color in colors:\n    print(color)',
  },
  {
    id: 4,
    title: "Greet User",
    description:
      "Write a Python program that asks for the user's name and greets them with 'Hello, [Name]!'",
    solution: 'name = input("What is your name? ")\nprint(f"Hello, {name}!")',
  },
  {
    id: 5,
    title: "Simple Addition",
    description:
      "Write a Python program that asks the user for two numbers and prints their sum.",
    solution:
      'num1 = int(input("Enter first number: "))\nnum2 = int(input("Enter second number: "))\nsum = num1 + num2\nprint(f"The sum is {sum}")',
  },
  {
    id: 6,
    title: "Even or Odd",
    description:
      "Write a Python program that checks if a number entered by the user is even or odd.",
    solution:
      'num = int(input("Enter a number: "))\nif num % 2 == 0:\n    print("The number is even.")\nelse:\n    print("The number is odd.")',
  },
  {
    id: 7,
    title: "Favorite Fruit",
    description: "Create a list of your favorite fruits and print each one.",
    solution:
      'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
  },
  {
    id: 8,
    title: "Square of Numbers",
    description:
      "Write a Python program that prints the squares of numbers from 1 to 10.",
    solution: "for i in range(1, 11):\n    print(i ** 2)",
  },
  {
    id: 9,
    title: "Countdown",
    description:
      "Write a Python program that counts down from 10 to 1 and then prints 'Blast off!'.",
    solution: 'for i in range(10, 0, -1):\n    print(i)\nprint("Blast off!")',
  },
  {
    id: 10,
    title: "Multiplication Table",
    description:
      "Write a Python program that prints the multiplication table for a number entered by the user.",
    solution:
      'num = int(input("Enter a number: "))\nfor i in range(1, 11):\n    print(f"{num} x {i} = {num * i}")',
  },
  {
    id: 11,
    title: "Factorial Calculation",
    description:
      "Write a Python program that calculates the factorial of a number entered by the user.",
    solution:
      'def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nnum = int(input("Enter a number: "))\nprint(f"The factorial of {num} is {factorial(num)}")',
  },
  {
    id: 12,
    title: "Reverse a String",
    description:
      "Write a Python program that takes a string input from the user and prints it in reverse.",
    solution: 'string = input("Enter a string: ")\nprint(string[::-1])',
  },
  {
    id: 13,
    title: "Palindrome Checker",
    description:
      "Write a Python program that checks if a word entered by the user is a palindrome.",
    solution:
      'word = input("Enter a word: ")\nif word == word[::-1]:\n    print("The word is a palindrome.")\nelse:\n    print("The word is not a palindrome.")',
  },
  {
    id: 14,
    title: "Fibonacci Sequence",
    description:
      "Write a Python program that prints the first 10 numbers of the Fibonacci sequence.",
    solution:
      "a, b = 0, 1\nfor _ in range(10):\n    print(a)\n    a, b = b, a + b",
  },
  {
    id: 15,
    title: "Find the Largest Number",
    description:
      "Write a Python program that finds the largest number in a list.",
    solution:
      'numbers = [3, 5, 7, 2, 8]\nmax_num = max(numbers)\nprint(f"The largest number is {max_num}")',
  },
  {
    id: 16,
    title: "Count Vowels",
    description:
      "Write a Python program that counts the number of vowels in a string entered by the user.",
    solution:
      'string = input("Enter a string: ")\nvowels = "aeiouAEIOU"\ncount = 0\nfor char in string:\n    if char in vowels:\n        count += 1\nprint(f"The number of vowels is {count}")',
  },
  {
    id: 17,
    title: "Sum of List",
    description:
      "Write a Python program that calculates the sum of all numbers in a list.",
    solution:
      'numbers = [1, 2, 3, 4, 5]\nsum_numbers = sum(numbers)\nprint(f"The sum of the list is {sum_numbers}")',
  },
  {
    id: 18,
    title: "Remove Duplicates",
    description:
      "Write a Python program that removes duplicate items from a list.",
    solution:
      'numbers = [1, 2, 2, 3, 4, 4, 5]\nunique_numbers = list(set(numbers))\nprint(f"List without duplicates: {unique_numbers}")',
  },
  {
    id: 19,
    title: "Check Prime Number",
    description:
      "Write a Python program that checks if a number entered by the user is prime.",
    solution:
      'num = int(input("Enter a number: "))\nif num > 1:\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            print("The number is not prime.")\n            break\n    else:\n        print("The number is prime.")\nelse:\n    print("The number is not prime.")',
  },
  {
    id: 20,
    title: "Temperature Converter",
    description:
      "Write a Python program that converts a temperature from Celsius to Fahrenheit.",
    solution:
      'celsius = float(input("Enter temperature in Celsius: "))\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius}°C is {fahrenheit}°F")',
  },
  {
    id: 21,
    title: "Number Guessing Game",
    description:
      "Write a Python program where the computer randomly selects a number between 1 and 100, and the user has to guess it.",
    solution:
      'import random\nnumber = random.randint(1, 100)\nguess = int(input("Guess the number between 1 and 100: "))\nwhile guess != number:\n    if guess < number:\n        print("Too low!")\n    else:\n        print("Too high!")\n    guess = int(input("Try again: "))\nprint("Congratulations! You guessed it.")',
  },
  {
    id: 22,
    title: "Simple Calculator",
    description:
      "Write a Python program that performs basic arithmetic operations (+, -, *, /) based on user input.",
    solution:
      'def add(x, y):\n    return x + y\n\ndef subtract(x, y):\n    return x - y\n\ndef multiply(x, y):\n    return x * y\n\ndef divide(x, y):\n    return x / y\n\nprint("Select operation:")\nprint("1. Add")\nprint("2. Subtract")\nprint("3. Multiply")\nprint("4. Divide")\n\nchoice = input("Enter choice (1/2/3/4): ")\nnum1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\n\nif choice == "1":\n    print(f"{num1} + {num2} = {add(num1, num2)}")\nelif choice == "2":\n    print(f"{num1} - {num2} = {subtract(num1, num2)}")\nelif choice == "3":\n    print(f"{num1} * {num2} = {multiply(num1, num2)}")\nelif choice == "4":\n    print(f"{num1} / {num2} = {divide(num1, num2)}")\nelse:\n    print("Invalid input")',
  },
  {
    id: 23,
    title: "Leap Year Checker",
    description:
      "Write a Python program that checks if a year entered by the user is a leap year.",
    solution:
      'year = int(input("Enter a year: "))\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year} is a leap year.")\nelse:\n    print(f"{year} is not a leap year.")',
  },
  {
    id: 24,
    title: "Password Generator",
    description:
      "Write a Python program that generates a random password of a specified length.",
    solution:
      'import random\nimport string\nlength = int(input("Enter password length: "))\ncharacters = string.ascii_letters + string.digits + string.punctuation\npassword = "".join(random.choice(characters) for i in range(length))\nprint(f"Generated password: {password}")',
  },
  {
    id: 25,
    title: "Word Count",
    description:
      "Write a Python program that counts the number of words in a sentence entered by the user.",
    solution:
      'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nprint(f"The number of words is {len(words)}")',
  },
  {
    id: 26,
    title: "Prime Number Finder",
    description:
      "Write a Python program that finds all prime numbers up to a number entered by the user.",
    solution:
      'def is_prime(num):\n    if num <= 1:\n        return False\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            return False\n    return True\n\nlimit = int(input("Find prime numbers up to: "))\nprimes = [num for num in range(2, limit + 1) if is_prime(num)]\nprint(f"Prime numbers up to {limit}: {primes}")',
  },
  {
    id: 27,
    title: "Simple To-Do List",
    description:
      "Write a Python program that allows the user to add, remove, and view items in a to-do list.",
    solution:
      'to_do_list = []\nwhile True:\n    print("\\nTo-Do List:")\n    for idx, item in enumerate(to_do_list, start=1):\n        print(f"{idx}. {item}")\n    print("\\nOptions:")\n    print("1. Add item")\n    print("2. Remove item")\n    print("3. Exit")\n    choice = input("Choose an option: ")\n    if choice == "1":\n        item = input("Enter the item to add: ")\n        to_do_list.append(item)\n    elif choice == "2":\n        item_num = int(input("Enter the item number to remove: "))\n        if 0 < item_num <= len(to_do_list):\n            to_do_list.pop(item_num - 1)\n        else:\n            print("Invalid item number.")\n    elif choice == "3":\n        break\n    else:\n        print("Invalid choice. Please try again.")',
  },
  {
    id: 28,
    title: "Find Second Largest",
    description:
      "Write a Python program that finds the second largest number in a list.",
    solution:
      'numbers = [10, 20, 4, 45, 99]\nnumbers.sort(reverse=True)\nprint(f"Second largest number is {numbers[1]}")',
  },
  {
    id: 29,
    title: "Anagram Checker",
    description:
      "Write a Python program that checks if two words are anagrams.",
    solution:
      'def is_anagram(word1, word2):\n    return sorted(word1) == sorted(word2)\nword1 = input("Enter first word: ")\nword2 = input("Enter second word: ")\nprint("Anagrams" if is_anagram(word1, word2) else "Not anagrams")',
  },
  {
    id: 30,
    title: "Find Missing Number",
    description:
      "Given a list of numbers from 1 to N with one missing, find the missing number.",
    solution:
      'def find_missing(lst, n):\n    return n * (n + 1) // 2 - sum(lst)\nn = int(input("Enter the value of N: "))\nlst = list(map(int, input("Enter the numbers separated by space: ").split()))\nprint(f"Missing number is {find_missing(lst, n)}")',
  },
  {
    id: 31,
    title: "Check Armstrong Number",
    description:
      "Write a Python program that checks if a number is an Armstrong number.",
    solution:
      'num = int(input("Enter a number: "))\norder = len(str(num))\nsum_digits = sum(int(digit) ** order for digit in str(num))\nprint("Armstrong Number" if sum_digits == num else "Not an Armstrong Number")',
  },
  {
    id: 32,
    title: "Caesar Cipher",
    description:
      "Write a Python program that encrypts and decrypts text using the Caesar cipher.",
    solution:
      'def caesar_cipher(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            shift_base = 65 if char.isupper() else 97\n            result += chr((ord(char) - shift_base + shift) % 26 + shift_base)\n        else:\n            result += char\n    return result\ntext = input("Enter text: ")\nshift = int(input("Enter shift value: "))\nprint("Encrypted text:", caesar_cipher(text, shift))',
  },
  {
    id: 33,
    title: "Find Duplicates",
    description:
      "Write a Python program that finds duplicate numbers in a list.",
    solution:
      'numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7]\nduplicates = list(set([num for num in numbers if numbers.count(num) > 1]))\nprint(f"Duplicate numbers: {duplicates}")',
  },
  {
    id: 34,
    title: "Balanced Parentheses",
    description:
      "Write a Python program that checks if a given string has balanced parentheses.",
    solution:
      'def is_balanced(s):\n    stack = []\n    pairs = {")": "(", "}": "{", "]": "["}\n    for char in s:\n        if char in "({[":\n            stack.append(char)\n        elif char in ")}]":\n            if not stack or stack.pop() != pairs[char]:\n                return False\n    return not stack\nexpr = input("Enter an expression: ")\nprint("Balanced" if is_balanced(expr) else "Not Balanced")',
  },
  {
    id: 35,
    title: "Find Common Elements",
    description:
      "Write a Python program that finds common elements between two lists.",
    solution:
      'list1 = [1, 2, 3, 4, 5]\nlist2 = [3, 4, 5, 6, 7]\ncommon = list(set(list1) & set(list2))\nprint(f"Common elements: {common}")',
  },
  {
    id: 36,
    title: "Sort Words Alphabetically",
    description:
      "Write a Python program that sorts words in a sentence alphabetically.",
    solution:
      'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nwords.sort()\nprint(" ".join(words))',
  },
  {
    id: 37,
    title: "Longest Word in a Sentence",
    description:
      "Write a Python program that finds the longest word in a sentence.",
    solution:
      'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nlongest_word = max(words, key=len)\nprint(f"Longest word: {longest_word}")',
  },
  {
    id: 38,
    title: "Capitalize First Letter",
    description:
      "Write a Python program that capitalizes the first letter of each word in a sentence.",
    solution: 'sentence = input("Enter a sentence: ")\nprint(sentence.title())',
  },
  {
    id: 39,
    title: "Sum of Even Numbers",
    description:
      "Write a Python program that calculates the sum of all even numbers in a list.",
    solution:
      'numbers = [1, 2, 3, 4, 5, 6]\nsum_even = sum(num for num in numbers if num % 2 == 0)\nprint(f"Sum of even numbers: {sum_even}")',
  },
  {
    id: 40,
    title: "Count Words of Specific Length",
    description:
      "Write a Python program that counts the number of words in a sentence with a specific length.",
    solution:
      'sentence = input("Enter a sentence: ")\nlength = int(input("Enter word length to count: "))\ncount = sum(1 for word in sentence.split() if len(word) == length)\nprint(f"Words of length {length}: {count}")',
  },
  {
    id: 41,
    title: "Find Most Frequent Element",
    description:
      "Write a Python program that finds the most frequent element in a list.",
    solution:
      'numbers = [1, 2, 3, 1, 2, 1, 4, 1]\nmost_frequent = max(set(numbers), key=numbers.count)\nprint(f"Most frequent element: {most_frequent}")',
  },
  {
    id: 42,
    title: "Sort Dictionary by Value",
    description:
      "Write a Python program that sorts a dictionary by its values in descending order.",
    solution:
      'data = {"apple": 5, "banana": 3, "cherry": 8}\nsorted_dict = dict(sorted(data.items(), key=lambda item: item[1], reverse=True))\nprint(sorted_dict)',
  },
  {
    id: 43,
    title: "Check Substring",
    description:
      "Write a Python program that checks if a string is a substring of another.",
    solution:
      'string1 = input("Enter main string: ")\nstring2 = input("Enter substring: ")\nprint("Substring found" if string2 in string1 else "Substring not found")',
  },
  {
    id: 44,
    title: "Sum of Digits",
    description:
      "Write a Python program that calculates the sum of the digits of a number.",
    solution:
      'num = int(input("Enter a number: "))\nsum_digits = sum(int(digit) for digit in str(num))\nprint(f"Sum of digits: {sum_digits}")',
  },
  {
    id: 45,
    title: "Reverse Words in a Sentence",
    description:
      "Write a Python program that reverses the words in a sentence.",
    solution:
      'sentence = input("Enter a sentence: ")\nreversed_sentence = " ".join(sentence.split()[::-1])\nprint(reversed_sentence)',
  },
  {
    id: 46,
    title: "Find Second Largest Number",
    description:
      "Write a Python program that finds the second largest number in a list.",
    solution:
      'numbers = [10, 20, 4, 45, 99]\nnumbers.sort(reverse=True)\nprint(f"Second largest number is {numbers[1]}")',
  },
  {
    id: 47,
    title: "Check Anagram",
    description:
      "Write a Python program that checks if two words entered by the user are anagrams.",
    solution:
      'word1 = input("Enter first word: ").lower()\nword2 = input("Enter second word: ").lower()\nif sorted(word1) == sorted(word2):\n    print("The words are anagrams.")\nelse:\n    print("The words are not anagrams.")',
  },
  {
    id: 48,
    title: "Merge Two Sorted Lists",
    description:
      "Write a Python program that merges two sorted lists into a single sorted list.",
    solution:
      'list1 = [1, 3, 5, 7]\nlist2 = [2, 4, 6, 8]\nmerged_list = sorted(list1 + list2)\nprint(f"Merged sorted list: {merged_list}")',
  },
  {
    id: 49,
    title: "Find Missing Number",
    description:
      "Write a Python program that finds the missing number in a sequence from 1 to n.",
    solution:
      'def find_missing_number(arr, n):\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(arr)\n    return expected_sum - actual_sum\n\nnumbers = [1, 2, 4, 5, 6]\nn = 6\nprint(f"Missing number is {find_missing_number(numbers, n)}")',
  },
  {
    id: 50,
    title: "Check Armstrong Number",
    description:
      "Write a Python program that checks if a number entered by the user is an Armstrong number.",
    solution:
      'num = int(input("Enter a number: "))\norder = len(str(num))\nsum_of_digits = sum(int(digit) ** order for digit in str(num))\nif num == sum_of_digits:\n    print(f"{num} is an Armstrong number.")\nelse:\n    print(f"{num} is not an Armstrong number.")',
  },
];
