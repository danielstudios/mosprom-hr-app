package com.mosprom.hr.app.specialization.service;

import com.mosprom.hr.app.exceptions.NotFoundException;
import com.mosprom.hr.app.specialization.dto.SpecializationDto;
import com.mosprom.hr.app.specialization.mapper.SpecializationDtoMapper;
import com.mosprom.hr.app.specialization.model.Specialization;
import com.mosprom.hr.app.specialization.storage.SpecializationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service("specializationServiceImpl")
@RequiredArgsConstructor
public class SpecializationServiceImpl implements SpecializationService {
    private final SpecializationRepository specializationRepository;
    private final SpecializationDtoMapper specializationDtoMapper;

    @Override
    public Specialization create(SpecializationDto specializationDto) {
        final Specialization skill = specializationDtoMapper.mapFromDto(specializationDto);
        final Specialization createdSpecialization = specializationRepository.save(skill);
        return createdSpecialization;
    }

    @Override
    public Specialization findById(Long specializationId) {
        final Specialization specialization = specializationRepository.findById(specializationId).orElseThrow(
                () -> new NotFoundException("Specialization with id=" + specializationId + " was not found")
        );
        return specialization;
    }
}
