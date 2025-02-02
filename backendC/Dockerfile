# Use the official openjdk image to build the app
FROM openjdk:17-jdk-slim AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and dependencies for caching
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Build the Spring Boot application (create a JAR file)
RUN mvn clean package -DskipTests

# Use a smaller JRE image for running the app
FROM openjdk:17-jre-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build image
COPY --from=build /app/target/backendC-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port your app will run on (e.g., 8080)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
