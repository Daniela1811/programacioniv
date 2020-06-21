#DESSPENSA_Familiar

from facebook_scraper import get_posts
import csv

face = csv.writer(open('Despensa_Familiar.csv','w'))
face.writerow(['POST_ID','TEXTO','LIKES'])

for post in get_posts('DespensaFamiliarElSalvador', pages=10, ):
    #print(post.keys())
    print(post['post_id'], post['text'], post['likes'], sep=' - ')
    try:
        face.writerow([post['post_id'], post['text'], post['likes']])
    except:
        None