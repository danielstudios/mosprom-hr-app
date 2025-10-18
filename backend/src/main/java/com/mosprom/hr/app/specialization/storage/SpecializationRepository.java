package com.mosprom.hr.app.specialization.storage;

import com.mosprom.hr.app.specialization.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecializationRepository extends JpaRepository<Specialization, Long> {
}
