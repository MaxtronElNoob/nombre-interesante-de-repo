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

# Define your methods here

class User(BaseModel):
    username: str
    password: str
    email: str
    name: str

@app.post("/users")
async def createUser(user: User):
    try:
        cur.execute("INSERT INTO users (username, password, email, name) VALUES (%s, %s, %s, %s)", (user.username, user.password, user.email, user.name))
        conn.commit()
        return JSONResponse(content= {"message": "User created successfully"}, status_code=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@app.get("/users")
async def getUsers():
    try:
        cur.execute("SELECT * FROM users")
        users = cur.fetchall()
        return JSONResponse(content= {"users": users}, status_code=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@app.put("/users/{id}")
async def update(id: int, user: User):
    try:
        cur.execute("UPDATE users SET username = %s, password = %s, email = %s, name = %s WHERE id = %s", (user.username, user.password, user.email, user.name, id))
        conn.commit()
        return JSONResponse(content= {"message": "User updated successfully"}, status_code=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@app.delete("/users/{id}")
async def delete(id: int):
    try:
        cur.execute("DELETE FROM users WHERE id = %s", (id,))
        conn.commit()
        return JSONResponse(content= {"message": "User deleted successfully"}, status_code=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# Payments
class Payment(BaseModel):
    buyer_id: int
    seller_id: int
    amount: int
    description: str

@app.get("/payments")
async def getPayments():
    try:
        pagos = []
        cur.execute("SELECT * FROM payments")
        payments = cur.fetchall()
        for payment in payments:
            print(payment)
            cur.execute("SELECT name FROM users WHERE id = %s", (payment[2],))
            seller = cur.fetchone()
            cur.execute("SELECT name FROM users WHERE id = %s", (payment[1],))
            buyer = cur.fetchone()
            pagos.append({"id": payment[0], "buyer": buyer[0], "seller": seller[0], "amount": payment[3], "description": payment[4]})
            print(pagos)
        return JSONResponse(content= {"payments": pagos}, status_code=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@app.post("/payments")
async def createPayment(payment: Payment):
    try:
        cur.execute("INSERT INTO payments (buyer_id, seller_id, amount, description) VALUES (%s, %s, %s, %s)", (payment.buyer_id, payment.seller_id, payment.amount, payment.description))
        conn.commit()
        return JSONResponse(content= {"message": "Payment created successfully"}, status_code=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)