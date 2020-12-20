# Getting Started with Space-x Lauchpad 

## Steps: 
Please follow the below steps: 

1. clone/donwload the project from github account 
2. Extract files, navigate to this folder and run "npm install" from terminal
3. Go to http://localhost:3000
4. Application will be up and running.

## About:
This includes a react application which is using an open third party api wihtout authentication to fetch all the space-x programs.

There is a filter section provided from where you can choose according to your preferences.

Filters are hard coded as mentioned in the assigment. I have tried to keep entire applicaiton as easy as possible. 

## Performance
### Server-side Renderring
Using server side renderring for better performance. 

## Redux
For managin the store (State) , redux has been used.

## Modules for Store
Store is created in tow modules for actions and reducers. Also, used rootreducer for future, in case we need multiple reducers in future, it will be better to keep them module wise.

## Deployed of Google Cloud | Google App Engine
Application has been deployed on Google App Engine since I have been a fan of google cloud and have been using for long. 

### Cloud | App 
Application is build and hosted in one of the bucket of Cloud Sotrage.

## Functions
To fetch the data from api "https://api.spacexdata.com/v3/launches?limit=100", in build function of ES6 is being used "fetch". (Promise)

1. Functions are kept small and specific
2. CSS is simple and conventional 
3. Used redux store for state management
4. No comments used where not required



