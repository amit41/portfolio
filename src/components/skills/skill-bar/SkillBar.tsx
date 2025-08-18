interface Props {
  name: string;
  percent: number;
  color?: string;
}

const SkillBar = (skill: Props) => {
  const getColorClass = (color?: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      default:
        return 'bg-primary';
    }
  };

  const getTextColorClass = (color?: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="skill-bar py-3">
      <div className="skill-bar-info flex flex-row justify-between text-sm mb-2">
        <span className="font-semibold text-[#1a1a1a]">{skill.name}</span>
        <span className={`font-bold ${getTextColorClass(skill.color)}`}>{skill.percent}%</span>
      </div>
      <div
        className="h-3 w-full rounded-full bg-muted overflow-hidden shadow-soft"
        role="progressbar"
        aria-valuenow={skill.percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full ${getColorClass(skill.color)} transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${skill.percent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
