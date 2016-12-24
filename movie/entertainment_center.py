import media
import fresh_tomatoes

toy_story = media.Movie("Toy Story",
                        "A story of a boy and his toy that come to life",
                        "http://img.lum.dolimg.com/v1/images/open-uri20150422-20810-m8zzyx_5670999f.jpeg?region=0,0,300,450",
                        "https://www.youtube.com/watch?v=KYz2wyBy3kc")

avatar = media.Movie("Avatar",
                     "A Marine on an alien planet",
                     "http://t0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp",
                     "https://www.youtube.com/watch?v=k2tX669PS1E")

rush_hour = media.Movie("Rush Hour",
                        "Jackie Chan kick everyone",
                        "http://www.gstatic.com/tv/thumb/movieposters/21702/p21702_p_v8_ae.jpg",
                        "https://www.youtube.com/watch?v=JMiFsFQcFLE")
                        
school_of_rock = media.Movie("School of Rock",
                             "Using Rock music to learn",
                             "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQwH6A_Q11GH0yrfp65l3uVxc88b6onqiYJwr3CDJAs4WmnqN2bYnuKgw",
                             "https://www.youtube.com/watch?v=3PsUJFEBC74")
                             
ratatouille = media.Movie("Ratatouille",
                          "A rat is a chef in Paris",
                          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTLRzGtYrqOLHC8hs3-i6N2_IW3JeEwcS8z9hpp-yXXOsqDTUxD1uchg",
                          "https://www.youtube.com/watch?v=c3sBBRxDAqk")
                          
hunger_games = media.Movie("Hunger Games",
                           "A really real  reality show",
                           "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg",
                           "https://www.youtube.com/watch?v=EAzGXqJSDJ8")

movies = [toy_story, avatar, rush_hour, school_of_rock, ratatouille, hunger_games]
fresh_tomatoes.open_movies_page(movies)