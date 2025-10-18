package com.mosprom.hr.app.service;

import com.mosprom.hr.app.dto.VacancyRequestDTO;
import com.mosprom.hr.app.dto.VacancyResponseDTO;
import com.mosprom.hr.app.model.User;
import com.mosprom.hr.app.model.Vacancy;
import com.mosprom.hr.app.model.VacancyStatus;
import com.mosprom.hr.app.repository.UserRepository;
import com.mosprom.hr.app.repository.VacancyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VacancyServiceImpl implements VacancyService {

    private final VacancyRepository vacancyRepository;
    private final UserRepository hrRepository;

    @Override
    public VacancyResponseDTO createVacancy(VacancyRequestDTO request) {
        User hr = hrRepository.findById(request.getId())
                .orElseThrow(() -> new RuntimeException("HR not found"));

        Vacancy vacancy = Vacancy.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .location(request.getLocation())
                .employmentType(request.getEmploymentType())
                .createdAt(LocalDateTime.now())
                .expirationDate(request.getExpirationDate())
                .status(VacancyStatus.ACTIVE)
                .author(request.getAuthor())
                .build();

        Vacancy saved = vacancyRepository.save(vacancy);
        return mapToResponse(saved);
    }

    @Override
    public List<VacancyResponseDTO> getVacanciesByHr(Long hrId) {
        return vacancyRepository.findByAuthor_Id(hrId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private VacancyResponseDTO mapToResponse(Vacancy v) {
        return VacancyResponseDTO.builder()
                .id(v.getId())
                .title(v.getTitle())
                .description(v.getDescription())
                .location(v.getLocation())
                .employmentType(v.getEmploymentType())
                .createdAt(v.getCreatedAt())
                .expirationDate(v.getExpirationDate())
                .status(v.getStatus())
                .build();
    }
}
