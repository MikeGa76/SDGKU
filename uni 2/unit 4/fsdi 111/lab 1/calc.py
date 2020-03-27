def separator():
    print(40 * '-')

def menu():
    print(5 * '\n')
    separator()
    print('welcome to PyCalc')
    separator()
    print('1 - Add')
    print('2 - Subtract')
    print('3 - Multiply')
    print('4 - Divide')
    print('x - Exit')

menu()

opc = ''
while(opc != 'x'):
    sum = 'sum = '
    menu()
    opc = input('Select an option: ')
    if(opc == 'x'):
        break # break finish with the loop
    
    num1 = float(input('First number: '))
    num2 = float(input('Second number: '))
    # num3 = float(input('Third number: '))
    # num4 = float(input('Fourth number: '))

    if(opc == '1'):
        res = num1 + num2
        print('sum = ' + str(res))

    elif(opc == '2'):
        res = num1 - num2
        print('sum = ' + str(res))

    elif(opc == '3'):
        res = num1 * num2
        print('sum = ' + str(res))
    
    elif(opc == '4'):
        res = num1 / num2
        print('sum = ' + str(res))
        if(num2 == 0):
            print('Error: cannot divide by 0')
    
    input('Press Enter to continue...')
print('Thank You!!')