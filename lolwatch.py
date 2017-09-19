from riotwatcher import RiotWatcher
import json

w = RiotWatcher('RGAPI-bcc0bb05-6e09-4d0c-b7dd-49fd76069f19', default_region='jp')
summoner = w.get_summoner(name='Sethena')
summoner_id = summoner['id']
results = w.get_recent_games(summoner_id)
a = ""
i = 0
for result in results['games']:
    for player in result['fellowPlayers']:
        #print(player['summonerId'])
        a += str(player['summonerId'])
        a += "\n"
        i += 1
        if i % 9 == 0:
            a += "\n"
print(a)
print(i)
        #with open('saveresults.json','w') as file:
        #    file.write(json.dumps(player['summonerId'])
        #for sumid in player['summonerId']:
        #    print(sumid)
    #with open(str(result['gameId'])+'.json','w') as file:
    #    file.write(json.dumps(result))
#print(summoner)
#print(summoner_id)
#print(results)
