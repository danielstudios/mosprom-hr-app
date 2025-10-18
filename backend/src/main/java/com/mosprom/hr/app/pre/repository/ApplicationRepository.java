package com.mosprom.hr.app.pre.repository;

import com.mosprom.hr.app.pre.model.Application;
import com.mosprom.hr.app.pre.model.ApplicationStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByVacancyId(Long vacancyId);
    List<Application> findByVacancyIdAndStatus(Long vacancyId, ApplicationStatus status);
}

