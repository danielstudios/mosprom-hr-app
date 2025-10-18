package com.mosprom.hr.app.specialization.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "skill")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
public class Specialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", length = 300)
    private String name;
}
