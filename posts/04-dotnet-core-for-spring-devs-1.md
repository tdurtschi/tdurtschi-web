---
title: ".NET Core for Spring Boot Devs - Configuration"
date: "2021-12-14"
previewLength: 630
---

I've worked on several Java Spring Boot codebases over the last few years. On a recent project, we decided to use .NET Core 5 instead of Java since the engineers on our team were more familiar with it. .NET Core 5 has excellent support for cloud-native development patterns such as externalized configuration, but things look slightly different compared to Spring Boot.

This short post will assume you understand why configurability is important, and how it's implemented in Spring Boot. My goal is to provide a side-by-side comparison in order to help someone with Spring Boot experience get started in .NET Core more quickly. 

## Provide configuration values in a file:
##### Spring Boot
```yml
# src/main/resources/application-myprofile.yml

externalService:
  url: https://my-external-service.com/
```

##### .NET Core

```json
// ProjectDir/appsettings.myenvironment.json

"externalService": {
    "url": "https://my-external-service.com/"
}
```

## Provide configuration values as environment variables:
Both frameworks support configuration through environment variables. If a value is provided in both a file and as an environment variable, the environment variable will be used. One difference to note here is that each framework parses the variable names differently. 

##### Spring Boot
Transform property names to uppercase and use an underscore `_` for nested properties:
```bash
$> EXTERNALSERVICE_URL=https://different-service.com ./gradlew bootRun
```

##### .NET Core
Preserve case and use two underscores `__` for nested properties:
```bash
$> externalService__url=https://different-service.com dotnet run
```

## Specify profile/environment at runtime:
##### Spring Boot
```bash
$> SPRING_PROFILES_ACTIVE=myprofile ./gradlew bootRun
```

##### .NET Core
```bash
$> ASPNETCORE_ENVIRONMENT=myenvironment dotnet run
```

**Caveat:** While Spring Boot supports multiple **profiles** at runtime, .NET Core only supports one **environment** at runtime.

## Use configuration values in code:

##### Spring Boot
```java
import org.springframework.beans.factory.annotation.Value;

...

@Component
public class MyComponent {

    @Value("${externalService.url}")
    private String externalServiceUrl;

    ...
}

```

##### .NET Core

```csharp
using Microsoft.Extensions.Configuration;

...

public class MyComponent {
    private String externalServiceUrl;
    
    public MyComponent(IConfiguration configuration) {
        externalServiceUrl = configuration["externalService:url"];
    }

    ...
}
```

Note: One difference between Spring Boot and .NET Core is that, using this pattern, a missing configuration value will be caught at boot time in Spring Boot, but at runtime (whenever the constructor is called) in .NET Core. In order to fail at boot time, a different strategy called the [Options pattern](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-5.0) must be used.

## More resources:
For general info about externalized configuration: [https://12factor.net/config](https://12factor.net/config)

For more info about how configuration works in Spring Boot: [https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-external-config.html](https://docs.spring.io/spring-boot/docs/1.2.0.M1/reference/html/boot-features-external-config.html)

For more info about how configuration works in .NET Core: [https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0)
