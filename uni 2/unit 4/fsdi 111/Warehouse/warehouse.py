"""
program: warehouse inventory system
functionality:
    -register items to the catalog
        id (auto generate)
        title
        category
        price
        stock
"""
from menu import print_menu
from item import Item
import os
from menu import print_header
import pickle

catalog = []
id_count = 0
data_file = "catalog.data"

# methods declartions 
def clear():
    return os.system('cls')

def save_catalog():
    global data_file
    writer = open(data_file, "wb") # open a file to write binary
    pickle.dump(catalog, writer)
    writer.close()
    print("data saved")

def read_catalog():
    global data_file
    global id_count

    try:
        reader = open( data_file, "rb") #open the file to read binary
        temp_list = pickle.load(reader)

        for item in temp_list:
            catalog.append(item)

        last = catalog[ -1 ]
        id_count = last.id + 1

        how_many = len(catalog)
        print(" Loaded" + str(how_many) + " items")
    except:
        #when the code above crash, we get here
        print(" * ERROR: loading data")

def register_item():
    global id_count #import the global variable into fn scope
    print_header(' something')

    title = input('please input Title: ')
    category = input('Please input Category: ')
    price = float(input('Please input price: '))
    stock = int(input('Please input stock: '))
    #do validations here

    #create the object
    new_item = Item() # <- how to create an object of a class
    new_item.id = id_count
    new_item.title = title
    new_item.category = category
    new_item.price = price
    new_item.stock = stock

    id_count += 1
    catalog.append(new_item)
    print(" Item created!")

def display_catalog():
    num_items = len(catalog) # <- get the length of array or string
    print_header(' Catalog ' + str(num_items) + ' Items')
    print('ID    |  Title              | Category        |     Price | Stock ')
    print('-' * 80)

    for item in catalog:
        print(str(item.id).ljust(3)
        + " | " 
        + item.title.ljust(20)
        + " | " +
         item.category.ljust(15)
        + " | " 
        + str(item.price).rjust(9)
        + " | " 
        + str(item.stock).rjust(5))

def update_stock():
    # show all the items
    # ask the user to choose and id
    # ask for the new stock value
    # update the stock value of the selected item
    display_catalog()
    selected = int(input('ID to update'))

    found = False
    for item in catalog:
        if(item.id == selected):
            new_stock = input(' Please input new stock value: ')
            found = True
            print(' stock updated!!')

    if(found == False):
        print('** ERROR: Selected ID does not exist')
     
    

#loop to display menu
def display_no_stock():
    print_header(' Catalog ')
    print('ID    |  Title              | Category        |     Price | Stock ')
    print('-' * 80)

    for item in catalog:
        if(item.stock == 0):
            print(str(item.id).ljust(3)
            + " | " +
                item.title.ljust(20)
            + " | " +
            item.category.ljust(15)
            + " | " 
            + str(item.price).rjust(9)
            + " | " 
            + str(item.stock).rjust(5))

def print_stock_value():
    print_header(" Current stock value")
    
    total = 0.0

    for item in catalog:
        total += (item.price * item.stock)
    
    print("Total value: " + str(total))

def remove_item():
    #show the list of items
    #ask the user choose and id to remove
    #validate the id 
    #remove that item
    display_catalog()
    remove_id = int(input(' Please input id to remove: '))
    found = False

    for item in catalog:
        if(item.id == remove_id):
            found = True
            catalog.remove(item)
            print(' item removed!!')

    if(not found):
        print('** ERROR: Selected ID does not exist')

def list_categories():
    print_header("List of categories used on the system")
    already_printed = []
    for item in catalog:
        if not item.category in already_printed:
            print(item.category)
            already_printed.append(item.category)

#load data
read_catalog()

#loop to display menu
opc = ''
while(opc != 'x'):
    clear()
    print_menu()
    opc = input('Select an option')

    if(opc == '1'):
        register_item()
        save_catalog()
    elif(opc == '2'):
        display_catalog()
    elif(opc == '3'):
        display_no_stock()
    elif(opc == '4'):
        update_stock()
        save_catalog()    
    elif(opc == '5'):
        print_stock_value()
    elif(opc == '6'):
        remove_item()
    elif(opc == '7'):
        list_categories()

    input('Press Enter to continue...')