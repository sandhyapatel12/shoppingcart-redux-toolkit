###    create fake api

1.  npm install -g json-server
2.  create db.json file at your project and write your api data their
    like...
  `  {
        "products":  
            [
                {
                "createdAt": "2024-08-11T22:25:55.022Z",
                "productName": "Estelle McCullough",
                "productImg": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "price": 8400.00,
                "quantity": 5,
                "id": "1"
                }
            ]
    }`

    # or also without define name when you want to create single data if you want to create multiple data then also give name

3.  json-server --watch db.json --port 3001
4.  copy your db.json file and paste into `"https://mocki.io/fake-json-api"` website
5.  now your fake api is ready
