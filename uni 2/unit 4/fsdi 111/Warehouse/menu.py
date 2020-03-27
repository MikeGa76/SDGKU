#method declarations

def print_menu():
    print('-' * 30)
    print('PyHouse - Welcome')
    print('-' * 30)

    print('[1] Register new Item')
    print('[2] Display Catalog')
    print('[3] Display items with no stock')
    print('[4] update stock')
    print('[5] print stock value')
    print('[6] Remove items from Stock')
    print('[7] List Categories')

    print('[x] Exit')

def print_header(title):
    print('\n\n') # 2 blank lines
    print('-' * 30)
    print(title)
    print('-' * 30)
