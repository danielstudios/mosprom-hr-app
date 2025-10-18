package com.mosprom.hr.app.service;


import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.mapper.ApplicationMapper;
import com.mosprom.hr.app.model.Application;
import com.mosprom.hr.app.model.Vacancy;
import com.mosprom.hr.app.repository.ApplicationRepository;
import com.mosprom.hr.app.repository.VacancyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApplicationServiceImpl implements ApplicationService {
        private final VacancyRepository vacancyRepository;
        private final ApplicationMapper applicationMapper;
        private final ApplicationRepository applicationRepository;

        public ApplicationServiceImpl(VacancyRepository vacancyRepository, ApplicationMapper applicationMapper, ApplicationRepository applicationRepository) {
            this.vacancyRepository = vacancyRepository;
            this.applicationMapper = applicationMapper;
            this.applicationRepository = applicationRepository;
        }

        public void testMapping() {
            System.out.println(applicationMapper);
        }

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
