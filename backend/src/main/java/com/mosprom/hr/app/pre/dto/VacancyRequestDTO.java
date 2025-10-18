package com.mosprom.hr.app.pre.dto;


import com.mosprom.hr.app.pre.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VacancyRequestDTO {
    private Long id;
    private String title;
    private String description;
    private String location;
    private String employmentType;
    private LocalDateTime expirationDate;
    private User author;
}
