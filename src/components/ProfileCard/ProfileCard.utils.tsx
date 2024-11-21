import StarIcon from 'assets/icons/star.svg?react';
import BranchIcon from 'assets/icons/branch.svg?react';
import ArchiveIcon from 'assets/icons/archive.svg?react';
import TerminalIcon from 'assets/icons/terminal.svg?react';
import FolderIcon from 'assets/icons/folder.svg?react';
import CreateIcon from 'assets/icons/create.svg?react';
import { IRepoPoints } from 'src/pages/Repositories/Repositories.types';

export const getPointsConfig = (points: IRepoPoints) => {
  return [
    {
      icon: <StarIcon />,
      upperText: points.stargazers_count.toLocaleString(),
      bottomText: 'Количество звезд',
    },
    {
      icon: <BranchIcon />,
      upperText: points.forks_count.toLocaleString(),
      bottomText: 'Количество форков',
    },
    {
      icon: <ArchiveIcon />,
      upperText: points.archived ? 'Да' : 'Нет',
      bottomText: 'В архиве',
    },
    {
      icon: <TerminalIcon />,
      upperText: points.language || 'N/A',
      bottomText: 'Язык',
    },
    {
      icon: <FolderIcon />,
      upperText: new Date(points.created_at).toLocaleDateString(),
      bottomText: 'Создано',
    },
    {
      icon: <CreateIcon />,
      upperText: new Date(points.updated_at).toLocaleDateString(),
      bottomText: 'Изменено',
    },
  ];
};
