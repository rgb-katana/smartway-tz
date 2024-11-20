import { PropsWithChildren, type FC } from 'react';
import styles from './InstrumentsPanel.module.scss';

const InstrumentsPanelComponent: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.instrumentsPanelWrapper}>{children}</div>;
};

export const InstrumentsPanel = InstrumentsPanelComponent;
