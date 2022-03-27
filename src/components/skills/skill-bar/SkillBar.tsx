import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, withStyles } from '@material-ui/core/styles';

// Creating custom LinearProgress component
const CustomLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 16
    },
    bar: {
      backgroundColor: '#52ab98'
    }
  })
)(LinearProgress);

interface Props {
  name: string;
  percent: number;
}

const SkillBar = (skill: Props) => {
  return (
    <div className='skill-bar py-2'>
      <div className='skill-bar-info flex flex-row justify-between'>
        <span>{skill.name}</span>
        <span>{skill.percent}%</span>
      </div>
      <CustomLinearProgress variant='determinate' value={skill.percent} />
    </div>
  );
};

export default SkillBar;
