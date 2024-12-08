import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function CustomizedTimeline() {
  return (
    <Timeline>
      {/* Programming Languages */}
      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Programming Languages</Typography>
          <Typography variant="body2">
            C, C++, C#, Python, JavaScript
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Frontend Development */}
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Frontend Development</Typography>
          <Typography variant="body2">
            HTML, CSS, SASS, jQuery, React, Bootstrap, WordPress
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Backend Development */}
      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Backend Development</Typography>
          <Typography variant="body2">NodeJS, Django, .NET</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Databases */}
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Databases</Typography>
          <Typography variant="body2">
            SQL, MySQL, Microsoft SQL Server, MariaDB, Postgres
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* DevOps & Tools */}
      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">DevOps & Tools</Typography>
          <Typography variant="body2">Apache, Nginx, Docker, Git, Postman</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Design Tools */}
      <TimelineItem position="left">
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Design Tools</Typography>
          <Typography variant="body2">
            Figma, Adobe XD, Adobe Illustrator
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Data Science */}
      <TimelineItem position="right">
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Data Science</Typography>
          <Typography variant="body2">
            NumPy, Pandas, Matplotlib, scikit-learn
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default CustomizedTimeline;
