package com.mosprom.hr.app.skill.service;

import com.mosprom.hr.app.exceptions.NotFoundException;
import com.mosprom.hr.app.skill.dto.SkillDto;
import com.mosprom.hr.app.skill.mapper.SkillDtoMapper;
import com.mosprom.hr.app.skill.model.Skill;
import com.mosprom.hr.app.skill.storage.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service("skillServiceImpl")
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {
    private final SkillRepository skillRepository;
    private final SkillDtoMapper skillDtoMapper;

    @Override
    public Skill create(SkillDto skillDto) {
        final Skill skill = skillDtoMapper.mapFromDto(skillDto);
        final Skill createdSkill = skillRepository.save(skill);
        return createdSkill;
    }

    @Override
    public Skill findById(Long skillId) {
        final Skill skill = skillRepository.findById(skillId).orElseThrow(
                () -> new NotFoundException("Skill with id=" + skillId + " was not found")
        );
        return skill;
    }
}
