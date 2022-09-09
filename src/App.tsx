import React from 'react';
import { AppRouting } from './routes/AppRouting';
import { CustomMuiTheme } from './theme/CustomMuiTheme';

export function App(): React.ReactElement {
  console.log('App Rendered 🚀🚀🚀');
  return (
    <CustomMuiTheme>
      <AppRouting />
    </CustomMuiTheme>
  );
}
