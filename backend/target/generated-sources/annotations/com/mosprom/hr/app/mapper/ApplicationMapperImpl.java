package com.mosprom.hr.app.mapper;

import com.mosprom.hr.app.dto.ApplicationRequestDTO;
import com.mosprom.hr.app.dto.ApplicationResponseDTO;
import com.mosprom.hr.app.model.Application;
import com.mosprom.hr.app.model.ApplicationStatus;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-10-18T17:42:45+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.8 (Oracle Corporation)"
)
@Component
public class ApplicationMapperImpl implements ApplicationMapper {

    @Override
    public Application toEntity(ApplicationRequestDTO request) {
        if ( request == null ) {
            return null;
        }

        Application.ApplicationBuilder application = Application.builder();

        application.createdAt( LocalDateTime.now() );
        application.status( ApplicationStatus.WAITING );

        return application.build();
    }

    @Override
    public ApplicationResponseDTO toResponse(Application application) {
        if ( application == null ) {
            return null;
        }

        ApplicationResponseDTO.ApplicationResponseDTOBuilder applicationResponseDTO = ApplicationResponseDTO.builder();

        applicationResponseDTO.id( application.getId() );
        applicationResponseDTO.status( application.getStatus() );
        applicationResponseDTO.createdAt( application.getCreatedAt() );

        applicationResponseDTO.vacancyTitle( application.getVacancy() != null ? application.getVacancy().getTitle() : null );
        applicationResponseDTO.vacancyId( application.getVacancy() != null ? application.getVacancy().getId() : null );

        return applicationResponseDTO.build();
    }
}
