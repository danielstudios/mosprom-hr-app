package com.mosprom.hr.app.repository;

import com.mosprom.hr.app.model.Application;
import com.mosprom.hr.app.model.ApplicationStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByVacancyId(Long vacancyId);
    List<Application> findByVacancyIdAndStatus(Long vacancyId, ApplicationStatus status);
}

