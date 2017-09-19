import urllib2
import json
SUM_NAME = "nekokan"
SUMMONER_V14 = "https://jp.api.pvp.net/api/lol/jp/v1.4/summoner/by-name/"
SPECTATOR_V3 = "https://jp.api.pvp.net/lol/spectator/v3/active-games/by-summoner/"
API_KEY = "api_key=RGAPI-bea4e474-3a2f-4bac-8c09-cc4b7543fbc2"
def findMe():
    try:
        s = urllib2.urlopen(SUMMONER_V14 + SUM_NAME + '?' + API_KEY)
        summ = json.loads(s.read().decode('utf-8'))
        SUM_ID = summ[SUM_NAME.lower()]["id"]
        print(SUM_ID)
    finally:
        s.close()
findMe()

def currentGame():
    try:
        spect = urllib2.urlopen(SPECTATOR_V3 + SUM_NAME + '?' + API_KEY)
    finally:
        spect.close()
#currentGame()


