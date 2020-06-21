#Cdmype
from facebook_scraper import get_posts
import csv

face = csv.writer(open('cdmype.csv','w'))
face.writerow(['POST_ID','TEXTO','LIKES','comments'])

for post in get_posts('cdmypeugbusulutan ', pages=10, ):
    #print(post.keys())
    print(post['post_id'], post['text'],post['Likes'], post['comments'], sep=' - ')
    try:
        face.writerow([post['post_id'], post['text'], post['Likes'], post['comments']])
    except:
        None
        