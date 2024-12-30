# Step 1: Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Personal Website.csproj", "."]
RUN dotnet restore

# Step 2: Copy the rest of the files and publish the app in Release mode
COPY . .
RUN dotnet publish -c Release -o /app

# Step 3: Use the .NET runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Copy the build output from the build stage
COPY --from=build /app .

# Set environment variables for ASP.NET Core URLs (HTTP and HTTPS)
ENV ASPNETCORE_URLS=http://+:80

# Run the application
ENTRYPOINT ["dotnet", "Personal Website.dll"]
