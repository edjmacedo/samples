class Parent():
    def __init__(self, last_name, eye_color):
        print("Parent constructor called")
        self.last_name = last_name
        self.eye_color = eye_color
        
class Child(Parent):
    def __init__(self, last_name, eye_color, number_of_toys):
        print("Child constructor Called")
        Parent.__init__(self, last_name, eye_color)        
        self.number_of_toys = number_of_toys
        
#bylly_cirus = Parent("Cyrus", "Blue")

miley_cirus = Child("Cyrus", "Blue", 5)
print(miley_cirus.last_name)
print(miley_cirus.number_of_toys)