```
from urllib.request import urlopen
from urllib.parse import urlencode, quote_plus, unquote
import requests
import pymysql

conn = pymysql.connect(host = 'db_connection_host', user = 'db_username', password = 'db_password', db = 'db_name', charset = 'utf8')
curs = conn.cursor()
sql = """insert into table_name(col1, col2, col3)
        values (%s, %s, %s)"""

url = 'rest_api_url'
for i in range (1, 21): #불러 올 페이지 수
    queryParams = '?' + urlencode({ quote_plus('ServiceKey') : 'service_key', 
    quote_plus('returnType'):'data_type(json/xml)', 
    quote_plus('pageNo'): format(i), 
    quote_plus('numOfRows'):'' })

    get_data = requests.get(url + unquote(queryParams))
    result_data = get_data.json()

    
    a_data = result_data['data']
    
    for j in a_data:
        a = j['불러올 항목 key1']
        b = j['불러올 항목 key2']
        c = j['불러올 항목 key3']
        curs.execute(sql, (a, b, c))

conn.commit()
conn.close()
```
