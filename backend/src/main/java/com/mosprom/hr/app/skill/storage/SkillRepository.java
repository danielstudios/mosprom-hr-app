package com.mosprom.hr.app.skill.storage;

import com.mosprom.hr.app.skill.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}
