# BankAPIAssesment

Practicing MongoDB + Nodejs API for BankAPIAssesment

# Please import the postman collection in your postman. it will help full to run this code.
``` https://www.getpostman.com/collections/f436aed161841972446b ```

# MongoDB 

MongoDB I"ve already connect with cloud dB. 
``` mongodb+srv://abbas:Abbas@22@cluster0.typoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ```
I already connected so just you can start npm start

## Installation

If you want to test it locally, you can follow the following steps to install and run it successfully.

#### Requirements:

- Git installed
- Node.js installed

#### Steps

```npm install```
```npm start```

## Routes

There are just few routes that were created to study about APIs and how to deal with NoSQL databases.

### Home
```
- URL: '/'
- HTTP Method: GET
- Params: None
- Headers: None
```

___

I've attached the postman url please import the collection to your postman

#### How to authenticate:
```
Route: /auth
Method: POST,
AdminPrivilege: false,
Header: --,
Body: {
        email: abbas@abbas.com,
        password: "abbas"
    }
```

#### How to get all Account's info:
```
Route: /bank
Method: GET,
AdminPrivilege: true,
Params: Account number
Header: --,
Body: --
```

#### How to get an Account's info:
```
Route: /bank/:account
Method: GET,
AdminPrivilege: false,
Params: Account number
Body: --
```


___
#### How to create a Bank Account:
```
Route: /bank/create
Method: POST,
AdminPrivilege: false,
Header: --,
Body: {
    "owner": "sample",
    "email": "sample@simple.com",
    "password": "abbas"
}
```

___
#### How to deposit to a Bank Account:
```
Route: /bank/deposit
Method: POST,
AdminPrivilege: false,
Header: --,
Body: {
    "account": 000,
    "value": 3000
}
```

___
#### How to withdraw of a Bank Account:
```
Route: /bank/withdraw
Method: POST,
AdminPrivilege: false,
Body: {
    "owner": "teste",
    "account": 000,
    "value": 3000
}
```

___
#### How to transfer between accounts:
```
Route: /bank/transfer
Method: PUT,
AdminPrivilege: false,
Body: {
    "outAccount": 7233,
    "incAccount": 265,
    "value": 1000
}
```
___
#### How to delete accounts:
```
Route: /bank/delete
Method: DELETE,
AdminPrivilege: true,
Body: {
    "account": 0000,
}
```


### Thanks & Regards
### Mohamed Abbas M
### Full Stack Developer
___
