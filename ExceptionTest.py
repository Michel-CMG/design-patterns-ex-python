# This Python file uses the following encoding: utf-8

try:
  text = input('Enter something --> ')
except EOFError:
  print('\nWhy did you do an EOF on me?')
except KeyboardInterrupt:
  print('\nYou cancelled the operation.')
except NameError:
  print('\nSo you use python2, you should use \'my words\' as input')
else:
  print('\nYou entered {}'.format(text))

# Try ctrl + d(EOF) ctrl + c(Interrupt) and normal input for this.