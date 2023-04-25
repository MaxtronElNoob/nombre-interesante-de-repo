#define aca las tablas de la base de datos
import psycopg2
import time

while True:
    try:
        conn = psycopg2.connect('postgresql://postgres:1234@localhost:5432/postgres')
        break
    except Exception:
        print
        print("Waiting for postgres to be ready, retrying in 1 second...")
        time.sleep(1)

cur = conn.cursor()

def createTables():

    # create table users

    cur.execute("""CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        username varchar(50) NOT NULL,
        password varchar(50) NOT NULL,
        email varchar(50) NOT NULL,
        name varchar(50) NOT NULL);""")
    conn.commit()

    print("Table users created successfully")

    print("All tables created successfully")