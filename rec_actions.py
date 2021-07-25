## workflow

# 먼저 파일을 불러와서 df로 저장

import pandas as pd
large_df = pd.read_json("./src/mydata/github_recdata.json")
## 크롤링하기
dfs = pd.read_html('https://www.kpx.or.kr/mobile/sub04_1.do')

newdf = dfs[0]


# 크롤링한걸로 concat 할 수 있는 df 만들기
# 1) transpose
transposed = newdf.set_index(0).T
# 2) 필요한거만 남기기
transposed = transposed[['거래일','거래량','종가']]

# 열 이름 바꾸기
transposed.columns = ['date','trade_volume','closing_price']
transposed

# 날짜를 기존 형식으로 통일
transposed['date'] = pd.to_datetime(transposed['date'].str[:-3], format='%Y.%m.%d')

# 합치기
finaldf = pd.concat([large_df,transposed],ignore_index=True)

# 혹시 모르니 drop duplicates 해주기
# finaldf = finaldf.drop_duplicates('date')

# finaldf를 다시 저장
finaldf.to_json('./src/mydata/github_recdata.json', orient='records')