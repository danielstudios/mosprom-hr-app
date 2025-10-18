package com.mosprom.hr.app.service;


import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.mapper.ApplicationMapper;
import com.mosprom.hr.app.model.Application;
import com.mosprom.hr.app.model.Vacancy;
import com.mosprom.hr.app.repository.ApplicationRepository;
import com.mosprom.hr.app.repository.VacancyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final VacancyRepository vacancyRepository;
    private final ApplicationMapper applicationMapper;

    @Override
    public ApplicationResponseDTO createApplication(ApplicationRequestDTO request) {
        Vacancy vacancy = vacancyRepository.findById(request.getVacancyId())
                .orElseThrow(() -> new RuntimeException("Vacancy not found"));

        Application application = applicationMapper.toEntity(request);
        application.setVacancy(vacancy);

        applicationRepository.save(application);
        return applicationMapper.toResponse(application);
    }

    @Override
    public List<ApplicationResponseDTO> getApplicationsByVacancy(Long vacancyId) {
        return applicationRepository.findByVacancyId(vacancyId)
                .stream()
                .map(applicationMapper::toResponse)
                .collect(Collectors.toList());
    }
}
