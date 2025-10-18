package com.mosprom.hr.app.specialization.mapper;

import com.mosprom.hr.app.specialization.dto.SpecializationDto;
import com.mosprom.hr.app.specialization.model.Specialization;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SpecializationDtoMapper {

    SpecializationDto mapToDto(Specialization specialization);

    @Mapping(target = "id", ignore = true)
    Specialization mapFromDto(SpecializationDto specializationDto);
}
