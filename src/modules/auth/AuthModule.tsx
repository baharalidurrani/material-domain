import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from 'src/common/utils/tokenManager.util';
import { ModuleRouter } from 'src/components/molecules';
import { AuthRoute } from './auth.routes';

export function AuthModule() {
  console.log('AuthModule');

  const location = useLocation();
  const state = location.state as { from?: Location };
  const from = state?.from?.pathname ?? '/';

  const TOKEN = getToken();

  return TOKEN ? <Navigate to={from} replace /> : <ModuleRouter moduleRoute={AuthRoute} />;
}
