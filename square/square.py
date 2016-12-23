import turtle

def create_window():
    window = turtle.Screen()
    window.bgcolor("red")
    draw_square()
    draw_circle()
    draw_triangle()
    window.exitonclick()

def draw_square():
    brad = turtle.Turtle()
    brad.shape("circle")
    brad.color("white")
    brad.speed(5)

    square_side = 0
    while square_side < 4:
        brad.right(90)
        brad.forward(100)
        square_side += 1

def draw_circle():
    angie = turtle.Turtle()
    angie.shape("arrow")
    angie.color("blue")
    angie.circle(100)

def draw_triangle():
    trian = turtle.Turtle()
    trian.shape("triangle")
    trian.color("yellow")

    triangle_side = 0
    while triangle_side < 3:
        trian.forward(100)
        trian.right(120)
        triangle_side += 1

create_window()
