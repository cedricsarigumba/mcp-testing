
# Assumed requirements

```
Callout: This is an assumed requirements imaging real task in real project
```

## Title

Develop REST API to store per information

## Overview

- We would like to create a web system to easily register pet information.
- The scope is AWS and backend only because other team will manage UI and frontend parts.

Here is the detail requirements.

## Requirements

1. Create API to save pet information into the system with the detail below.
    * Details to save
        * pet name | String
        * type (cat or dog) | String
        * color | String
        * breed | String
        * gender | String
        * birthday | String | YYYY-MM-DD
2. Implement own error handling in case something goes wrong in the API
3. Lambda function will be used as compute resource, so please use AWS SAM template for local testing
3. Records should be saved in AWS DynamoDB
4. Data validation and input sanitization - ensure the API handles erroneous or malicious data properly
5. Use Node.js
