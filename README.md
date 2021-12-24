## Overview
To create project I used CRA template. I hope that I prepared application with all requirements. I didn't want to use some extra libraries like axios, react-router or context/redux. I did some tests but not for all files. I just wanted to show my knowledge of it and prepare general cases for `App` component and one custom hook.

## Run project with 
`npm run start`

## Run tests with 
`npm run test`

## Project structure

- `api-repository` - I want to place there all api calls with request and response types
- `components` - I want to place there all components which I build application
- `hooks` - I want to place there all hooks
- `models` - I want to place there all types used in whole application
- `services` - I want to place there services
- `utils` - I want to place there utils functions

## Project architecture
![Alt text](architecture.jpg?raw=true "Title")

<span style="color:#DAE8FC">#####</span> First layer is for fetching/sending data to API. I define there all api calls.

<span style="color:#D5E8D4">#####</span> Second layer are services where I call functions from `api-repository` and I transform, do some changes in data. With services I return ready data form other layers.
 
<span style="color:#FFF2CC">#####</span> Third layer are hooks. I use there functions from services and I store data here. I also would use some store providers such as Context or Redux. In my case I didn't need to use any of that features.

<span style="color:#F8CECC">#####</span> The last layer are components. I use there hooks with ready to use state and methods.

With that layers structure I provide more flexibility and order. In my opinion project is easy to test and understand