package com.mosprom.hr.app.service;

import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;

import java.util.List;

public interface ApplicationService {
    ApplicationResponseDTO createApplication(ApplicationRequestDTO request);
    List<ApplicationResponseDTO> getApplicationsByVacancy(Long vacancyId);
}

