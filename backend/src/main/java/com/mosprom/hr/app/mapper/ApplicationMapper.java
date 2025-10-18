package com.mosprom.hr.app.mapper;


import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.model.Application;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ApplicationMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "appliedAt", expression = "java(LocalDateTime.now())")
    @Mapping(target = "status", expression = "java(ApplicationStatus.NEW)")
    @Mapping(target = "vacancy", ignore = true)
    Application toEntity(ApplicationRequestDTO request);

    @Mapping(target = "vacancyTitle", expression = "java(application.getVacancy() != null ? application.getVacancy().getTitle() : null)")
    @Mapping(target = "vacancyId", expression = "java(application.getVacancy() != null ? application.getVacancy().getId() : null)")
    ApplicationResponseDTO toResponse(Application application);
}

