# Use a Linux-based .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["Personal Website.csproj", "."]
RUN dotnet restore "./Personal Website.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet publish "Personal Website.csproj" -c Release -o /app/publish

# Use a Linux-based ASP.NET image for runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "Personal Website.dll"]
