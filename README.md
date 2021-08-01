# Assessment

to run the project, use the below command after creating a .env file that contains the .env.sample format
> docker-compose up

### Tests
![Test](https://user-images.githubusercontent.com/32738299/127763190-1c40cbcc-d669-4e91-8082-9bf4738133f1.png)


### To test live endpoint
```bash
curl --location --request POST 'https://getir-assessment-deolu.herokuapp.com/get-records' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate":"2016-05-31",
    "endDate":"2021-05-31",
    "minCount": 4000,
    "maxCount": 6000
}'
```