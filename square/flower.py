import turtle

def create_window():
    window = turtle.Screen()
    window.bgcolor("white")
    flower = turtle.Turtle()
    flower.shape("arrow")
    flower.color("blue")
    flower.speed(8)

    draw_flower_body(flower)
    draw_flower_base(flower)

    window.exitonclick()

def draw_flower_body(flower_body):
    for i in range(1, 37):
        flower_body.left(35)
        flower_body.forward(100)
        flower_body.right(45)
        flower_body.forward(100)
        flower_body.right(135)
        flower_body.forward(100)
        flower_body.right(45)
        flower_body.forward(100)

    flower_body.right(10)

def draw_flower_base(flower_base):
    flower_base.right(79)
    flower_base.forward(350)

create_window()
