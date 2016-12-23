def read_text():
    quotes = open("/home/edjmacedo/dev/samples/profanityEditor/movie_quotes.txt")
    contents_of_file = quotes.read()
    print(contents_of_file)
    quotes.close()

read_text()
