---
title: "Python Conditionals"
description: "Learn about Python control flow using if, elif, else, and match-case statements"
category: "language"
topic: "python"
order: 4
tags: ["python", "conditionals", "control-flow", "match-case"]
lastUpdated: 2026-05-26
---

Conditionals define the flow of the program based on certain conditions and actions.

```python
kettle_boiled = True
if kettle_boiled:
    print("Kettle is boiled. You can make tea now.")
    # Output - Kettle is boiled. You can make tea now.
    
kettle_boiled = False
if kettle_boiled:
    print("Kettle is boiled. You can make tea now.")
    # Output - Nothing will print on terminal 
```

```python
snack = input("Enter your preferred snack: ")
if snack == "Samosa" or snack == "Cookies":
    print("We have your favorite snack!")
else:
    print("Order something else.")
   
    # Output - Enter your preferred snack: Cookies
    #          We have your favorite snack!
```

```python
cup = input("Enter your preferred cup size(small/medium/large): ").lower()
if cup == "small":
    print("Price is 10 rupees.")
elif cup == "medium":
    print("Price is 20 rupees.")
elif cup == "large":
    print("Price is 30 rupees.")
else:
    print("Invalid cup size selected.")
```

```python
device_status = "Active"
temperature = 38
if device_status == "Active" and temperature > 37:
    print("Warning: Device is overheating!")
elif device_status == "Active" or temperature <= 37:
    print("Device is operating within normal parameters.")
else:
    print("Device is inactive.")
```

```python
order_amount = int(input("Enter the order amount: "))
delivery_fees = 0 if order_amount >= 300 else 50

print(f"Delivery fees: {delivery_fees}")
```

```python
seat_type = input("Enter seat type(general/ac/sleeper/luxury): ").lower()

match seat_type:
    case "general":
        print("Price is 500 rupees.")
    case "ac":
        print("Price is 1000 rupees.")
    case "sleeper":
        print("Price is 1500 rupees.")
    case "luxury":
        print("Price is 2000 rupees.")
    case _:
        print("Invalid seat type selected.")
```
