# API Requests


----------------------------------------------------------------------------------

### Tasks Module

###### 1. Add
http://localhost:3000/api/eatofy/tasks/add
`POST`
```json
{
    "task": "Subscription Payment Due",
    "date": "YYYY-MM-DD",
    "status": "Pending"
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/tasks/fetch
`GET`

###### 3. Update
http://localhost:3000/api/eatofy/tasks/update
`PUT`
```json
{
    "task_id": "ba4c0332-317f-4609-b011-6268f4bd12fc",
    "status": "Done"
}
```

###### 4. Remove
http://localhost:3000/api/eatofy/tasks/remove
`DELETE`
```json
{
    "task_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

