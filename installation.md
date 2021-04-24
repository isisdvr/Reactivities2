# React Router Dom (reactrouter.com)

npm install react-router-dom
npm install @types/react-router-dom --save-dev
npm install react-calendar
npm install @types/react-calendar

npm i react-toastify

# in Reactivities folder
dotnet new classlib -n Infrastructure
dotnet sln add Infrastructure  
cd Infrastructure
# In Infrastructure folder
dotnet add reference ../Application

# In API folder
cd API
dotnet add reference ../Infrastructure


# Delete Database
--in Reactivities folder
dotnet ef database drop -p Persistence -s API
--in API folder
dotnet watch run