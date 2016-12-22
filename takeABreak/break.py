import time
import webbrowser

total_break = 3;
break_count = 0;

while(break_count < total_break):
    time.sleep(10)
    webbrowser.open("http://www.youtube.com/watch?v=dQw4w9WgXcQ")
    break_count+=1

