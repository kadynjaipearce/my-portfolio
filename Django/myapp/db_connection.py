import pymongo

url = "mongodb+srv://eenxrm:b7hrf0LPiuMx5Tfg@my-portfolio-data.hb7ucti.mongodb.net/portfolio"

client = pymongo.MongoClient(url)

db = client["portfolio"]