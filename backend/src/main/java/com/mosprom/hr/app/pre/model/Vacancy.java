package com.mosprom.hr.app.pre.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vacancies")
public class Vacancy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;
    private String employmentType;
    private LocalDateTime createdAt;
    private LocalDateTime expirationDate;

    @Enumerated(EnumType.STRING)
    private VacancyStatus status;

    @ManyToOne
    private User author;
}