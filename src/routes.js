import React from 'react';


const SkillsContainer = React.lazy(() => import('./containers/SkillsContainer'));
const AddSkillContainer = React.lazy(() => import('./containers/AddSkillContainer'));
const EditSkillContainer = React.lazy(() => import('./containers/EditSkillContainer'));
const SkillTopicsContainer = React.lazy(() => import('./containers/SkillTopicsContainer'));
const AddTopicContainer = React.lazy(() => import('./containers/AddTopicContainer'));
const EditTopicContainer = React.lazy(() => import('./containers/EditTopicContainer'));
const CategoryContainer = React.lazy(() => import('./containers/CategoryContainer'));
const UniversityContainer = React.lazy(() => import('./containers/UniversityContainer'));
const HomeContainer = React.lazy(() => import('./containers/HomeContainer'));
const SkillQuestionsContainer = React.lazy(() => import('./containers/SkillQuestionsContainer'));
const AddQuestionContainer = React.lazy(() => import('./containers/AddQuestionContainer'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: HomeContainer },
  { path: '/categories/:page?', name: 'Categories', component: CategoryContainer },
  { path: '/universities/:page?', name: 'University', component: UniversityContainer },
  { path: '/skills/add-skill', exact: true,  name: 'Add Skill', component: AddSkillContainer },
  { path: '/skills/:id/add-topic', exact: true,  name: 'Add Topic', component: AddTopicContainer },
  { path: '/skills/:id/topics/', exact: true, name: 'Skill Topics', component: SkillTopicsContainer },
  { path: '/skills/:skill_id/topics/:topic_id/edit-topic', exact: true,  name: 'Edit Topic', component: EditTopicContainer },
  { path: '/skills/edit-skill/:id', exact: true,  name: 'Edit Skill', component: EditSkillContainer },
  { path: '/skills/:page?', name: 'Skills', component: SkillsContainer },
  { path: '/skill/:skill_id/questions/:page?', name: 'Skill Questions', component: SkillQuestionsContainer },
  { path: '/skill/:skill_id/add-question', name: 'Question', component: AddQuestionContainer },
];

export default routes;
