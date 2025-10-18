package com.mosprom.hr.app.service;

import com.mosprom.hr.app.dto.VacancyRequestDTO;
import com.mosprom.hr.app.dto.VacancyResponseDTO;

import java.util.List;

public interface VacancyService {
    VacancyResponseDTO createVacancy(VacancyRequestDTO request);
    List<VacancyResponseDTO> getVacanciesByHr(Long hrId);
}

