#Cdmype
from facebook_scraper import get_posts
import csv

face = csv.writer(open('cdmype.csv','w'))
face.writerow(['POST_ID','TEXTO','LIKES'])

for post in get_posts('cdmypeugbusulutan ', pages=10, ):
    #print(post.keys())
    print(post['post_id'], post['text'],post['Likes'],  sep=' - ')
    try:
        face.writerow([post['post_id'], post['text'], post['Likes']])
    except:
        None
        