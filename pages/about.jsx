const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
Hi,
I'm Mirela

<br></br> - final year Computer Science student and nearly done with my Bachelors degree.
        <p>
          I have successfully completed several web projects from scratch.

        <br></br> I’m trying to create something that could push me to try and experiment with different technology stacks.
        </p>
<br></br>


<br></br><p>
# Currently
        I have 3 main technical stacks which I work with. This includes
        <ul>
-HTML, CSS,JavaScript,
-Bootstrap, tailwind CSS, SCSS
-React JS and Next JS.</ul></p>

      <br></br> As I prefer to learn skills as I need them,
       <br></br> so I can focus on finding solutions to problems.When developing sites I first aim to understand<br>
       </br> the needs and goals of the project,</p>
       <p>Throughout my life I have always been eager to learn. In my own time I do a lot of outside reading and independent study. I motivate my independent study by setting goals to achieve; 
       I am searching for further opportunities where I can facilitate my personal and professional development.

      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
