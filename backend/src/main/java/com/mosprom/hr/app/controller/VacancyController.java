package com.mosprom.hr.app.controller;

import com.mosprom.hr.app.dto.VacancyRequestDTO;
import com.mosprom.hr.app.dto.VacancyResponseDTO;
import com.mosprom.hr.app.service.VacancyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/vacancies")
@RequiredArgsConstructor
public class VacancyController {

    private final VacancyService vacancyService;

    @PostMapping
    public VacancyResponseDTO createVacancy(@RequestBody VacancyRequestDTO request) {
        return vacancyService.createVacancy(request);
    }

    @GetMapping("/hr/{hrId}")
    public List<VacancyResponseDTO> getVacanciesByHr(@PathVariable Long hrId) {
        return vacancyService.getVacanciesByHr(hrId);
    }
}
