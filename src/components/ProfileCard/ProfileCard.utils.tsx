import StarIcon from 'assets/icons/star.svg?react';
import BranchIcon from 'assets/icons/branch.svg?react';
import ArchiveIcon from 'assets/icons/archive.svg?react';
import TerminalIcon from 'assets/icons/terminal.svg?react';
import FolderIcon from 'assets/icons/folder.svg?react';
import CreateIcon from 'assets/icons/create.svg?react';
import { IRepoPoints } from 'src/pages/Repositories/Repositories.types';
import { formatNumberWithSpaces } from 'src/utils/formatNumberWithSpaces';
import { formatDate } from 'src/utils/formatDate';

export const getPointsConfig = (points: IRepoPoints) => {
  return [
    {
      icon: <StarIcon />,
      upperText: formatNumberWithSpaces(points.stargazers_count),
      bottomText: 'Количество звезд',
    },
    {
      icon: <BranchIcon />,
      upperText: formatNumberWithSpaces(points.forks_count),
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
      upperText: formatDate(new Date(points.created_at)),
      bottomText: 'Создано',
    },
    {
      icon: <CreateIcon />,
      upperText: formatDate(new Date(points.updated_at)),
      bottomText: 'Изменено',
    },
  ];
};
