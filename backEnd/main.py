from tables import createTables
import time
import psycopg2
from pydantic import BaseModel
from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse


app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# connect to database
while True:
    try:
        conn = psycopg2.connect('postgresql://postgres:1234@localhost:5432/postgres')
        createTables()
        break
    except Exception as e:
        print(e)
        print("Waiting for postgrest to be ready, retrying in 1 second...")
        time.sleep(1)

# create a cursor
cur = conn.cursor()


@app.get("/users", status_code=200)
def read_users():
    # execute query
    cur.execute('SELECT * FROM users')
    # fetch the result
    result = cur.fetchall()
    return {"message": result}


class Register(BaseModel):
    username: str
    password: str
    email: str
    name: str


@app.post("/register", status_code=201)
async def register_user(item: Register):
    # execute query
    try:
        # check if user exists
        cur.execute('SELECT * FROM users WHERE username = %s',
                    (item.username,))
        result = cur.fetchone()
        if result:
            return JSONResponse(status_code=400, content={"message": "User already exists"})
        cur.execute('INSERT INTO users (username, password, email, name) VALUES (%s, %s, %s, %s)',
                    (item.username, item.password, item.email, item.name))
        # TODO: encrypt password
        conn.commit()
        return JSONResponse(status_code=201, content={"message": "User created successfully"})
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500, content={"message": "Internal server error"})


class Login(BaseModel):
    username: str
    password: str


@app.post("/login", status_code=200)
async def login_user(item: Login, response: Response):
    # execute query
    try:
        # check if user exists
        cur.execute('SELECT * FROM users WHERE username = %s AND password = %s',
                    (item.username, item.password))
        result = cur.fetchone()
        if result:
            return {"message": "User logged in successfully"}
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {"message": "User not found"}
    except Exception as e:
        print(e)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {"message": "error"}
