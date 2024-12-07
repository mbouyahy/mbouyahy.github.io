import React, { useState } from "react";
import "../styles/ProjectCards.css";

const projects = [
  { id: 1, title: "ft_transcendence", description: "Developed a full-stack web application in a team, featuring chat, Pong, and Tic-Tac-Toe games, tournament functionality, and more, using Django.", link: "https://github.com/mbouyahy/ft_transcendence" },
  { id: 8, title: "webserv", description: "Building a web server from scratch, including handling HTTP requests and responses.", link: "https://github.com/mbouyahy/webserv" },
  { id: 24, title: "inception", description: "Setting up a virtualized environment with Docker, configuring services for development.", link: "https://github.com/mbouyahy/inception" },
  { id: 2, title: "libft", description: "Building your own version of the standard C library, covering basic system programming concepts.", link: "https://github.com/mbouyahy/libft" },
  { id: 3, title: "get_next_line", description: "Implementing a function that reads a line from a file descriptor, handling memory management efficiently.", link: "https://github.com/mbouyahy/get_next_line" },
  { id: 4, title: "push_swap", description: "Implementing sorting algorithms and optimizing their performance for different input sizes.", link: "https://github.com/mbouyahy/push_swap" },
  { id: 5, title: "philosophers", description: "Simulating a dining philosophers problem with synchronization and process management in C.", link: "https://github.com/mbouyahy/philosophers" },
  { id: 6, title: "minishell", description: "Creating a simple shell that mimics basic functionality of a Unix shell, including handling commands and pipes.", link: "https://github.com/mbouyahy/minishell" },
  { id: 7, title: "netpractice", description: "A network-based project focused on creating a server-client architecture and understanding low-level networking.", link: "https://github.com/mbouyahy/netpractice" },
  { id: 9, title: "ft_printf", description: "Implementing your own version of the printf function with various format specifiers.", link: "https://github.com/mbouyahy/ft_printf" },
  { id: 10, title: "cub3d", description: "Developed a 2D raycasting engine simulating 3D graphics, implementing features such as raycasting, textures, player movement, and map generation to create an interactive first-person perspective game in C.", link: "https://github.com/mbouyahy/cub3d" },
  { id: 11, title: "fract-ol", description: "Implementing a fractal viewer to explore mathematical sets like the Mandelbrot Set and Julio Set.", link: "https://github.com/mbouyahy/fract-ol" },
  { id: 12, title: "minitalk", description: "Building a communication program using Unix signals, allowing message passing between processes.", link: "https://github.com/mbouyahy/minitalk" },
  { id: 13, title: "born2beroot", description: "An introductory project focused on understanding Linux system fundamentals and setting up a Linux environment.", link: "https://github.com/mbouyahy/borntoberoot" },
  { id: 14, title: "cpp module 00", description: "Introduction to C++ covering namespaces, classes, member functions, stdio streams, initialization lists, static and const keywords, and other basic concepts.", link: "https://github.com/mbouyahy/CPP_Module00" },
  { id: 15, title: "cpp module 01", description: "Exploring memory allocation, pointers to members, references, and the switch statement in C++.", link: "https://github.com/mbouyahy/CPP_Module01" },
  { id: 16, title: "cpp module 02", description: "Focusing on polymorphism, operator overloading, and understanding fixed and floating-point types in C++.", link: "https://github.com/mbouyahy/CPP_Module02" },
  { id: 17, title: "cpp module 03", description: "Exploring inheritance in C++, focusing on class hierarchies, base and derived classes, and the concept of overriding methods.", link: "https://github.com/mbouyahy/CPP_Module03" },
  { id: 18, title: "cpp module 04", description: "Exploring subtype polymorphism, abstract classes, and interfaces in C++.", link: "https://github.com/mbouyahy/CPP_Module04" },
  { id: 19, title: "cpp module 05", description: "Exploring repetition (loops) and exception handling in C++, covering error handling mechanisms and how to use try, catch, and throw statements effectively.", link: "https://github.com/mbouyahy/CPP_Module05" },
  { id: 20, title: "cpp module 06", description: "Exploring C++ casting mechanisms, including static_cast, dynamic_cast, const_cast, and reinterpret_cast, and understanding when and how to use each type of cast.", link: "https://github.com/mbouyahy/CPP_Module06" },
  { id: 21, title: "cpp module 07", description: "Exploring C++ templates, including function templates and class templates, and understanding how to use them for generic programming and code reuse.", link: "https://github.com/mbouyahy/CPP_Module07" },
  { id: 22, title: "cpp module 08", description: "Exploring templated containers, iterators, and algorithms in C++, focusing on the Standard Template Library (STL) for building reusable data structures and efficient algorithms.", link: "https://github.com/mbouyahy/CPP_Module08" },
  { id: 23, title: "cpp module 09", description: "Mastering STL and implementing the Ford-Johnson algorithm for optimal sorting in C++, focusing on advanced algorithm design and efficient data handling.", link: "https://github.com/mbouyahy/CPP_Module09" }
];


const ProjectCards = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 cards

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3); // Load 3 more cards
  };

  const handleShowLess = () => {
    setVisibleProjects(3); // Reset to show the first 3 cards
  };

  const isAllProjectsVisible = visibleProjects >= projects.length;

  return (
    <div>
      <div className="project-container">
        {projects.slice(0, visibleProjects).map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Code Source
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="center-container">
        {!isAllProjectsVisible && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {isAllProjectsVisible && visibleProjects > 3 && (
          <button className="load-more-btn" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
