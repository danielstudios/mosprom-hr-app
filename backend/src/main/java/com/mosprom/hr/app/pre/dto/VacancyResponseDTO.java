package com.mosprom.hr.app.pre.dto;


import com.mosprom.hr.app.pre.model.VacancyStatus;
import lombok.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VacancyResponseDTO {
    private Long id;
    private String title;
    private String description;
    private String location;
    private String employmentType;
    private LocalDateTime createdAt;
    private LocalDateTime expirationDate;
    private VacancyStatus status;
    private String author;
}

