# import datetime
# print(datetime.datetime.now())

from datetime import datetime

current_date = datetime.now()

print(current_date)

print(datetime.now().strftime('%Y-%m-%dT%H:%M:%S'))

