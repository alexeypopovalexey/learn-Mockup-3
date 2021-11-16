import React from 'react';
import img from '../../assets/images';
import { ProcetsBlock } from '../projects_block';

import './Projects_left-colom.scss';

interface IPosts {
  id: number;
  img: string;
  title: string;
  text: string;
}

const ProjectsLeftColom = () => {
  const posts: IPosts[] = [
    {
      id: Math.random(),
      img: img.projectFirstImg,
      title: 'Project Tite',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus nulla ante diam ut ridiculus. Lectus viverra egestas in ac consectetur felis, cras. Et aliquam laoreet facilisis interdum tempor ipsum. Felis morbi ut et diam sit faucibus turpis venenatis urna. Vitae nunc convallis elit, ultricies. Vestibulum dictum amet ipsum et ut nunc. Turpis nulla ornare dictumst lobortis. Et gravida egestas vel nisi purus, amet, velit morbi. Metus ultricies augue ut leo quisque nisl. Et maecenas nibh lorem proin pellentesque ipsum, mi nibh. Faucibus dignissim sem risus in. Et urna tristique non scelerisque erat volutpat et malesuada. Sem morbi sit feugiat vestibulum vulputate faucibus amet. Et pellentesque nisl augue ut. Egestas mauris, nulla sed aenean at non commodo. Lacus placerat lacinia varius consequat nisl. ',
    },
    {
      id: Math.random(),
      img: img.projectSecondImg,
      title: 'Project Tite',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus nulla ante diam ut ridiculus. Lectus viverra egestas in ac consectetur felis, cras. Et aliquam laoreet facilisis interdum tempor ipsum. Felis morbi ut et diam sit faucibus turpis venenatis urna. Vitae nunc convallis elit, ultricies. Vestibulum dictum amet ipsum et ut nunc. Turpis nulla ornare dictumst lobortis. Et gravida egestas vel nisi purus, amet, velit morbi. Metus ultricies augue ut leo quisque nisl. Et maecenas nibh lorem proin pellentesque ipsum, mi nibh. Faucibus dignissim sem risus in. Et urna tristique non scelerisque erat volutpat et malesuada. Sem morbi sit feugiat vestibulum vulputate faucibus amet. Et pellentesque nisl augue ut. Egestas mauris, nulla sed aenean at non commodo. Lacus placerat lacinia varius consequat nisl. ',
    },
    {
      id: Math.random(),
      img: img.projectThirdImg,
      title: 'Project Tite',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lectus nulla ante diam ut ridiculus. Lectus viverra egestas in ac consectetur felis, cras. Et aliquam laoreet facilisis interdum tempor ipsum. Felis morbi ut et diam sit faucibus turpis venenatis urna. Vitae nunc convallis elit, ultricies. Vestibulum dictum amet ipsum et ut nunc. Turpis nulla ornare dictumst lobortis. Et gravida egestas vel nisi purus, amet, velit morbi. Metus ultricies augue ut leo quisque nisl. Et maecenas nibh lorem proin pellentesque ipsum, mi nibh. Faucibus dignissim sem risus in. Et urna tristique non scelerisque erat volutpat et malesuada. Sem morbi sit feugiat vestibulum vulputate faucibus amet. Et pellentesque nisl augue ut. Egestas mauris, nulla sed aenean at non commodo. Lacus placerat lacinia varius consequat nisl. ',
    },
  ];
  return (
    <div className="projects__left">
      <h2 className="projects__title">Case studies</h2>
      {posts.map((elem) => (
        <ProcetsBlock props={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ProjectsLeftColom;
