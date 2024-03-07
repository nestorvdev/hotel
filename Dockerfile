##
## Build stage Java
##
#FROM maven:3.6.0-jdk-11-slim AS build-back
#COPY src /home/app/src
#COPY pom.xml /home/app
#RUN mvn -f /home/app/pom.xml clean package -U
#
##
## Package stage Java
##
#FROM openjdk:11-jre-slim
#COPY --from=build-back /home/app/target/integrador-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar
#ENTRYPOINT ["java", "-jar", "/usr/local/lib/app.jar"]
#EXPOSE 8080

FROM maven:3-openjdk-11 AS build
COPY  . .
RUN mvn clean package -DskipTests

FROM openjdk:11.0.16-jdk-slim
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]