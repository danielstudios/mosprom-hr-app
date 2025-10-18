package com.mosprom.hr.app.pre.service;

import com.mosprom.hr.app.pre.model.Vacancy;
import com.mosprom.hr.app.pre.model.VacancyStatus;
import com.mosprom.hr.app.pre.repository.VacancyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class VacancyCleanupService {

    private final VacancyRepository vacancyRepository;

    @Scheduled(cron = "0 0 2 * * *")
    @Transactional
    public void deactivateExpiredVacancies() {
        LocalDateTime now = LocalDateTime.now();
        List<Vacancy> expired = vacancyRepository.findByExpirationDateBeforeAndStatus(now, VacancyStatus.ACTIVE);

        if (expired.isEmpty()) {
            log.info("Нет просроченных вакансий на {}", now);
            return;
        }

        expired.forEach(v -> v.setStatus(VacancyStatus.EXPIRED));
        vacancyRepository.saveAll(expired);

        log.info("Деактивированы {} вакансии по сроку действия", expired.size());
    }


    @Scheduled(cron = "0 30 2 * * *") // в 02:30
    @Transactional
    public void deleteOldExpiredVacancies() {
        LocalDateTime monthAgo = LocalDateTime.now().minusDays(30);
        List<Vacancy> oldExpired = vacancyRepository.findByExpirationDateBeforeAndStatus(monthAgo, VacancyStatus.EXPIRED);

        if (!oldExpired.isEmpty()) {
            vacancyRepository.deleteAll(oldExpired);
            log.info("Удалены {} просроченные вакансии (старше 30 дней)", oldExpired.size());
        }
    }
}

