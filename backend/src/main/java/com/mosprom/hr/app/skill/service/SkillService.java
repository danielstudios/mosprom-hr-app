package com.mosprom.hr.app.skill.service;

import com.mosprom.hr.app.skill.dto.SkillDto;
import com.mosprom.hr.app.skill.model.Skill;

public interface SkillService {

    Skill create(SkillDto newCategoryDto);

    Skill findById(Long skillId);
}
