import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Project } from '../types/Project.types';

const useStyles = makeStyles({
  media: {
    height: 160
  }
});

const ProjectCard = (project: Project) => {
  const classes = useStyles();
  return (
    <Card className='h-full'>
      <CardMedia
        className={classes.media}
        image={project.imageUrl}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='h6'>
          {project.name}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {project.shortDescrption}
        </Typography>
        {project.projectLink && (
          <a href={project.projectLink} rel='noopener'>
            Demo
          </a>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
