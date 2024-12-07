// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';

// export default function CustomizedTimeline() {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           align="right"
//           variant="body2"
//           color="text.secondary"
//         >
//           9:30 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Eat
//           </Typography>
//           <Typography>Because you need strength</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           variant="body2"
//           color="text.secondary"
//         >
//           10:00 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Code
//           </Typography>
//           <Typography>Because it&apos;s awesome!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Sleep
//           </Typography>
//           <Typography>Because you need rest</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Repeat
//           </Typography>
//           <Typography>Because this is the life you love!</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }


// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import Typography from '@mui/material/Typography';

// function CustomizedTimeline() {
//   return (
//     <Timeline position="alternate">
//       {/* Programming Languages */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Core Skills
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="primary" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Programming Languages</Typography>
//           <Typography>C, C++, C#, Python, JavaScript, Shell Script</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Frontend Development */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             UI/UX Expertise
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="secondary" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Frontend Development</Typography>
//           <Typography>CSS3, SASS, jQuery, React, Bootstrap, WordPress</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Backend Development */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Server-Side
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="success" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Backend Development</Typography>
//           <Typography>NodeJS, Django, .NET</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Databases */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Data Management
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="info" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Databases</Typography>
//           <Typography>MySQL, Microsoft SQL Server, MariaDB, PostgreSQL</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* DevOps & Tools */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Toolchain
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="warning" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">DevOps & Tools</Typography>
//           <Typography>Apache, Nginx, Docker, Git, Postman</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Design Tools */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Creative Suite
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot color="error" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Design Tools</Typography>
//           <Typography>Figma, Adobe XD, Adobe Illustrator</Typography>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Data Science */}
//       <TimelineItem>
//         <TimelineOppositeContent>
//           <Typography variant="body2" color="text.secondary">
//             Analytics
//           </Typography>
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//         </TimelineSeparator>
//         <TimelineContent>
//           <Typography variant="h6">Data Science</Typography>
//           <Typography>NumPy, Pandas, Matplotlib, scikit-learn</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

// export default CustomizedTimeline;

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
    // <div class="time-line" >
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
    // </div>
  );
}

export default CustomizedTimeline;
