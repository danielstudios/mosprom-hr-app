package com.mosprom.hr.app.mapper;

import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.model.Application;
import com.mosprom.hr.app.model.ApplicationStatus;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring", imports = {LocalDateTime.class, ApplicationStatus.class})
public interface ApplicationMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", expression = "java(LocalDateTime.now())")
    @Mapping(target = "status", expression = "java(ApplicationStatus.WAITING)")
    @Mapping(target = "vacancy", ignore = true)
    @Mapping(target = "comment", ignore = true)
    @Mapping(target = "candidate", ignore = true)     // игнорируем comment
    Application toEntity(ApplicationRequestDTO request);

    @Mapping(target = "vacancyTitle", expression = "java(application.getVacancy() != null ? application.getVacancy().getTitle() : null)")
    @Mapping(target = "vacancyId", expression = "java(application.getVacancy() != null ? application.getVacancy().getId() : null)")
    @Mapping(target = "candidateId", ignore = true)     // игнорируем comment
    @Mapping(target = "candidateName", ignore = true)     // игнорируем comment
    ApplicationResponseDTO toResponse(Application application);
}

