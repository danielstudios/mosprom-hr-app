package com.mosprom.hr.app.pre.controller;


import com.mosprom.hr.app.pre.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.pre.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.pre.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public ApplicationResponseDTO create(@RequestBody ApplicationRequestDTO request) {
        return applicationService.createApplication(request);
    }

    @GetMapping("/vacancy/{vacancyId}")
    public List<ApplicationResponseDTO> getByVacancy(@PathVariable Long vacancyId) {
        return applicationService.getApplicationsByVacancy(vacancyId);
    }
}


