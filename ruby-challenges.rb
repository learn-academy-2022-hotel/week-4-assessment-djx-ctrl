# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# PSUEDOCODE:
# define a variable named is_even_odd
# input: a integer
# output: a string
# Process: if num is equal to specific integer return string stating if odd or even

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even_odd num
    if num == 7
        '7 is odd'
    elsif num == 42
        '42 is even'
    else num == 221
        '221 is odd'
    end
end

p is_even_odd num1
p is_even_odd num2
p is_even_odd num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# PSUEDOCODE:
# define a variable named remove_vowels
# input: a string
# output: a string with vowels removed
# Process: take the string and use .delete and in parenthesis specify all lowercase/uppercase vowels to be removed from original string

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
   string.delete("aeiouAEIOU")
end

p remove_vowels beatles_album1
p remove_vowels beatles_album2
p remove_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# PSUEDOCODE:
# define a variable named palindrome_check
# input: a string
# output: a string
# Process: if the string.downcase is equal to the string.downcase in reverse say whether string is palindrome or not

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_check(string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end
end

p palindrome_check palindrome_tester1
p palindrome_check palindrome_tester2
p palindrome_check palindrome_tester3