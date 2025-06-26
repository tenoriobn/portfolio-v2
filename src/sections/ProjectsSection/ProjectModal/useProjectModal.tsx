import { useRecoilState } from 'recoil';
import { projectModalState } from 'src/lib';
import { ProjectItem } from '../projects.type';

export const useProjectModal = () => {
  const [currentProject, setCurrentProject] = useRecoilState(projectModalState);

  const openModal = (project: ProjectItem) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  const isOpen = Boolean(currentProject);

  return {
    currentProject,
    isOpen,
    openModal,
    closeModal,
  };
};