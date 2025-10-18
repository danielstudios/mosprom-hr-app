package com.mosprom.hr.app.pre.service;

import com.mosprom.hr.app.pre.dto.VacancyRequestDTO;
import com.mosprom.hr.app.pre.dto.VacancyResponseDTO;

import java.util.List;

public interface VacancyService {
    VacancyResponseDTO createVacancy(VacancyRequestDTO request);
    List<VacancyResponseDTO> getVacanciesByHr(Long hrId);
}

