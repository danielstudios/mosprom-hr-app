package com.mosprom.hr.app.pre.service;

import com.mosprom.hr.app.pre.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.pre.dto.ApplicationResponseDTO;

import java.util.List;

public interface ApplicationService {
    ApplicationResponseDTO createApplication(ApplicationRequestDTO request);
    List<ApplicationResponseDTO> getApplicationsByVacancy(Long vacancyId);
}

