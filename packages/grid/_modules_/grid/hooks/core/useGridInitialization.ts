import type { GridApiRef } from '../../models/api/gridApiRef';
import type { GridComponentProps } from '../../GridComponentProps';

import { useGridLoggerFactory } from './useGridLoggerFactory';
import { useGridApiInitialization } from './useGridApiInitialization';
import { useGridErrorHandler } from './useGridErrorHandler';
import { useGridLocaleText } from './useGridLocaleText';
import { useGridPreProcessing } from './preProcessing';
import { useGridRowGroupsPreProcessing } from './rowGroupsPerProcessing';
import { useGridStateInitialization } from './useGridStateInitialization';

/**
 * Initialize the technical pieces of the DataGrid (logger, state, ...) that any DataGrid implementation needs
 */
export const useGridInitialization = (apiRef: GridApiRef, props: GridComponentProps) => {
  useGridLoggerFactory(apiRef, props);
  useGridApiInitialization(apiRef, props);
  useGridErrorHandler(apiRef, props);
  useGridStateInitialization(apiRef, props);
  useGridPreProcessing(apiRef);
  useGridRowGroupsPreProcessing(apiRef);
  useGridLocaleText(apiRef, props);
};
