package com.mosprom.hr.app.specialization.service;

import com.mosprom.hr.app.specialization.dto.SpecializationDto;
import com.mosprom.hr.app.specialization.model.Specialization;

public interface SpecializationService {

    Specialization create(SpecializationDto newSpecializationDto);

    Specialization findById(Long specializationId);
}
