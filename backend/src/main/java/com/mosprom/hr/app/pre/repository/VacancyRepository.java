package com.mosprom.hr.app.pre.repository;

import com.mosprom.hr.app.pre.model.Vacancy;
import com.mosprom.hr.app.pre.model.VacancyStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface VacancyRepository extends JpaRepository<Vacancy, Long> {

    List<Vacancy> findByAuthor_Id(Long authorId);

    List<Vacancy> findByExpirationDateBeforeAndStatus(LocalDateTime now, VacancyStatus status);

    @Modifying
    @Query("UPDATE Vacancy v SET v.status = 'EXPIRED' WHERE v.expirationDate < :now AND v.status = 'ACTIVE'")
    void markExpiredVacancies(LocalDateTime now);
}
