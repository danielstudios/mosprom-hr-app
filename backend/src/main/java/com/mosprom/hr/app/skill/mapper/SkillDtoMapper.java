package com.mosprom.hr.app.skill.mapper;

import com.mosprom.hr.app.skill.dto.SkillDto;
import com.mosprom.hr.app.skill.model.Skill;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SkillDtoMapper {

    SkillDto mapToDto(Skill skill);

    @Mapping(target = "id", ignore = true)
    Skill mapFromDto(SkillDto skillDto);
}
