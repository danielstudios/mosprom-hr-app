package com.mosprom.hr.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class MospromHrApplication {
    public static void main(String[] args) {
        SpringApplication.run(MospromHrApplication.class, args);
    }
}