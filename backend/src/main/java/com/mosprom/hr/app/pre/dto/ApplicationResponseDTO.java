package com.mosprom.hr.app.pre.dto;

import com.mosprom.hr.app.pre.model.ApplicationStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplicationResponseDTO {
    private Long id;
    private Long vacancyId;
    private String vacancyTitle;
    private Long candidateId;
    private String candidateName;
    private ApplicationStatus status;
    private LocalDateTime createdAt;
}
